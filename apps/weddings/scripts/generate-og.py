"""
Render the 1200x630 Open Graph image for Saltwater Studios into public/og/home.png.

Usage (from apps/weddings):  python3 scripts/generate-og.py
Needs: pip install playwright && playwright install chromium
Adapted from apps/dev/scripts/generate-og.py (fonts inlined as data URIs).
"""
import asyncio
import base64
import pathlib

from playwright.async_api import async_playwright

APP = pathlib.Path(__file__).resolve().parent.parent
FONTS = APP.parent.parent / "node_modules"
OUT = APP / "public" / "og"


def data_uri(path: pathlib.Path, mime: str) -> str:
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


SERIF = data_uri(FONTS / "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", "font/woff2")
SERIF_I = data_uri(FONTS / "@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", "font/woff2")
SANS = data_uri(FONTS / "@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2", "font/woff2")
MONO = data_uri(FONTS / "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", "font/woff2")

HTML = f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: SWSerif; src: url({SERIF}); font-style: normal; }}
@font-face {{ font-family: SWSerif; src: url({SERIF_I}); font-style: italic; }}
@font-face {{ font-family: SWSans; src: url({SANS}); font-weight: 200 800; }}
@font-face {{ font-family: SWMono; src: url({MONO}); font-weight: 100 800; }}
* {{ margin:0; box-sizing:border-box; }}
body {{ width:1200px; height:630px; overflow:hidden; position:relative; background:#081a26; color:#f4f1ea; font-family:SWSans; }}
.leak {{ position:absolute; border-radius:50%; }}
.l1 {{ right:-160px; top:-220px; width:720px; height:720px; background:radial-gradient(circle, rgba(242,166,90,.45), transparent 65%); }}
.l2 {{ left:-200px; bottom:-260px; width:640px; height:640px; background:radial-gradient(circle, rgba(42,86,112,.8), transparent 65%); }}
.wrap {{ position:absolute; inset:0; padding:64px 72px; display:flex; flex-direction:column; justify-content:space-between; }}
.kick {{ font-family:SWMono; font-size:17px; letter-spacing:.24em; text-transform:uppercase; color:#d9c7a7; }}
h1 {{ font-family:SWSerif; font-weight:400; font-size:118px; line-height:.92; letter-spacing:-.02em; max-width:720px; }}
h1 em {{ color:#f2a65a; }}
.row {{ display:flex; gap:18px; align-items:center; font-size:22px; color:#9bb7c6; }}
.pill {{ background:#f2a65a; color:#081a26; border-radius:999px; padding:12px 22px; font-weight:700; font-size:18px; }}
.vf {{ position:absolute; right:84px; top:70px; width:276px; height:490px; border-radius:30px; overflow:hidden; border:2px solid rgba(244,241,234,.25);
       background:linear-gradient(180deg,#1d3550 0%,#6b4a5e 38%,#e8875a 62%,#f2a65a 70%); }}
.sun {{ position:absolute; left:50%; top:52%; width:110px; height:110px; margin-left:-55px; border-radius:50%; background:#ffd9a0; box-shadow:0 0 80px 30px rgba(255,200,140,.55); }}
.sea {{ position:absolute; left:0; right:0; bottom:0; height:36%; background:linear-gradient(180deg,#2a5670,#143447 40%,#081a26); }}
.rec {{ position:absolute; left:22px; top:22px; font-family:SWMono; font-size:13px; letter-spacing:.18em; }}
.rec b {{ display:inline-block; width:10px; height:10px; border-radius:50%; background:#ff4d4d; margin-right:8px; }}
.corner {{ position:absolute; width:26px; height:26px; border-color:#f4f1ea; border-style:solid; border-width:0; }}
</style></head><body>
<div class="leak l1"></div><div class="leak l2"></div>
<div class="vf"><div class="sun"></div><div class="sea"></div>
  <div class="rec"><b></b>REC</div>
  <i class="corner" style="left:14px;top:14px;border-left-width:2px;border-top-width:2px"></i>
  <i class="corner" style="right:14px;top:14px;border-right-width:2px;border-top-width:2px"></i>
  <i class="corner" style="left:14px;bottom:14px;border-left-width:2px;border-bottom-width:2px"></i>
  <i class="corner" style="right:14px;bottom:14px;border-right-width:2px;border-bottom-width:2px"></i>
</div>
<div class="wrap">
  <div class="kick">Saltwater Studios · Wedding reels · Goa</div>
  <h1>Weddings, cut for <em>the scroll.</em></h1>
  <div class="row"><span class="pill">Couples ₹6,000–8,000</span><span>Reel editing from ₹2,500 / reel</span></div>
</div>
</body></html>"""


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        pg = await browser.new_page(viewport={"width": 1200, "height": 630})
        await pg.set_content(HTML, wait_until="networkidle")
        await pg.evaluate("document.fonts.ready")
        await pg.wait_for_timeout(250)
        await pg.screenshot(path=str(OUT / "home.png"))
        print("wrote", OUT / "home.png")
        await browser.close()


asyncio.run(main())
