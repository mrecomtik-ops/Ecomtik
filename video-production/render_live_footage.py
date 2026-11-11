#!/usr/bin/env python3
"""Render Ecomtik Amazon Brand Management reel using real filmed, licensed Pexels stock footage.

Outputs an MP4 artifact; no Buffer/social publishing takes place.
"""
from __future__ import annotations

import math
import subprocess
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = HERE / "output"
OUT.mkdir(exist_ok=True, parents=True)

LOGO_FILE = ROOT / "public/images/ecomtik.png"
FINAL = OUT / "Ecomtik_Amazon_Management_Live_Footage.mp4"
W,H,FPS = 720,1280,25
NAVY=(11,26,51)
AMBER=(245,166,35)
WHITE=(255,255,255)
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

# Explicit Pexels commercial-use source links; confirm each actual downloaded
# file is real video. Never present the stock actors as Ecomtik team members.
STOCK = [
    ("professional", "https://videos.pexels.com/video-files/5716888/5716888-uhd_1440_2560_25fps.mp4",
     "ALREADY SELLING ON AMAZON?", "Your brand needs focused management."),
    ("collaboration", "https://videos.pexels.com/video-files/8141304/8141304-uhd_1440_2560_25fps.mp4",
     "PPC  •  LISTINGS  •  INVENTORY", "One coordinated plan across your marketplace operations."),
    ("strategy", "https://videos.pexels.com/video-files/8141342/8141342-uhd_1440_2560_25fps.mp4",
     "AN AMAZON GROWTH PARTNER", "Clear priorities, reviews and ongoing optimization."),
    ("fulfilment", "https://videos.pexels.com/video-files/6169087/6169087-uhd_1440_2560_25fps.mp4",
     "YOUR BRAND. OUR FOCUS.", "From advertising and content to stock coordination."),
]
SOURCE_PAGES = [
 "https://www.pexels.com/video/a-woman-working-in-an-office-5716888/",
 "https://www.pexels.com/video/business-people-having-a-meeting-while-using-laptop-8141304/",
 "https://www.pexels.com/video/woman-using-laptop-at-work-8141342/",
 "https://www.pexels.com/video/man-writing-on-packages-6169414/",
]
(OUT / "footage-sources.txt").write_text(
    "Pexels stock footage (illustrative actors, not Ecomtik personnel)\\n"+
    "\\n".join(SOURCE_PAGES)+"\\nLicense: https://www.pexels.com/license/\\n",
    encoding="utf-8"
)


def command(args: list[str]) -> None:
    print("RUN", " ".join(args[:8]), flush=True)
    subprocess.run(args, check=True)


def fit_font(draw: ImageDraw.ImageDraw,text: str,start: int,maxwidth:int) -> ImageFont.FreeTypeFont:
    for pts in range(start,19,-1):
        f=ImageFont.truetype(FONT_BOLD,pts)
        if draw.textbbox((0,0),text,font=f)[2] <= maxwidth:
            return f
    return ImageFont.truetype(FONT_BOLD,20)


def wrap(draw,txt,font,maxwidth):
    lines=[];line=""
    for word in txt.split():
        trial=(line+" "+word).strip()
        if draw.textbbox((0,0),trial,font=font)[2] <= maxwidth:
            line=trial
        else:
            if line:lines.append(line)
            line=word
    if line:lines.append(line)
    return lines


def render_logo(width=195):
    logo=Image.open(LOGO_FILE).convert("RGBA")
    bounds=logo.getbbox()
    if bounds:logo=logo.crop(bounds)
    logo.thumbnail((width,118),Image.Resampling.LANCZOS)
    return logo


def logo_badge(draw_img):
    badge=Image.new("RGBA",(245,138),(255,255,255,232))
    b=ImageDraw.Draw(badge)
    b.rounded_rectangle((0,0,244,137),radius=22,fill=(255,255,255,238))
    logo=render_logo()
    badge.alpha_composite(logo,((245-logo.width)//2,(138-logo.height)//2))
    draw_img.alpha_composite(badge,(42,42))


def scene_overlay(name,headline,subline):
    img=Image.new("RGBA",(W,H),(0,0,0,0))
    logo_badge(img)
    pane=Image.new("RGBA",(650,286),(7,18,33,205))
    p=ImageDraw.Draw(pane)
    p.rounded_rectangle((0,0,649,285),radius=22,fill=(7,18,33,215))
    img.alpha_composite(pane,(35,820))
    d=ImageDraw.Draw(img)
    d.rounded_rectangle((62,849,205,859),radius=5,fill=AMBER)
    font=fit_font(d,headline,43,590)
    y=886
    for line in wrap(d,headline,font,590):
        d.text((62,y),line,font=font,fill=WHITE)
        y += 54
    y += 8
    f=ImageFont.truetype(FONT,28)
    for line in wrap(d,subline,f,590):
        d.text((62,y),line,font=f,fill=(228,238,248))
        y += 39
    d.text((55,1175),"ECOMTIK.COM",font=ImageFont.truetype(FONT_BOLD,23),fill=(248,249,250,240))
    img.save(OUT/f"overlay_{name}.png")


def endcard():
    im=Image.new("RGBA",(W,H),NAVY+(255,))
    d=ImageDraw.Draw(im)
    for x in range(-100,W+200,140):
        d.line((x,0,x-160,H),fill=(255,255,255,21),width=2)
    d.arc((480,-100,990,420),20,310,fill=AMBER,width=4)
    logo_badge(im)
    logo=render_logo(385)
    # White backing because original Ecomtik wordmark is charcoal.
    d.rounded_rectangle((122,240,598,489),radius=30,fill=(255,255,255,248))
    logo.thumbnail((425,200),Image.Resampling.LANCZOS)
    im.alpha_composite(logo,((W-logo.width)//2,267))
    d=ImageDraw.Draw(im)
    hf=ImageFont.truetype(FONT_BOLD,50)
    for txt,y,color in [("MANAGE YOUR",550,WHITE),("AMAZON BRAND",620,AMBER)]:
        bbox=d.textbbox((0,0),txt,font=hf)
        d.text(((W-(bbox[2]-bbox[0]))//2,y),txt,font=hf,fill=color)
    d.rounded_rectangle((48,733,672,823),radius=25,fill=AMBER)
    call="BOOK A BRAND REVIEW"
    cfont=ImageFont.truetype(FONT_BOLD,33)
    bb=d.textbbox((0,0),call,font=cfont)
    d.text(((W-(bb[2]-bb[0]))//2,760),call,font=cfont,fill=NAVY)
    contacts=[
      "WHATSAPP   +971 56 167 7408",
      "EMAIL   mr.ecomtik@gmail.com",
      "WEB   ecomtik.com"
    ]
    cf=ImageFont.truetype(FONT,25)
    for i,t in enumerate(contacts):
        y=866+i*83
        d.rounded_rectangle((48,y,672,y+69),radius=18,fill=(247,248,250))
        d.text((72,y+19),t,font=cf,fill=NAVY)
    d.text((48,1170),"Amazon Brand Management",font=ImageFont.truetype(FONT,27),fill=(230,238,248))
    im.convert("RGB").save(OUT/"endcard.png")


def download_one(name,url):
    path=OUT/f"{name}.mp4"
    if path.exists() and path.stat().st_size>1_000_000:
        return path
    req=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0 (Ecomtik Commercial Video Editor)"})
    with urllib.request.urlopen(req,timeout=160) as resp, open(path,"wb") as f:
        if "video" not in resp.headers.get("Content-Type","") and "octet" not in resp.headers.get("Content-Type",""):
            raise RuntimeError(f"{name}: not a video response: {resp.headers.get('Content-Type')}")
        while True:
            chunk=resp.read(1024*1024)
            if not chunk:break
            f.write(chunk)
    if path.stat().st_size < 100_000:raise RuntimeError(f"{name}: downloaded video unexpectedly small")
    command(["ffprobe","-v","error","-select_streams","v:0","-show_entries","stream=codec_name",
             "-of","default=noprint_wrappers=1",str(path)])
    return path


def create_segments():
    segments=[]
    for name,url,heading,sub in STOCK:
        source=download_one(name,url)
        render_overlay=OUT/f"overlay_{name}.png"
        scene_overlay(name,heading,sub)
        segment=OUT/f"part_{name}.mp4"
        # Actual footage moves; static overlay & logo appear on every scene.
        filter_string=(
          f"[0:v]scale={W}:{H}:force_original_aspect_ratio=increase,"
          f"crop={W}:{H},fps={FPS},setsar=1[footage];"
          f"[1:v]format=rgba,fade=t=in:st=0.05:d=0.4:alpha=1[text];"
          "[footage][text]overlay=0:0:shortest=1,format=yuv420p[v]"
        )
        command(["ffmpeg","-hide_banner","-loglevel","error","-y","-ss","0.5",
                 "-i",str(source),"-loop","1","-framerate",str(FPS),"-i",str(render_overlay),
                 "-filter_complex",filter_string,"-map","[v]","-t","4.0","-an",
                 "-c:v","libx264","-preset","veryfast","-crf","23",
                 "-pix_fmt","yuv420p",str(segment)])
        segments.append(segment)
    return segments


def finish(segments):
    endcard()
    closing=OUT/"part_closing.mp4"
    command(["ffmpeg","-hide_banner","-loglevel","error","-y",
             "-loop","1","-framerate",str(FPS),"-i",str(OUT/"endcard.png"),
             "-t","5.0","-c:v","libx264","-preset","veryfast","-crf","22",
             "-pix_fmt","yuv420p",str(closing)])
    segment_list=OUT/"segments.txt"
    segment_list.write_text("".join("file '"+str(p.resolve())+"'\\n" for p in segments+[closing]))
    command(["ffmpeg","-hide_banner","-loglevel","error","-y","-f","concat","-safe","0",
             "-i",str(segment_list),"-c","copy",str(FINAL)])
    command(["ffprobe","-v","error","-show_entries","format=duration,size",
             "-of","default=noprint_wrappers=1",str(FINAL)])
    if FINAL.stat().st_size<200_000:
        raise RuntimeError("MP4 too small, render failed")
    print(f"SUCCESS: {FINAL}")


if __name__=="__main__":
    finish(create_segments())
