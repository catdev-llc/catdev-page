# AGENT.md

Guidance for coding agents working in this repository.

## Project Overview

This is the current `catdev` portfolio site. It presents Jan Mueller as an individual builder working across AI, cybersecurity, programming, DevOps, infrastructure, hardware, and agentic systems. It should not drift back into agency-style positioning.

The company/legal entity name is lowercase `catdev`. Treat it as the legal/freelance framework, not as a polished consulting agency brand.

## Development Commands

```bash
npm run dev      # Start the Astro development server
npm run build    # Build the static site into ./dist
npm run preview  # Preview the production build locally
```

## Tech Stack

- Astro 4.x
- Tailwind CSS 3.x
- TypeScript-ready Astro project structure
- Static output for GitHub Pages

## Important Content Rules

- Write for external visitors who do not know the local folders, private context, or implementation history.
- Keep the tone professional and technical, but personal. This is a CV/portfolio surface, not a company sales page.
- Avoid LLM-looking headings such as "Why it matters".
- Avoid explaining internal folder paths or why a diagram was changed.
- Do not add claims about certifications, clients, or availability unless they are already present and accurate.
- Security wording should be suitable for enterprise recruiters and corporate networks.

## Current Pages

```text
src/pages/index.astro
src/pages/contact.astro
src/pages/imprint.astro
src/pages/privacy.astro
src/pages/projects/axiom.astro
src/pages/projects/cyb3r.astro
src/pages/projects/hikari.astro
```

## Project Diagrams

The public project diagrams live in:

```text
public/projects/
```

The Archify workbench is committed under:

```text
archify/
```

Use `archify/src/*.json` as the source for diagram iterations and `archify/out/*.html` as rendered workbench previews. The production pages use static SVG assets from `public/projects/*.svg`, so update those assets after iterating in Archify.

The current expandable diagram behavior is implemented globally in `src/layouts/Layout.astro` via `data-expandable-diagram` images. Keep diagrams as simple local assets where possible so the public site stays dependency-light and enterprise-friendly.

## Design Notes

- The site uses a dark, technical visual language with cyan and restrained accent colors.
- Keep project logos and diagrams visually balanced.
- Do not introduce remote analytics, remote fonts, cookie banners, or IP lookups unless explicitly requested.
- Prefer local assets and static rendering.

## Deployment

The site builds to static output in `dist/` and is deployed through GitHub Pages using the existing repository workflow and `public/CNAME`.
