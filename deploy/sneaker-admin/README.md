# Deploy: private Three.js horde on sneaker.games admin

Cloudflare Access already protects `sneaker.games/admin/*`. Once these files land on `main` of `sec-knight/sneaker.games`, log in and open:

- https://sneaker.games/admin/
- https://sneaker.games/admin/horde-three/

## Apply into a sneaker.games checkout

```bash
./deploy/sneaker-admin/apply-to-sneaker-games.sh /path/to/sneaker.games
cd /path/to/sneaker.games
git checkout -b cursor/admin-threejs-horde
git add admin CLOUDFLARE-FEEDBACK-SETUP.md
git commit -m "Add private Three.js Horde Defense under /admin"
git push -u origin HEAD
```

Then merge and let the usual Cloudflare Pages deploy finish.

## Rebuild the game bundle

From the Three.js project root:

```bash
npx vite build --base=/admin/horde-three/ --outDir=deploy/sneaker-admin/horde-three --emptyOutDir
```
