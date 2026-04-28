# Linguist Academy — React Landing Page

A mobile-first React landing page built with Vite + Tailwind CSS, based on the Clarity English design system.

## Stack
- React 18 + Vite 5
- Tailwind CSS 3 (configured with custom design tokens — colors, typography, spacing)
- No external UI libraries

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  hooks/
    useCountdown.js          # Countdown hook (returns days/hours/minutes/seconds)
  components/
    landing/
      Navbar.jsx
      HeroSection.jsx        # Hero — "Master English. Start Speaking from Day One."
      ProblemSection.jsx     # Why Most Beginners Fail
      SolutionSection.jsx    # 3-phase curriculum (A1 → A2 → B1+)
      ProofSection.jsx       # Stats + 3-tier pricing (Basic / Pro / Elite)
      CTASection.jsx         # Countdown + form + SpotCounter (default spots=7)
      SpotCounter.jsx        # Hardcoded prop, default value 7
      Footer.jsx
```

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo ships with a ready-to-use GitHub Actions workflow at
`.github/workflows/deploy.yml`. It auto-detects whether the repo is a
**user/org page** (`owner.github.io`) or a **project page** and sets the
correct Vite `base` path during build — no manual config needed.

### One-time setup

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or click *Run workflow* on the Actions tab) — the site
   will be published at:
   - Project page → `https://<user>.github.io/<repo-name>/`
   - User/org page → `https://<user>.github.io/`

### How `base` is handled

- **Local dev** → `base = '/'` (no env var set).
- **CI build** → workflow exports `BASE_PATH=/<repo-name>/` (or `/` for
  user pages) and `vite.config.js` reads it from `process.env.BASE_PATH`.
- All references to public assets use `import.meta.env.BASE_URL` (see the
  hero image in `HeroSection.jsx`) so they resolve correctly on either path.

### Custom domain

Add a `CNAME` file inside `public/` containing your domain
(`example.com`). The workflow copies it into `dist/` automatically. Then
configure the custom domain in **Settings → Pages**.

## Customization

- **Spots remaining** — pass `<CTASection spots={5} />` in `src/App.jsx`.
- **Cohort deadline** — adjust the `target` date in `src/components/landing/CTASection.jsx`.
- **Design tokens** — all colors, typography, and spacing live in `tailwind.config.js`.
