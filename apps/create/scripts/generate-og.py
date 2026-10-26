"""
Render 1200x630 Open Graph image for create.atreyakamat.dev into public/og/.

Usage (from apps/create):  python3 scripts/generate-og.py
Needs: pip install playwright && playwright install chromium
Re-run after changing a headline; the PNGs are committed.
"""
import asyncio
import base64
import html
import pathlib

from playwright.async_api import async_playwright

APP = pathlib.Path(__file__).resolve().parent.parent
FONTS = APP.parent.parent / "node_modules"
OUT = APP / "public" / "og"

CARDS = [
    # (file, kicker, title, accent, portrait)
    ("home", "@atreya.mp4 · tech creator · brand collabs", "Tech, made simple,", "in under a minute.", True),
]

MONOGRAM = """<svg viewBox="0 0 64 64" width="56" height="56" fill="none"><g stroke="#f6f6f1" stroke-linecap="round" stroke-linejoin="round">
<line x1="16" y1="48" x2="34" y2="16" stroke-width="5"/><line x1="34" y1="16" x2="34" y2="48" stroke-width="5"/>
<line x1="23" y1="34" x2="34" y2="34" stroke-width="4.5"/><line x1="34" y1="32" x2="48" y2="16" stroke-width="5"/>
<line x1="34" y1="32" x2="48" y2="48" stroke-width="5"/></g><circle cx="51" cy="13" r="3" fill="#dfff00"/></svg>"""


def data_uri(path: pathlib.Path, mime: str) -> str:
    # Inline assets: pages set via set_content cannot load file:// URLs.
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


BRICOLAGE = data_uri(FONTS / "@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2", "font/woff2")
SERIF = data_uri(FONTS / "@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", "font/woff2")
MONO = data_uri(FONTS / "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", "font/woff2")
PORTRAIT = data_uri(APP / "public" / "stickers" / "lofi-14.webp", "image/webp")
PORTRAIT2 = data_uri(APP / "public" / "stickers" / "lofi-06.webp", "image/webp")


def page(kicker: str, title: str, accent: str, portrait: bool) -> str:
    pic = PORTRAIT
    title_size = 74 if portrait else 82
    portrait_html = (
        f"""<div class="pic"><img src="{pic}"/></div><div class="pic2"><img src="{PORTRAIT2}"/></div>""" if portrait else ""
    )
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: Bricolage; src: url({BRICOLAGE}); font-weight: 200 800; }}
@font-face {{ font-family: InstrSerif; font-style: italic; src: url({SERIF}); }}
@font-face {{ font-family: Mono; src: url({MONO}); font-weight: 100 800; }}
* {{ margin:0; box-sizing:border-box; }}
body {{ width:1200px; height:630px; background:#0a0a0a; color:#f6f6f1; font-family:Bricolage; overflow:hidden; position:relative; }}
.grid {{ position:absolute; inset:0; background-image:linear-gradient(to right,rgba(223,255,0,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(223,255,0,.07) 1px,transparent 1px); background-size:48px 48px; }}
.glow {{ position:absolute; inset:0; background:radial-gradient(620px circle at 18% 22%, rgba(223,255,0,.14), transparent 62%); }}
.frame {{ position:absolute; inset:28px; border:1px solid rgba(255,255,255,.12); border-radius:28px; }}
.tick {{ position:absolute; width:14px; height:14px; border-color:rgba(223,255,0,.8); border-style:solid; border-width:0; }}
.wrap {{ position:absolute; inset:28px; padding:52px 60px; display:flex; flex-direction:column; justify-content:space-between; }}
.mono {{ font-family:Mono; font-size:17px; letter-spacing:.2em; text-transform:uppercase; color:#bdbdb4; }}
.top {{ display:flex; justify-content:space-between; }}
.top .l {{ color:#dfff00; }}
h1 {{ font-weight:800; font-size:{title_size}px; line-height:.95; letter-spacing:-.035em; max-width:{'640px' if portrait else '1000px'}; }}
h1 em {{ font-family:InstrSerif; font-weight:400; font-style:italic; color:#dfff00; letter-spacing:-.01em; }}
.bottom {{ display:flex; align-items:center; justify-content:space-between; }}
.who {{ display:flex; align-items:center; gap:18px; font-size:26px; font-weight:700; }}
.who span {{ display:block; font-family:Mono; font-weight:400; font-size:15px; letter-spacing:.2em; color:#bdbdb4; text-transform:uppercase; margin-top:4px; }}
.pill {{ background:#dfff00; color:#0a0a0a; border-radius:999px; padding:14px 26px; font-family:Mono; font-weight:700; font-size:16px; letter-spacing:.18em; text-transform:uppercase; }}
.pic {{ position:absolute; right:70px; top:70px; width:300px; transform:rotate(8deg); filter:drop-shadow(0 18px 24px rgba(0,0,0,.6)); }}
.pic2 {{ position:absolute; right:300px; top:300px; width:170px; transform:rotate(-10deg); filter:drop-shadow(0 18px 24px rgba(0,0,0,.6)); }}
.pic img, .pic2 img {{ width:100%; height:auto; }}
</style></head><body>
<svg width="0" height="0" style="position:absolute"><filter id="duo" color-interpolation-filters="sRGB">
<feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"/>
<feComponentTransfer><feFuncR type="table" tableValues="0.027 0.957"/><feFuncG type="table" tableValues="0.043 1"/><feFuncB type="table" tableValues="0.122 0.361"/></feComponentTransfer></filter></svg>
<div class="grid"></div><div class="glow"></div><div class="frame"></div>
<i class="tick" style="left:40px;top:40px;border-left-width:2px;border-top-width:2px"></i>
<i class="tick" style="right:40px;top:40px;border-right-width:2px;border-top-width:2px"></i>
<i class="tick" style="left:40px;bottom:40px;border-left-width:2px;border-bottom-width:2px"></i>
<i class="tick" style="right:40px;bottom:40px;border-right-width:2px;border-bottom-width:2px"></i>
{portrait_html}
<div class="wrap">
  <div class="top mono"><span class="l">§ {html.escape(kicker)}</span>{'' if portrait else '<span>atreyakamat.dev</span>'}</div>
  <h1>{html.escape(title)} <em>{html.escape(accent)}</em></h1>
  <div class="bottom">
    <div class="who">{MONOGRAM}<div>Atreya Kamat<span>Creative work · Goa</span></div></div>
    <div class="pill">Commission →</div>
  </div>
</div></body></html>"""


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        pg = await browser.new_page(viewport={"width": 1200, "height": 630})
        for name, kicker, title, accent, portrait in CARDS:
            await pg.set_content(page(kicker, title, accent, portrait), wait_until="networkidle")
            await pg.evaluate("document.fonts.ready")
            await pg.wait_for_timeout(250)
            await pg.screenshot(path=str(OUT / f"{name}.png"))
            print("wrote", OUT / f"{name}.png")
        await browser.close()


asyncio.run(main())
