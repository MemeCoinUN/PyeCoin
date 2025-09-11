# PYE COIN — Website (Single-file)

This repo contains a **single-file** website for PYE COIN. Just push `index.html` and enable GitHub Pages.

## Live URL (after deploy)
https://YOURNAME.github.io/PyeCoin/

## What’s inside
- **index.html** (logo inline, mobile-friendly)
- Direct **Moonshot trade** button
- **Contract Address** card + one‑click **Copy**
- **Stray dog foundations** links (Asia)
- **Live stats & trades** via Birdeye
- Footer link: **Change Birdeye API Key** (saved to your browser)

## Deploy (web upload)
1) Create a repo named **PyeCoin** (Public).
2) Upload `index.html`.
3) Repo → **Settings → Pages** → *Deploy from a branch*, Branch `main`, Folder `/ (root)`.
4) Open: `https://YOURNAME.github.io/PyeCoin/`

## Deploy (command line)
```bash
mkdir PyeCoin && cd PyeCoin
# copy the downloaded index.html into this folder
git init
git add index.html
git commit -m "PYE site"
git branch -M main
git remote add origin https://github.com/YOURNAME/PyeCoin.git
git push -u origin main
```
Then enable Pages as above.

## Live data
- Token mint is pre-filled as your CA.
- To set your **Birdeye API key**: open the site → footer → **Change Birdeye API Key** and paste your key.

## Local preview
```bash
# mac/linux
python3 -m http.server 8080

# windows
python -m http.server 8080
```
Open http://localhost:8080
