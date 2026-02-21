# PALA LABS Website

## Overview
Corporate website for PALA LABS (palalabs.org) — a Sovereign Technology Lab for Sovereign Individuals. Minimalist single-page design inspired by monobundle.com with ambient visuals, grain texture effects, and bilingual (EN/JP) support.

## Architecture
- **Frontend**: React + Vite, single-page with smooth scroll navigation
- **Backend**: Express.js (static serving only, no API routes)
- **CMS**: Sanity CMS for blog content (fetched directly from frontend via @sanity/client)
- **Styling**: Tailwind CSS with DM Sans font, natural/warm color palette
- **State**: React Context for i18n, TanStack Query for data fetching

## Key Pages & Sections
- **Hero**: Full-viewport with ambient background image, catchphrase, grain overlay
- **About/Philosophy**: Mission, Huxley inspiration, sovereign tech philosophy
- **Initiatives**: JAM Tour, Gray Paper Lectures, archive links
- **Blog**: Dynamic posts from Sanity CMS (fetched client-side)
- **Footer**: Contact info, social links, copyright

## Features
- Bilingual EN/JP toggle with localStorage persistence
- Scroll-reveal animations via IntersectionObserver
- Grain texture overlay for craft aesthetic
- Responsive design with mobile hamburger menu
- SEO meta tags and Open Graph

## Sanity CMS
- Blog posts managed via Sanity Studio
- Schema: `blogPost` document type with bilingual fields (titleEn/titleJa, excerptEn/excerptJa, contentEn/contentJa), category, image, publishedAt
- Client config: `client/src/lib/sanity.ts`
- Schema definition: `sanity/schemas/blogPost.ts`
- Environment variables: `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`

## Recent Changes
- 2026-02-21: Migrated blog from PostgreSQL to Sanity CMS, removed server-side blog API/DB
- 2026-02-15: Initial build of complete site with all sections, bilingual support, animations, and blog backend
