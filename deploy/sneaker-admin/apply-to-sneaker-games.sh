#!/usr/bin/env bash
# Copy the private Three.js horde build into a sneaker.games checkout.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
TARGET="${1:-}"
if [[ -z "$TARGET" || ! -d "$TARGET/admin" ]]; then
  echo "Usage: $0 /path/to/sneaker.games" >&2
  exit 1
fi
mkdir -p "$TARGET/admin/horde-three"
rsync -a --delete "$ROOT/horde-three/" "$TARGET/admin/horde-three/"
cp "$ROOT/admin-index.html" "$TARGET/admin/index.html"
cp "$ROOT/feedback-index.html" "$TARGET/admin/feedback/index.html"
cp "$ROOT/identify-index.html" "$TARGET/admin/identify/index.html"
# Append Access note once
if ! grep -q 'Private Three.js horde prototype' "$TARGET/CLOUDFLARE-FEEDBACK-SETUP.md" 2>/dev/null; then
  cat >> "$TARGET/CLOUDFLARE-FEEDBACK-SETUP.md" << 'DOC'

## 7. Private Three.js horde prototype

The Cloudflare Access app that already covers `sneaker.games/admin/*` also protects:

- `https://sneaker.games/admin/` — workshop hub
- `https://sneaker.games/admin/horde-three/` — Three.js Horde Defense feel demo

No new Access policy is required. Log in with the allowed admin email, then open the hub or the direct play URL.
DOC
fi
echo "Applied. Commit & push sneaker.games, then open https://sneaker.games/admin/horde-three/ after Access login."
