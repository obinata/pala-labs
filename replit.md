# PALA LABS Website

## Overview
Corporate website for Pala Labs (palalabs.org) — a Curatorial Lab for Sovereign Technology. Minimalist single-page design with ambient visuals, grain texture effects, and bilingual (EN/JP) support.

## Architecture
- **Frontend**: React + Vite, SPA with client-side routing (wouter)
- **Backend**: Express.js (static serving + server-side OG meta injection for blog posts)
- **CMS**: Sanity CMS for blog content (fetched from frontend via @sanity/client, server-side for OG tags)
- **Styling**: Tailwind CSS with natural/warm color palette
- **State**: React Context for i18n, TanStack Query for data fetching

## Key Pages & Sections
- **Hero**: Full-viewport with ambient background image, catchphrase, grain overlay
- **About/Philosophy** (`/philosophy`): Mission, Huxley inspiration, sovereign tech philosophy, "See our initiatives" link
- **Initiatives** (`/work`): OpenShore, JAM Tour, Gray Paper Lectures with Video Archive links, Past Work Library
- **Blog** (`/blog`): Dynamic posts from Sanity CMS
- **Blog Post** (`/blog/:slug`): Individual post with server-side OG meta injection
- **Footer**: Social links, copyright

## Features
- Bilingual EN/JP toggle with localStorage persistence + dynamic `<html lang>` attribute
- Scroll-reveal fade-in animations (3s duration) via IntersectionObserver
- Mouse-parallax background gradients with grain texture overlay
- Organic elliptical image borders
- Responsive design with mobile hamburger menu
- SEO: Open Graph + Twitter Card meta tags, server-side OG injection for blog posts

## Typography
- **Radley**: English headings (serif)
- **Sawarabi Mincho**: Japanese headings (mincho)
- **DM Sans**: Body text (sans-serif)
- Colors: #494949 (headings), #666666 (body)

## Server-Side OG Meta Injection
- `server/sanity.ts`: Server-side Sanity client for fetching blog post metadata
- `server/routes.ts`: `/blog/:slug` route with crawler detection (facebookexternalhit, Twitterbot, LinkedInBot, Slackbot, Discordbot, etc.)
  - Crawlers receive HTML with injected post-specific OG tags (title, description, image)
  - Non-crawlers pass through to SPA catch-all (index.html)
- Enables correct link previews on Twitter, Facebook, Slack, etc.

## Vercel Deployment
- `vercel.json`: Routes all requests through Express serverless function at `/api`
- `api/index.ts`: Vercel serverless function entry point — Express app with:
  - Static file serving from `dist/public`
  - Crawler detection + OG tag injection for `/blog/:slug`
  - SPA catch-all for all other routes
- Build: `npm run build` (Vite client + esbuild server)

## Sanity CMS
- Blog posts managed via Sanity Studio
- Schema: `blogPost` document type with bilingual fields (titleEn/titleJa, excerptEn/excerptJa, contentEn/contentJa), category, image, publishedAt
- Client config: `client/src/lib/sanity.ts`
- Server config: `server/sanity.ts`
- Schema definition: `sanity/schemas/blogPost.ts`
- Environment variables: `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`

## Recent Changes
- 2026-02-23: Server-side OG meta injection for blog posts, SEO meta tags update, favicon update, html lang switching, animation refinements (3s fade-in), Initiatives archive links, nav label updates
- 2026-02-23: Vercel deployment setup with serverless function (`api/index.ts`), crawler detection for OG injection, `vercel.json` routing config, SPA catch-all for all routes
- 2026-02-21: Migrated blog from PostgreSQL to Sanity CMS, removed server-side blog API/DB
- 2026-02-15: Initial build of complete site with all sections, bilingual support, animations, and blog backend
