# Ecomtik marketing automation — GitHub pilot

Purpose: attract qualified clients for (1) managing existing Amazon brands and (2) launching new Amazon brands on appropriate Amazon marketplaces worldwide.

## What is automated now

- A daily GitHub Actions run (05:17 UTC / 09:17 Dubai) validates approved content and prepares a weekly editorial brief as a downloadable Actions artifact.
- A basic public-site check tests the homepage, Amazon account management page, contact page, robots.txt and sitemap.xml, with a downloadable health report.
- A publication engine supports Facebook Pages, Instagram Professional accounts and LinkedIn Organization pages using their authorized official APIs.
- A persistent GitHub issue is created before every external publishing call. It records RESERVED/PUBLISHED/UNCERTAIN for each post ID and platform. Ambiguous outcomes are never retried automatically.

This runs independently of the Ecomtik website; it does not change website source, send unsolicited DMs, scrape leads, or spend advertising budgets. It is not a complete Google Analytics, Ads or CRM integration.

## Critical: publishing is OFF

This is a PR-only pilot. No schedule runs until the workflow is merged into the default main branch. Even after merging, it cannot publish until:
1. The social pages are authorized and tokens are saved securely in GitHub.
2. A specific post in marketing/queue.json has been reviewed and set to approved, with a valid future UTC publishAt.
3. GitHub Actions variable ECOMTIK_PUBLISH_ENABLED is explicitly set to true.

Example posts remain drafts and are NOT scheduled. A reviewed PR is the approval mechanism. If you set ECOMTIK_PUBLISH_ENABLED=false, publishing stops without changing other workflows.

## Connect owned social pages via official authorization

In the Ecomtik GitHub repository open Settings > Secrets and variables > Actions.

GitHub Actions variables (not secrets):
- ECOMTIK_PUBLISH_ENABLED: false until launch.
- META_GRAPH_VERSION: a supported version, for example v24.0, after confirming in Meta documentation.
- META_PAGE_ID: Facebook Page ID administered by Ecomtik.
- META_INSTAGRAM_ID: Instagram Professional account ID with required linkage and permissions.
- LINKEDIN_ORG_URN: organization URN, e.g. urn:li:organization:12345.
- LINKEDIN_API_VERSION: supported YYYYMM version from LinkedIn documentation.

GitHub repository secrets:
- META_PAGE_TOKEN: authorized Facebook Page token with publishing permissions.
- META_INSTAGRAM_TOKEN: authorized Instagram Professional publishing token.
- LINKEDIN_ACCESS_TOKEN: valid authorization for the organization Posts API.

Use delegated platform access; NEVER give account passwords or put tokens in a commit or chat. Instagram post images must be hosted at a publicly accessible HTTPS URL. LinkedIn and Meta may require app review, administrator privileges, token renewal and further API approvals. Publishing compatibility cannot be confirmed until the exact pages and app permissions are connected and tested.

## Create and approve a post

Edit marketing/queue.json on a feature branch:
- id: stable unique lowercase slug, never reuse for new content.
- offerId: management or launch.
- status: draft, approved or paused.
- publishAt: UTC ISO timestamp such as 2027-01-12T10:00:00Z (required when approved).
- channels: any subset of facebook, instagram, linkedin.
- text: approved copy, 30–2000 characters.
- imageUrl: publicly available HTTPS image; required for approved Instagram posts.

Submit the change as a PR and review the post's facts, creative rights, audience, link and claims before merging. The next daily run publishes due posts if enabled, with a safety cap of 4 post IDs per run.

Never delete publishing ledger issues to force a retry. If an issue is RESERVED or UNCERTAIN, inspect the destination page before a manual intervention. There is a small possibility a platform publishes but GitHub does not receive confirmation; the reservation prevents duplicate automatic posting.

## Test commands (Node 22; no dependencies)

    node marketing/engine.mjs validate
    node marketing/test.mjs
    node marketing/engine.mjs preview
    node marketing/engine.mjs plan
    node marketing/engine.mjs site

After merge, GitHub Actions > Ecomtik Marketing Automation > Run workflow: select audit or plan. Do not select publish until the pages are connected and the first approved test post is ready.

## Future milestones

- Official OAuth token refresh service outside GitHub.
- Content generation as reviewable drafts based on Ecomtik's actual services and verified facts.
- Search Console and GA4 performance reporting after authorization.
- Privacy-safe CRM lead capture, attribution, lead qualification and appointment booking.
- Separately approved Google and Meta Ads campaign management with explicit spend limits.
- Additional pages and platforms when official publishing permissions are available.

Brand rule: no fabricated case studies, guaranteed profits, misleading performance metrics, spam posting, or unverified Amazon partnership claims. This is an integration-ready pilot; social accounts have not yet been connected.
