#!/usr/bin/env node
// Standalone GitHub Actions marketing pipeline. Nothing publishes by default.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
const folder = path.dirname(fileURLToPath(import.meta.url));
const read = (file) => JSON.parse(fs.readFileSync(path.join(folder, file), "utf8"));
const campaigns = read("campaigns.json");
const queue = read("queue.json");
const validChannels = new Set(["facebook", "instagram", "linkedin"]);

export function validate(config = campaigns, content = queue) {
  const problems = [];
  const offers = new Set((config.offers || []).map((o) => o.id));
  if (!offers.has("management") || !offers.has("launch")) problems.push("Missing one of the two Amazon service offers.");
  const ids = new Set();
  for (const post of content.posts || []) {
    if (!/^[a-z0-9-]+$/.test(post.id || "") || ids.has(post.id)) problems.push("Invalid or duplicate post ID: " + post.id);
    ids.add(post.id);
    if (!offers.has(post.offerId)) problems.push("Invalid offer: " + post.id);
    if (!["draft", "approved", "paused"].includes(post.status)) problems.push("Invalid status: " + post.id);
    if (!Array.isArray(post.channels) || !post.channels.length || post.channels.some((c) => !validChannels.has(c)) || new Set(post.channels).size !== post.channels.length) problems.push("Invalid channels: " + post.id);
    if (typeof post.text !== "string" || post.text.length < 30 || post.text.length > 2000) problems.push("Post text must be 30-2000 characters: " + post.id);
    if (post.publishAt !== null && (typeof post.publishAt !== "string" || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(post.publishAt) || !Number.isFinite(Date.parse(post.publishAt)))) problems.push("Invalid UTC publishAt: " + post.id);
    if (post.status === "approved" && !post.publishAt) problems.push("Approved post needs scheduled UTC publishAt: " + post.id);
    if (post.imageUrl !== null && (typeof post.imageUrl !== "string" || !/^https:\/\//.test(post.imageUrl))) problems.push("imageUrl must be public HTTPS: " + post.id);
    if (post.status === "approved" && post.channels.includes("instagram") && !post.imageUrl) problems.push("Approved Instagram post needs an imageUrl: " + post.id);
  }
  return problems;
}
export const duePosts = (content = queue, now = new Date()) =>
  (content.posts || []).filter((p) => p.status === "approved" && p.publishAt && Date.parse(p.publishAt) <= now.getTime());

export function editorialBrief(config = campaigns, today = new Date()) {
  const week = Math.floor(today.getTime() / 604800000);
  let output = "# Ecomtik Marketing — Weekly Editorial Brief\n\nDate: " + today.toISOString().slice(0, 10) + "\n\nObjective: acquire Amazon brand management and new-brand-launch clients.\n\n";
  for (const offer of config.offers) {
    output += "## " + offer.name + "\n\nAudience: " + offer.audience + "\n\n";
    for (let i = 0; i < 2; i++) {
      const topic = offer.topics[(week * 2 + i) % offer.topics.length];
      output += "- Topic: " + topic + "\n  - CTA: " + offer.cta + " (" + offer.landingPage + ")\n  - Draft formats: LinkedIn advice, Facebook explanation, Instagram graphic if licensed media exists.\n  - Verify facts and proof; approve finished copy through a GitHub PR.\n";
    }
    output += "\n";
  }
  return output + "Do not invent testimonials, returns, client results or official Amazon partnerships.\n";
}
async function siteAudit() {
  const urls = ["/", "/services/amazon-account-management", "/contact", "/robots.txt", "/sitemap.xml"];
  let failed = 0;
  const rows = ["# Ecomtik site health", "", "Checked: " + new Date().toISOString(), ""];
  for (const part of urls) {
    const url = "https://ecomtik.com" + part;
    try {
      const response = await fetch(url, {signal:AbortSignal.timeout(15000)});
      const html = await response.text();
      const missing = [];
      if (part !== "/robots.txt" && part !== "/sitemap.xml" && response.ok) {
        if (!/<title[\s>]/i.test(html)) missing.push("title");
        if (!/<h1[\s>]/i.test(html)) missing.push("H1");
        if (!/name=["']description["']/i.test(html)) missing.push("description");
      }
      rows.push("- " + part + ": HTTP " + response.status + (missing.length ? " (review: " + missing.join(", ") + ")" : ""));
      if (!response.ok) failed++;
    } catch (e) {
      rows.push("- " + part + ": failed: " + e.message);
      failed++;
    }
  }
  writeReport("site-health.md", rows.join("\n") + "\n");
  if (failed) process.exitCode = 1;
}
function writeReport(name, body) {
  const dest = path.join(folder, "output");
  fs.mkdirSync(dest, {recursive:true});
  fs.writeFileSync(path.join(dest, name), body);
}
async function gh(endpoint, method = "GET", body = undefined) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY;
  if (!token || !repo || !/^[\w.-]+\/[\w.-]+$/.test(repo)) throw Error("GitHub issue ledger not configured.");
  const response = await fetch("https://api.github.com/repos/" + repo + endpoint, {
    method,
    headers:{"Authorization":"Bearer " + token,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","Content-Type":"application/json"},
    body:body === undefined ? undefined : JSON.stringify(body),
    signal:AbortSignal.timeout(20000)
  });
  if (!response.ok) throw Error("GitHub issue API HTTP " + response.status);
  return response.json();
}
async function findIssue(title) {
  for (let page = 1; page <= 20; page++) {
    const batch = await gh("/issues?state=all&per_page=100&page=" + page);
    const found = batch.find((item) => !item.pull_request && item.title === title);
    if (found) return found;
    if (batch.length < 100) return null;
  }
  throw Error("Ledger issue scan exceeded safety limit; stopped publishing.");
}
function env(...names) {
  for (const name of names) if (!process.env[name]) throw Error("Missing configuration: " + name);
}
function platformConfig(channel) {
  if (channel === "facebook") env("META_GRAPH_VERSION", "META_PAGE_ID", "META_PAGE_TOKEN");
  if (channel === "instagram") env("META_GRAPH_VERSION", "META_INSTAGRAM_ID", "META_INSTAGRAM_TOKEN");
  if (channel === "linkedin") env("LINKEDIN_ORG_URN", "LINKEDIN_ACCESS_TOKEN", "LINKEDIN_API_VERSION");
}
async function expectJson(response, platform) {
  if (!response.ok) throw Error(platform + " returned HTTP " + response.status + "; manual reconciliation required.");
  return response.json();
}
async function platformPublish(channel, post, offer) {
  if (channel === "facebook" || channel === "instagram") {
    const version = process.env.META_GRAPH_VERSION;
    if (!/^v\d+\.\d+$/.test(version)) throw Error("Invalid Meta Graph version.");
    const base = "https://graph.facebook.com/" + version + "/";
    if (channel === "facebook") {
      const data = new URLSearchParams({message:post.text + "\n\n" + offer.landingPage,access_token:process.env.META_PAGE_TOKEN});
      const response = await fetch(base + encodeURIComponent(process.env.META_PAGE_ID) + "/feed",{method:"POST",body:data,signal:AbortSignal.timeout(25000)});
      return (await expectJson(response,"Facebook")).id || "published";
    }
    const data = new URLSearchParams({image_url:post.imageUrl,caption:post.text + "\n\n" + offer.cta,access_token:process.env.META_INSTAGRAM_TOKEN});
    const create = await fetch(base + encodeURIComponent(process.env.META_INSTAGRAM_ID) + "/media",{method:"POST",body:data,signal:AbortSignal.timeout(25000)});
    const container = await expectJson(create,"Instagram media");
    if (!container.id) throw Error("Instagram returned no media container.");
    let ready = false;
    for (let attempt = 0; attempt < 6; attempt++) {
      await new Promise((resolve) => setTimeout(resolve,2500));
      const status = await fetch(base + encodeURIComponent(container.id) + "?fields=status_code&access_token=" + encodeURIComponent(process.env.META_INSTAGRAM_TOKEN),{signal:AbortSignal.timeout(20000)});
      const info = await expectJson(status,"Instagram status");
      if (info.status_code === "FINISHED") { ready = true; break; }
      if (["EXPIRED","ERROR"].includes(info.status_code)) throw Error("Instagram media container failed.");
    }
    if (!ready) throw Error("Instagram media still processing; review before any retry.");
    const published = await fetch(base + encodeURIComponent(process.env.META_INSTAGRAM_ID) + "/media_publish",{method:"POST",body:new URLSearchParams({creation_id:container.id,access_token:process.env.META_INSTAGRAM_TOKEN}),signal:AbortSignal.timeout(25000)});
    return (await expectJson(published,"Instagram publish")).id || "published";
  }
  const payload = {author:process.env.LINKEDIN_ORG_URN,commentary:post.text + "\n\n" + offer.landingPage,visibility:"PUBLIC",distribution:{feedDistribution:"MAIN_FEED",targetEntities:[],thirdPartyDistributionChannels:[]},lifecycleState:"PUBLISHED",isReshareDisabledByAuthor:false};
  const response = await fetch("https://api.linkedin.com/rest/posts",{
    method:"POST",
    headers:{"Authorization":"Bearer " + process.env.LINKEDIN_ACCESS_TOKEN,"LinkedIn-Version":process.env.LINKEDIN_API_VERSION,"X-Restli-Protocol-Version":"2.0.0","Content-Type":"application/json"},
    body:JSON.stringify(payload),signal:AbortSignal.timeout(25000)
  });
  if (!response.ok) throw Error("LinkedIn returned HTTP " + response.status + "; check application access and API version.");
  return response.headers.get("x-restli-id") || "published";
}
async function publish() {
  if (process.env.ECOMTIK_PUBLISH_ENABLED !== "true" || process.env.GITHUB_REF !== "refs/heads/main")
    throw Error("Publishing is locked until explicitly enabled on the main branch.");
  let count = 0;
  let processedPostIds = 0;
  for (const post of duePosts()) {
    let startedThisPost = false;
    const offer = campaigns.offers.find((o) => o.id === post.offerId);
    for (const channel of post.channels) {
      const title = "[ecomtik-post] " + post.id + " / " + channel;
      const existing = await findIssue(title);
      if (existing) { console.log("Reserved or published already: " + title + " — issue #" + existing.number); continue; }
      if (!startedThisPost) {
        if (processedPostIds >= 4) { console.log("Safety cap of 4 new post IDs reached."); return; }
        processedPostIds++;
        startedThisPost = true;
      }
      platformConfig(channel);
      // This reservation is persisted BEFORE publication. Failed/ambiguous calls never auto-retry.
      const issue = await gh("/issues","POST",{title,body:"Status: RESERVED. Check the social page before attempting any manual retry.\nPost: " + post.id + "\nChannel: " + channel});
      try {
        const remoteId = await platformPublish(channel,post,offer);
        await gh("/issues/" + issue.number,"PATCH",{body:"Status: PUBLISHED\nPost: " + post.id + "\nChannel: " + channel + "\nPlatform ID: " + remoteId + "\nPublished: " + new Date().toISOString()});
        count++;
        console.log("Published: " + title);
      } catch (error) {
        await gh("/issues/" + issue.number,"PATCH",{body:"Status: UNCERTAIN — MANUAL CHECK REQUIRED\nPost: " + post.id + "\nChannel: " + channel + "\nCause: " + error.message});
        throw error;
      }
    }
  }
  console.log("Published across " + count + " platform destination(s).");
}
export async function run(action) {
  const issues = validate();
  if (issues.length) throw Error("Content queue validation failed:\n" + issues.join("\n"));
  if (action === "validate") console.log("Content queue validated (" + queue.posts.length + " posts).");
  else if (action === "plan") {writeReport("weekly-brief.md",editorialBrief());console.log("Editorial brief generated.");}
  else if (action === "site") await siteAudit();
  else if (action === "preview") console.log(JSON.stringify({due:duePosts().map((p) => ({id:p.id,channels:p.channels,publishAt:p.publishAt}))},null,2));
  else if (action === "publish") await publish();
  else throw Error("Unknown command: " + action);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  run(process.argv[2] || "validate").catch((error) => {console.error(error.message);process.exitCode = 1;});
}
