# Linguist Academy — React Landing Page

A mobile-first React landing page for an English-learning brand, built with Vite + Tailwind CSS and deployed to GitHub Pages via GitHub Actions.

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Deploy](https://github.com/fiks9/Linguist-Academy/actions/workflows/deploy.yml/badge.svg)](https://github.com/fiks9/Linguist-Academy/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-fiks9.github.io%2FLinguist--Academy-fed000?style=flat-square)](https://fiks9.github.io/Linguist-Academy/)

## 🌐 Live Demo

**[https://fiks9.github.io/Linguist-Academy/](https://fiks9.github.io/Linguist-Academy/)**

<a href="https://fiks9.github.io/Linguist-Academy/" target="_blank">
  <img src="https://api.microlink.io/?url=https://fiks9.github.io/Linguist-Academy/&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800" alt="Linguist Academy live preview — click to open the site" width="100%" />
</a>

> Click the screenshot to open the live site. The preview is generated live by [thum.io](https://www.thum.io) — it always reflects the current state of the deployed site.
>
> _Prefer a static screenshot?_ Drop your own at `docs/screenshot.png` and swap the `src` above (instructions in [Adding a screenshot](#adding-a-screenshot)).

## ✨ Features

- **5 modular landing sections** — Hero, Problem, Solution, Proof, CTA
- **Custom React hooks** — `useCountdown` (cohort timer) and `useInView` (scroll reveals)
- **Hardcoded SpotCounter** — `<CTASection spots={7} />` with a default value of `7`
- **Full design system** — Clarity English tokens (Lexend + Inter, Deep Navy + Academic Yellow palette) ported into `tailwind.config.js`
- **Animations** — staggered fade-up reveals, hero scale-in + float, hover lifts, all gated behind `motion-safe:` and `prefers-reduced-motion`
- **SEO + Social** — Open Graph, Twitter Cards, JSON-LD `EducationalOrganization` schema, canonical URL, theme color, SVG favicon
- **CI/CD** — push to `main` deploys to GitHub Pages automatically
- **No external UI libraries** — pure Tailwind utilities

## 🛠 Tech Stack

| Layer        | Tool                              |
| ------------ | --------------------------------- |
| Framework    | React 18                          |
| Build tool   | Vite 5                            |
| Styling      | Tailwind CSS 3 (custom tokens)    |
| Fonts        | Lexend (display) + Inter (body)   |
| Hosting      | GitHub Pages                      |
| CI/CD        | GitHub Actions                    |

## 📁 Project Structure

```
linguist-academy/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages CI/CD
├── public/
│   ├── favicon.svg                 # Site favicon
│   ├── hero.png                    # Hero image (you add this)
│   └── og-image.png                # 1200×630 social share card (you add this)
├── docs/
│   └── screenshot.png              # README preview (you add this)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── hooks/
│   │   ├── useCountdown.js         # Countdown timer hook
│   │   └── useInView.js            # IntersectionObserver reveal hook
│   └── components/
│       └── landing/
│           ├── Navbar.jsx
│           ├── HeroSection.jsx     # "Master English. Start Speaking from Day One."
│           ├── ProblemSection.jsx  # Why Most Beginners Fail
│           ├── SolutionSection.jsx # 3-phase curriculum (A1 → A2 → B1+)
│           ├── ProofSection.jsx    # Stats + 3-tier pricing
│           ├── CTASection.jsx      # Countdown + form + SpotCounter
│           ├── SpotCounter.jsx     # Default prop spots = 7
│           └── Footer.jsx
├── index.html                      # Meta tags, OG, Twitter, JSON-LD
├── tailwind.config.js              # Design tokens + animations
├── vite.config.js                  # Env-driven base path for Pages
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm

### Local development

```bash
git clone https://github.com/fiks9/Linguist-Academy.git
cd Linguist-Academy
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build      # output → dist/
npm run preview    # serve the production build locally
```

## 🚢 Deploy to GitHub Pages

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — every push to `main` rebuilds and publishes the site.

### One-time setup

1. **Push to GitHub** (already done for this repo).
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or click _Run workflow_ on the **Actions** tab).

The workflow auto-detects the deployment URL:

| Repo type            | Example URL                                      | `base`                |
| -------------------- | ------------------------------------------------ | --------------------- |
| Project page         | `https://fiks9.github.io/Linguist-Academy/`     | `/Linguist-Academy/`  |
| User/Org page        | `https://fiks9.github.io/`                      | `/`                   |

### How `base` is handled

- **Local dev** → `BASE_PATH` unset → `base = '/'`.
- **CI build** → workflow exports `BASE_PATH=/Linguist-Academy/` and `vite.config.js` reads it from `process.env.BASE_PATH`.
- All public-asset references use `import.meta.env.BASE_URL` (see [`HeroSection.jsx`](src/components/landing/HeroSection.jsx)) so they resolve correctly under either path.

### Custom domain

Add a `CNAME` file inside `public/` with your domain (`example.com`) — it'll be copied into `dist/` on build. Then configure the custom domain under **Settings → Pages**.

## 🎨 Customization

- **Spots remaining** — change in `src/App.jsx`:
  ```jsx
  <CTASection spots={5} />
  ```
- **Cohort deadline** — edit the `target` Date in `src/components/landing/CTASection.jsx`.
- **Design tokens** — colors, typography, spacing, animations all live in `tailwind.config.js`.
- **Copy text** — each section's content is data-driven at the top of its component file.

## 🏷 SEO & Social Tags

`index.html` ships with:

- **Primary** — title, description, keywords, author, canonical URL, theme color
- **Open Graph** — `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (1200×630), `og:locale`
- **Twitter Cards** — `summary_large_image` with title/description/image
- **JSON-LD** — `EducationalOrganization` schema for rich Google results
- **Favicon** — SVG (Deep Navy + Academic Yellow), works on all modern browsers

### Adding a screenshot

The README preview at the top expects an image at **`docs/screenshot.png`**. Quickest way to create one:

1. Open the live site.
2. Take a full-page screenshot (Chrome: `Ctrl+Shift+P` → "Capture full size screenshot").
3. Save it as `docs/screenshot.png`.
4. `git add docs/screenshot.png && git commit -m "docs: add screenshot" && git push`.

For best results use a 16:10 or 16:9 ratio, ~1600px wide.

### Adding the social share card

To make link previews show a custom image on X / LinkedIn / iMessage etc., create a **1200×630 PNG** and save it as `public/og-image.png`. The meta tags in `index.html` already point to it.

## 📝 License

MIT © Linguist Academy
