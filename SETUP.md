# Academic portfolio — how it works and how to publish it

A single-page academic portfolio built for PhD applications. Plain HTML, CSS and
JavaScript: no framework, no build step, no dependencies to install. Open
`index.html` in a browser and it works.

---

## 1. Publishing to GitHub Pages

**Read this first — it decides your final URL.**

This folder is currently a clone of `github.com/RafinEazdan/RafinEazdan`, which
is your GitHub **profile repository** (the one whose `README.md` shows on your
profile page). That matters, because GitHub picks the site URL from the
repository *name*:

| Repository name | Published at |
| --- | --- |
| `RafinEazdan.github.io` | `https://rafineazdan.github.io/` ← **clean, recommended** |
| `RafinEazdan` (this one) | `https://rafineazdan.github.io/RafinEazdan/` |

For a portfolio you will be putting in emails to professors, the short URL is
worth having.

### Recommended: publish from a `RafinEazdan.github.io` repository

1. On GitHub, create a **new public repository** named exactly
   `RafinEazdan.github.io`.
2. Push the contents of this folder to it:

   ```bash
   cd RafinEazdan
   git remote set-url origin https://github.com/RafinEazdan/RafinEazdan.github.io.git
   git add -A
   git commit -m "Add academic portfolio"
   git push -u origin main
   ```

3. In that repository: **Settings → Pages → Build and deployment → Source**.
   Choose either option — both work:
   - **GitHub Actions** — uses the workflow already included at
     `.github/workflows/pages.yml`.
   - **Deploy from a branch** — pick `main` and `/ (root)`.
4. Wait a minute, then visit `https://rafineazdan.github.io/`.

Your profile repository (`RafinEazdan/RafinEazdan`) is then left alone and keeps
serving your profile README, which is what it is for.

### Alternative: publish from this repository as-is

Push here and enable Pages the same way. The site appears at
`https://rafineazdan.github.io/RafinEazdan/`. Everything works — all paths in
the site are relative — but see "If your URL changes" below.

### If your URL changes

Three places hard-code the address, purely for search engines and link previews.
They do not affect whether the site works:

- `index.html` — `<link rel="canonical">`, the `og:*` / `twitter:*` meta tags,
  and the `url` / `image` fields in the JSON-LD block.
- `robots.txt` — the `Sitemap:` line.
- `sitemap.xml` — the `<loc>` element.

Search for `rafineazdan.github.io` and replace it everywhere.

---

## 2. Editing the content

**All text lives in one file: [`assets/js/site-data.js`](assets/js/site-data.js).**

You should not need to touch the HTML. Open that file, edit the strings, save,
refresh. It is a `.js` file rather than `.json` only so the page also works when
you open `index.html` directly from your file system — otherwise treat it as
plain JSON.

What each key controls:

| Key | Section on the page |
| --- | --- |
| `meta` | Name, role line, status badge, hero tagline, email, CV path |
| `links` | GitHub / LinkedIn / Kaggle / email links |
| `about` | The "Objective" narrative and the looking-for-a-supervisor card |
| `researchInterests` | The six interest cards (`primary: true` marks one "Core") |
| `thesis` | The featured thesis card — heading, summary, the four prose blocks, method tags |
| `manuscriptsNote`, `manuscripts` | "Manuscripts in preparation" — citation-style entries |
| `education`, `experience` | The two timelines under Journey |
| `projects`, `projectFilters` | Project &amp; research cards and their filter chips (Research / AI-ML / Backend) |
| `skills` | Skill groups under Technical skills |
| `achievements` | Competitions and awards |
| `certifications` | Certificate cards (click a thumbnail to enlarge) |
| `news` | The dated "News & updates" list |

### A few conventions

- Write `&amp;` instead of a bare `&`, and `&lt;` instead of `<`. The values are
  inserted as HTML, so this keeps them valid.
- Light emphasis is allowed inside the text: `<strong>…</strong>` and
  `<em>…</em>` both work.
- `researchInterests[].icon` must be one of the names defined in `ICON` at the
  top of `assets/js/main.js`: `network`, `scan`, `eye`, `chip`, `layers`, `chat`.
- `pipeline[].status` must be `"active"` (green pulsing dot) or `"done"`.
- `projects[].category` must match one of the strings in `projectFilters`.

### Adding a new project

Append an object to `projects`:

```js
{
  category: "AI / ML",              // must match a projectFilters entry
  title: "Project name",
  featured: true,                   // optional — adds the star and accent border
  body: "Two or three sentences: what the problem was, what you did, what came out.",
  metrics: [{ value: "0.91", label: "Dice score" }],   // optional
  tags: ["PyTorch", "Segmentation"],
  links: [{ label: "Repository", href: "https://github.com/..." }]
}
```

### Adding a news item

Newest first, at the top of `news`:

```js
{ date: "Oct 2026", body: "Paper submitted to <strong>ISBI 2027</strong>." }
```

---

## 3. Updating the CV

The CV source is `../cv/research_cv.tex` (outside this repository, in the parent
`github-portfolio` folder).

```bash
cd ../cv
pdflatex research_cv.tex          # run twice if you changed cross-references
cp research_cv.pdf "../RafinEazdan/assets/cv/Eazdan_Mostafa_Rafin_CV.pdf"
```

Keep the filename the same and the site picks it up with no further changes.
If you rename it, update `meta.cvPath` in `site-data.js`.

---

## 4. Previewing locally

Because the data is a `.js` file, double-clicking `index.html` works. If you
prefer a real server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 5. Files

```
index.html                    the page structure (rarely needs editing)
404.html                      not-found page
.nojekyll                     tells GitHub Pages to serve files verbatim
robots.txt, sitemap.xml       search-engine hints
.github/workflows/pages.yml   optional GitHub Actions deployment
assets/
  css/style.css               design tokens, light + dark themes, all components
  js/site-data.js             ← all content lives here
  js/main.js                  rendering, navigation, theming, filters, lightbox
  img/profile/rafin.jpg       hero photograph
  img/certificates/           certificate scans
  cv/                         the PDF the CV buttons point to
```

## 6. Things that are already handled

- **Dark and light themes** — follows the visitor's system setting, with a
  toggle in the navigation that remembers their choice.
- **Responsive** — tested from 390 px phones through to wide desktops.
- **Accessibility** — skip link, keyboard-operable menu and lightbox, visible
  focus rings, and `prefers-reduced-motion` support.
- **Printing** — the page prints cleanly; navigation and decoration are hidden.
- **SEO** — descriptive metadata, Open Graph tags for link previews, and a
  `Person` JSON-LD block so search engines understand who the page is about.
