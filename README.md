# PYE COIN — Website (Single-file)

Your GitHub Pages site uses **one file**: `index.html`. This build shows:
- Live stats from **Dexscreener** for mint `8rX1WJZ2dX5Bn8YTSh3VJ6yRSWKXjzob638FdakhWP8S`
- **Moonshot** buy button
- **Mini-games focused Roadmap**
- **Asian stray-dog** donation links
- Mobile + desktop responsive

## Deploy (web upload)
1) Create a repo named **PyeCoin** (Public).
2) Upload `index.html` and `.nojekyll` (below).
3) Repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch `main`, Folder `/ (root)`.
4) Open: `https://YOURNAME.github.io/PyeCoin/`

## Deploy (command line)
```bash
mkdir PyeCoin && cd PyeCoin
# copy index.html here
git init
git add index.html .nojekyll
git commit -m "PYE site"
git branch -M main
git remote add origin https://github.com/YOURNAME/PyeCoin.git
git push -u origin main
```
