# catdev

**Enterprise Technology Engineering.**

Website for CATDEV LLC — an engineering-led company providing cloud and platform engineering, security engineering, and enterprise technology services.

🌐 **Live:** [catdev.io](https://catdev.io)

## Tech Stack

- **[Astro](https://astro.build)** — Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first styling
- **TypeScript** — Type safety
- **GitHub Pages** — Hosting

## Features

- Restrained enterprise-focused visual system
- Service, solution, partner, case-study, and company routes
- Scroll-triggered animations
- Responsive mobile navigation
- SEO optimized

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro
│   └── Footer.astro
├── data/
│   └── enterprise.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── services.astro
│   ├── solutions.astro
│   ├── partners.astro
│   ├── case-studies.astro
│   ├── company.astro
│   ├── contact.astro
│   ├── privacy.astro
│   ├── imprint.astro
│   └── projects/
│       ├── axiom.astro
│       ├── cyb3r.astro
│       └── hikari.astro
└── styles/
    └── global.css
```

Supporting project diagrams and their Archify source files live in `public/projects/` and `archify/`.

## Services

**Cloud & Platform Engineering**

**Security Engineering**

**Enterprise Technology Services**

## Deployment

Automatically deployed to GitHub Pages on push to `main` via GitHub Actions.

## License

© CATDEV LLC. All rights reserved.
