# Horde Defense (Three.js)

A browser recreation of the [Horde Defense](https://sneaker.games/games/horde-defense/) Godot combat demo — same siege-gate / cube-horde feel, built in **Three.js** instead of Godot.

## Play

```bash
npm install
npm run dev
```

Then open the printed local URL. For a static preview:

```bash
npm run build
npm run preview
```

## Feel targets (from the live Godot web build)

- Circular green arena, pale sky, dark berm walls
- Bright red cube **gate** to defend · purple **portal** that spills the horde
- Light-blue sphere player with sword + shield, over-shoulder camera
- Dark-red **cube** enemies in ring ranks, InstancedMesh (MultiMesh analogue)
- Wave countdown → fight · Gate 500 HP · You 100 HP · Arena Run HUD
- Melee kit: light / heavy / block / spin / slam / dodge / jump
- Desktop pointer lock + touch stick / action buttons

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Move / look | WASD + mouse | Left stick + right-side drag |
| Light / heavy | LMB / RMB | Light / Heavy |
| Block | R | Block |
| Spin / slam | Q / F | Spin / Slam |
| Dodge / jump | Shift / Space | Dodge |

## Notes

This is intentionally a feel prototype, not a line-by-line port of the Godot project (source for that lives outside this empty scaffold). Numbers and layout are tuned against the public sneaker.games WASM build.
