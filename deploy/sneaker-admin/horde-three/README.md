# Horde Defense · Three.js (admin)

Private playable build of the Three.js horde demo.

- URL: `https://sneaker.games/admin/horde-three/`
- Access: Cloudflare Access on `/admin/*`
- Source: this repo (`npm run dev` to iterate)

Rebuild:

```bash
npx vite build --base=/admin/horde-three/ --outDir=deploy/sneaker-admin/horde-three --emptyOutDir
```
