# ADR-001: Initial Architecture

**Date:** 2026-04-07
**Status:** Accepted
**Context:** Lead-generation website for Nahum J Landscaping LLC, a local landscaping company in Sanford, FL. SEO is the top priority. Must be fully static for GitHub Pages hosting.

## Decision

- **Framework:** Astro 6 — zero JS by default, perfect Lighthouse scores, built-in sitemap
- **Language:** TypeScript
- **Database:** None — fully static site
- **Hosting:** GitHub Pages — free, reliable, custom domain support
- **Styling:** Tailwind CSS 4 — utility-first, purges unused CSS, mobile-first
- **Contact Form:** Formspree — no backend needed, spam filtering
- **CI/CD:** GitHub Actions — build and deploy on push to main

## Key Integrations

- `@astrojs/sitemap` — auto-generates sitemap.xml
- JSON-LD LocalBusiness structured data with GeoCoordinates (28.8001, -81.2732)
- Open Graph / Twitter Cards per page
- Formspree contact form (endpoint in config.ts)

## Alternatives Considered

- **Next.js** — rejected: SSR overkill for static marketing site, harder to get 100 Lighthouse
- **Hugo/Jekyll** — rejected: Astro offers better component model and Tailwind integration
- **WordPress** — rejected: requires hosting, plugins, security maintenance
- **11ty** — viable but Astro's component islands and image optimization are better suited

## Consequences

- Near-perfect Lighthouse scores out of the box
- No security surface (no server, no database, no auth)
- Client cannot edit content without code changes (mitigated by clear TODO markers)
- Form submissions depend on Formspree uptime (phone number displayed as fallback)
