# ASI-402 — URC 2027 Drone Website

A static, responsive engineering project showcase based on the first interim report draft. **No framework, build step, npm, or paid hosting required.**

## Publish with GitHub Pages

1. Create a new **public** GitHub repository (e.g. `urc-drone-2027`).
2. Upload **all files and the `assets` folder** from this template to the repository root (not the outer ZIP folder).
3. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. Wait for deployment. The site URL will normally be `https://YOUR-USERNAME.github.io/urc-drone-2027/`.

## Edit the website

- `index.html`: all page headings, descriptions, project information, status labels, team members, and navigation.
- `styles.css`: colors, typography, spacing, layout, responsive design. Main palette variables are at the top.
- `script.js`: editable communications link parameters (`links`) and six roadmap phases (`phases`), plus interactive calculator logic.
- `assets/interim-report.pdf`: replace this with your latest report PDF, retaining the filename (or change the links in `index.html`).

### Add photographs / CAD renders

Upload images to `assets/`, e.g. `assets/drone-cad.png`. Add to `index.html` where needed:

```html
<img src="assets/drone-cad.png" alt="CAD render of the drone" style="max-width:100%;height:auto">
```

The landing-page drone drawing is a **stylized CSS illustration**, not a CAD rendering. Replace it with your own image if desired.

## Technical caveats

- This is an **interim design showcase**, not a verification report.
- The link-budget widget uses a free-space path-loss model and preliminary equipment inputs from the draft. It is illustrative and does not establish reliable range or compliance.
- The battery slider shows battery + equal dummy payload and mass remaining under 5 kg; it does **not** predict endurance.
- The source draft contains some inconsistent labels/figures and provisional assumptions. Validate all figures against current component specifications and competition rules before public release.
- The included PDF may contain student identifiers and draft comments. **Review or remove it before publishing publicly.** If removed, also delete the PDF buttons from `index.html`.

## Preview locally

Open `index.html` in a browser. For a local server, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.
