# catdev

**catdev** is a cybersecurity company providing penetration testing, MDR (Managed Detection and Response), and SIEM services.

Website: [catdev.io](https://catdev.io)

## Tech Stack

- [Hugo](https://gohugo.io/) - Static site generator
- [TailwindCSS](https://tailwindcss.com/) - Styling
- GitHub Pages - Hosting

## Development

### Prerequisites

- [Hugo Extended v0.121.2+](https://gohugo.io/installation/)
- [Node.js v20+](https://nodejs.org/)
- [Go v1.20+](https://go.dev/doc/install)

### Setup

```bash
npm install
```

### Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run format   # Format code with Prettier
```

## Deployment

The site automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

### Custom Domain

To use a custom domain (e.g., catdev.io):

1. Go to repository Settings > Pages
2. Add your custom domain
3. Configure DNS:
   - For apex domain: Add `A` records pointing to GitHub Pages IPs
   - For subdomain: Add `CNAME` record pointing to `catdev-llc.github.io`

## License

MIT
