# Horde Defense · Three.js (admin)

Private playable build of the Three.js horde demo.

- URL: `https://sneaker.games/admin/horde-three/`
- Access: Cloudflare Access on `/admin/*` (same wall as Feedback / Identify)
- Source: `sec-knight/godot-horde-demo` (Three.js recreation branch)

Rebuild from that repo with:

```bash
npx vite build --base=/admin/horde-three/ --outDir=../sneaker.games/admin/horde-three --emptyOutDir
```

Do not link this from the public site.
