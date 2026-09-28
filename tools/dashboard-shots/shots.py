"""Dashboard screenshots for keelokit.com (operational page + report), from the Fleetly sample project.

    python3 tools/dashboard-shots/shots.py public/img/dashboard      (then copy the SIZES line into src/lib/shots.ts)

KEELOKIT_REPO points at a keelokit checkout (default ../keelokit next to this repo); its version is
the one the pages show. Needs Pillow and playwright with Chromium (PLAYWRIGHT_CHROMIUM for its path)."""
import io, os, subprocess, sys, tempfile
from pathlib import Path
from PIL import Image
from playwright.sync_api import sync_playwright

S = Path(__file__).parent
OUT = Path(sys.argv[1])
REPO = Path(os.environ.get("KEELOKIT_REPO", S.parents[2] / "keelokit"))
DASH = str(REPO / "skills/project-dashboard/scripts/dashboard.py")
FX = Path(tempfile.mkdtemp())
for lang in ("en", "es"):
    subprocess.run(["python3", str(S / "fixture.py"), str(FX / f"{lang}-build"), lang, "build"], check=True)
CSS = (S / "fonts/fonts.css").read_text()
FONTS = dict(line.split() for line in (S / "fonts/map.txt").read_text().splitlines())
sizes = {}

def render(lang, *flags):
    root = FX / f"{lang}-build"
    subprocess.run(["git", "remote", "remove", "origin"], cwd=root, capture_output=True)
    subprocess.run(["git", "remote", "add", "origin", f"git@github.com:acme/fleetly.git"], cwd=root)
    out = FX / f"{lang}-{'report' if flags else 'ops'}.html"
    subprocess.run(["python3", DASH, "--root", str(root), "--standalone", "--out", str(out), *flags], check=True, capture_output=True)
    return out

def save(png, name, lang, width=None):
    im = Image.open(io.BytesIO(png)).convert("RGB")
    if width and im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    path = OUT / lang / f"{name}.webp"
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "WEBP", quality=86, method=6)
    sizes.setdefault(lang, {})[name] = (im.width, im.height)
    print(path, im.size, path.stat().st_size // 1024, "KB")

def page(browser, file, width, height=900, dark=False):
    ctx = browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=2, color_scheme="dark" if dark else "light")
    pg = ctx.new_page()
    pg.route("https://fonts.googleapis.com/**", lambda r: r.fulfill(status=200, content_type="text/css", body=CSS))
    pg.route("https://fonts.gstatic.com/**", lambda r: r.fulfill(status=200, content_type="font/woff2", body=(S / "fonts" / FONTS[r.request.url]).read_bytes() if r.request.url in FONTS else b""))
    pg.goto("file://" + str(file))
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(400)
    return pg

with sync_playwright() as p:
    b = p.chromium.launch(executable_path=os.environ.get("PLAYWRIGHT_CHROMIUM") or None)
    for lang in ("en", "es"):
        ops, rep = render(lang), render(lang, "--report")
        wide = page(b, ops, 1100)
        save(wide.screenshot(full_page=True), "full", lang, 1800)
        pg = page(b, ops, 760)
        save(pg.locator(".voyage").screenshot(), "voyage", lang, 1400)
        save(pg.locator("section[aria-labelledby=wait-h]").screenshot(), "waiting", lang, 1400)
        save(pg.locator("section[aria-labelledby=waves-h]").screenshot(), "waves", lang, 1400)
        save(pg.locator("section[aria-labelledby=health-h]").screenshot(), "health", lang, 1400)
        pg.locator(".wait button[data-ask]").first.click()
        pg.evaluate("""() => { const s = document.getElementById('ask-send'); s.hidden = false; s.disabled = false;
                               document.getElementById('ask-status').textContent = ''; document.getElementById('toast').classList.remove('on') }""")
        pg.wait_for_timeout(600)
        save(pg.locator("#ask").screenshot(), "ask", lang, 1400)
        rp = page(b, rep, 1440)
        save(rp.screenshot(), "report", lang, 1800)
        dk = page(b, ops, 1440, 900, dark=True)
        save(dk.screenshot(), "dark", lang, 1800)
    b.close()
print("SIZES", {l: {k: {"w": w, "h": h} for k, (w, h) in v.items()} for l, v in sizes.items()})
