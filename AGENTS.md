# AGENTS.md

## Cursor Cloud specific instructions

This repository (`godot-horde-demo`) is a **Godot Engine 4 game project**. At the time of
environment setup it was an empty scaffold (only `.gitignore` / `.gitattributes`), so the
notes below describe how to work with the Godot toolchain rather than any specific game code.

### Engine

- The **Godot 4.7.2-stable** editor binary is installed by the update script at
  `/usr/local/bin/godot` (on `PATH`). Verify with `godot --version`
  (expect `4.7.2.stable.official...`).
- This is the **standard (GDScript) build**, not the Mono/.NET build. The stock `.gitignore`
  contains Mono ignore patterns, but no C# code exists. If the project later adopts C#
  (`*.csproj`/`*.sln`), you must additionally install the .NET SDK and the
  `Godot_v4.7.2-stable_mono_linux_x86_64` build — the standard binary cannot run C# projects.

### Running a project

- First run of a project must import assets: `godot --headless --import --path <project_dir>`.
- Headless (CI / no display): `godot --headless --path <project_dir>`. A script must call
  `get_tree().quit()` or the process runs forever.
- Windowed rendering: there is **no GPU**. Use the OpenGL renderer with software rendering
  (Mesa llvmpipe) — Vulkan is unavailable. Two options:
  - Off-screen virtual display: `xvfb-run -a godot --path <dir> --rendering-driver opengl3`
  - The live desktop at `DISPLAY=:1`: `DISPLAY=:1 godot --path <dir> --rendering-driver opengl3`
- **ALSA audio errors** on startup (`cannot find card '0'`, "All audio drivers failed, falling
  back to the dummy driver") are expected in this VM (no sound card) and are harmless.

### Lint / test / build

- No lint, test, or build tooling is configured yet (empty repo). When code is added:
  - GDScript syntax check: `godot --headless --check-only --script <file.gd>`.
  - Automated tests typically use a framework like GUT, run headless via
    `godot --headless -s addons/gut/gut_cmdln.gd ...` once added.
  - Exports require export templates (`godot --export-release ...`); the templates are not
    installed by default — install them only when an export/build is actually needed.
