# PALA LABS Website

## Overview
Corporate website for PALA LABS (palalabs.org) — a Sovereign Technology Lab for Sovereign Individuals. Minimalist single-page design inspired by monobundle.com with ambient visuals, grain texture effects, and bilingual (EN/JP) support.

## Architecture
- **Frontend**: React + Vite, single-page with smooth scroll navigation
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Styling**: Tailwind CSS with DM Sans font, natural/warm color palette
- **State**: React Context for i18n, TanStack Query for data fetching

## Key Pages & Sections
- **Hero**: Full-viewport with ambient background image, catchphrase, grain overlay
- **About/Philosophy**: Mission, Huxley inspiration, sovereign tech philosophy
- **Initiatives**: JAM Tour, Gray Paper Lectures, archive links
- **Blog**: Dynamic posts from database via `/api/blog`
- **Footer**: Contact info, social links, copyright

## Features
- Bilingual EN/JP toggle with localStorage persistence
- Scroll-reveal animations via IntersectionObserver
- Grain texture overlay for craft aesthetic
- Responsive design with mobile hamburger menu
- SEO meta tags and Open Graph

## API Routes
- `GET /api/blog` — Returns all blog posts ordered by date

## Database
- PostgreSQL with `blog_posts` table
- Seeded with 3 initial posts on startup

## Recent Changes
- 2026-02-15: Initial build of complete site with all sections, bilingual support, animations, and blog backend
