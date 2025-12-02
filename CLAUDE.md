# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **catdev** - a modern, cutting-edge website for a full-stack IT services company. Built with Astro and TailwindCSS, featuring a dark theme with animated gradients, glassmorphism effects, and smooth scroll animations.

**Important**: The company name is always lowercase: `catdev` (not CatDev or CATDEV).

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (outputs to ./dist)
npm run preview  # Preview production build locally
```

## Architecture

### Tech Stack
- **Astro 4.x** - Static site generator with component islands
- **TailwindCSS 3.x** - Utility-first CSS with custom design system
- **TypeScript** - Type-safe development

### Project Structure
```
src/
├── assets/images/     # Source images (logos, etc.)
├── components/
│   ├── Header.astro   # Fixed navigation with mobile menu
│   ├── Footer.astro   # Site footer
│   └── sections/      # Page sections
│       ├── Hero.astro
│       ├── Services.astro
│       ├── Approach.astro
│       ├── About.astro
│       └── Contact.astro
├── layouts/
│   └── Layout.astro   # Base layout with global styles
├── pages/
│   └── index.astro    # Homepage
└── styles/
    └── global.css     # Global styles, Tailwind directives
public/
├── CNAME              # GitHub Pages custom domain
├── favicon.png
├── logo-icon.png
└── og-image.png
```

### Design System

**Colors** (defined in `tailwind.config.mjs`):
- `electric`: #2169B3 (primary brand blue)
- `ocean`: #094E96 (dark accent)
- `midnight`: #0A0E27 (dark background)
- `deep-space`: #151B3B (card backgrounds)
- `steel`: #8B92A8 (secondary text)
- `cyan`: #00D4FF (interaction highlights)
- `purple`: #6B4FFF (secondary accents)

**Key CSS Classes** (in `global.css`):
- `.text-gradient` - Gradient text effect
- `.btn-primary` - Primary CTA button with glow
- `.btn-secondary` - Ghost button style
- `.card-glass` - Glassmorphism card
- `.glow-effect` - Hover glow overlay
- `.reveal` - Scroll-triggered fade-in animation
- `.section-padding` - Consistent section spacing
- `.container-custom` - Max-width container

### Animations
- Scroll reveal animations trigger on `.reveal` elements
- Floating animations on decorative elements
- Gradient pulse effects on accent elements
- Smooth scroll behavior built-in

## Deployment

Deployed via GitHub Pages using GitHub Actions (`.github/workflows/deploy.yaml`).
- Pushes to `main` automatically trigger build and deploy
- Output directory: `./dist`
- Custom domain: catdev.io (via CNAME file)

## Key Files
- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind theme and custom colors
- `src/styles/global.css` - Global styles and custom components
- `src/layouts/Layout.astro` - Base HTML template with scroll scripts
