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

## Customization

- **Spots remaining** — pass `<CTASection spots={5} />` in `src/App.jsx`.
- **Cohort deadline** — adjust the `target` date in `src/components/landing/CTASection.jsx`.
- **Design tokens** — all colors, typography, and spacing live in `tailwind.config.js`.
