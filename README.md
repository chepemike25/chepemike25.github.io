# Mike Carranza — Personal Website

Personal portfolio and CV of **Mike (Jose) Carranza** — Electrical and Computer
Engineering graduate student at Purdue University.

Zero-dependency static site: hand-written HTML, CSS, and vanilla JavaScript.
No build step, no framework, no third-party CMS or theme — just files you can
open in a browser.

## Pages

- `index.html` — landing (bio, interests, education)
- `experience.html` — professional and academic experience, skills, awards, languages
- `projects.html` — selected projects

## Assets

- `assets/css/style.css` — all styles (light + dark theme via CSS custom properties)
- `assets/js/main.js` — theme toggle, mobile menu, active-link highlighting
- `assets/img/` — avatar and project thumbnails
- `assets/files/resume.pdf` — downloadable CV

## Local preview

Any static file server works. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

The repository is designed to be served by any static host — GitHub Pages,
Netlify, Vercel, Cloudflare Pages, or plain object storage.

For **GitHub Pages** on a `<user>.github.io` repo, no workflow is required:
in *Settings → Pages*, choose *Deploy from a branch* → `main` → `/ (root)`.
The `.nojekyll` file ensures GitHub Pages serves files as-is without a Jekyll
build step.

## License

Site content © Mike Carranza. Code released under the [MIT License](LICENSE).
