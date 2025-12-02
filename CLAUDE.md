# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **catdev** - a cybersecurity company website built with Hugo and TailwindCSS, based on the Hugoplate template. The site provides information about penetration testing, MDR, and SIEM services.

## Development Commands

```bash
npm run dev          # Start Hugo development server
npm run build        # Production build with minification and PurgeCSS
npm run preview      # Preview production build locally
npm run format       # Format code with Prettier
npm run update-modules  # Update Hugo modules
```

## Architecture

### Configuration Hierarchy
- `hugo.toml` - Main Hugo configuration (base URL, theme, plugins, services)
- `config/_default/params.toml` - Site parameters (logo, SEO, contact form, cookies)
- `config/_default/menus.en.toml` - Navigation menus
- `config/_default/languages.toml` - Language settings
- `data/theme.json` - Colors and fonts (consumed by TailwindCSS)
- `data/social.json` - Social media links

### Content Structure
Content lives in `content/english/`:
- `_index.md` - Homepage (banner, features/services)
- `blog/` - Blog posts
- `about/`, `contact/`, `pages/` - Static pages
- `sections/` - Reusable content sections

### Theme & Layouts
The custom `catdev` theme extends Hugoplate at `themes/catdev/`:
- `layouts/index.html` - Homepage template
- `layouts/partials/essentials/` - Header, footer, styles, scripts
- `layouts/partials/components/` - Reusable UI components
- `layouts/_default/` - Base templates (baseof, single, list)

### Styling System
- TailwindCSS configured via `tailwind.config.js`
- Colors/fonts read dynamically from `data/theme.json`
- PostCSS with PurgeCSS for production (`postcss.config.js`)
- Custom SCSS in `assets/scss/`

### Hugo Modules
Uses gethugothemes modules for: search, SEO, cookie consent, icons, image handling, accordion, tabs, modals, and more. Modules defined in `go.mod`.

## Key Files to Know
- `hugo.toml:127-170` - Plugin definitions (CSS/JS)
- `tailwind.config.js` - Tailwind theme extends colors/fonts from theme.json
- `content/english/_index.md` - Homepage content (banner, service features)
- `config/_default/params.toml` - Site-wide settings (contact form, theme mode)

## Deployment

Deployed via GitHub Pages using GitHub Actions (`.github/workflows/deploy.yaml`). Pushes to `main` automatically trigger a build and deploy.
