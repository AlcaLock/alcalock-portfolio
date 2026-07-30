# Professional Portfolio - Yohan Briceno Godoy

Personal portfolio built with Next.js to showcase experience, projects, technical stack, and contact information in two languages (es/en).

Spanish version: [README.es.md](./README.es.md)

## Table of Contents

1. [Overview](#overview)
2. [Stack and Versions](#stack-and-versions)
3. [Project Architecture](#project-architecture)
4. [Folder Structure](#folder-structure)
5. [Prerequisites](#prerequisites)
6. [Local Setup and Run](#local-setup-and-run)
7. [Available Scripts](#available-scripts)
8. [How to Edit Content Without Touching Components](#how-to-edit-content-without-touching-components)
9. [Add and Maintain Projects](#add-and-maintain-projects)
10. [Internationalization (i18n)](#internationalization-i18n)
11. [SEO, Sitemap, and Robots](#seo-sitemap-and-robots)
12. [Deployment on Vercel](#deployment-on-vercel)
13. [Pre-Publish Checklist](#pre-publish-checklist)
14. [Current Status and Suggested Improvements](#current-status-and-suggested-improvements)

## Overview

This repository follows a **data-driven** approach:

- Components are reusable.
- Content lives in data and translation files.
- Adding objects in the right files updates the site automatically without creating manual views.

This keeps the portfolio easy to maintain as projects, experience, and links evolve.

## Stack and Versions

### Core Frameworks and Libraries

- Next.js 15 (App Router)
- React 19
- TypeScript 5 (strict mode)
- Tailwind CSS 3
- Framer Motion
- next-intl
- next-themes
- lucide-react

### Tooling

- ESLint
- Prettier + prettier-plugin-tailwindcss
- PostCSS + Autoprefixer

## Project Architecture

### Rendering and Routes

- Next.js App Router pages under `src/app`.
- Locale-based routes under `src/app/[locale]`.
- Dynamic project detail page at `src/app/[locale]/projects/[slug]/page.tsx`.

### Data Model

- Personal profile: `src/data/profile.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Skills: `src/data/skills.ts`
- Projects: `src/data/projects.ts`

### Internationalization

- Text content in `messages/en.json` and `messages/es.json`.
- Locale routing config in `src/i18n/routing.ts`.
- Locale middleware in `middleware.ts`.

## Folder Structure

```text
portfolio/
  messages/                 # translations (en/es)
  public/                   # static files (PDF, OG image, etc.)
  src/
    app/                    # routes and pages (App Router)
    components/             # UI components and sections
    data/                   # structured portfolio content
    hooks/                  # UI/state hooks
    i18n/                   # locale utilities and navigation helpers
    lib/                    # utility helpers
    types/                  # centralized TypeScript types
```

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

Check versions:

```bash
node -v
npm -v
```

## Local Setup and Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open in your browser:

```text
http://localhost:3000
```

> Note: this project uses locale prefixes (`/en` and `/es`).

## Available Scripts

- `npm run dev`: start local development server.
- `npm run build`: create production build.
- `npm run start`: run production server.
- `npm run lint`: run lint rules.
- `npm run format`: format code with Prettier.

## How to Edit Content Without Touching Components

Most day-to-day updates happen in data and translation files.

| Goal | File(s) |
| --- | --- |
| Name, location, email, social links, CV | `src/data/profile.ts` |
| Work experience | `src/data/experience.ts` + `messages/en.json` and `messages/es.json` |
| Education | `src/data/education.ts` + `messages/en.json` and `messages/es.json` |
| Skills / stack | `src/data/skills.ts` |
| Projects (cards + detail pages) | `src/data/projects.ts` + `messages/en.json` and `messages/es.json` |
| Future sections | `src/data/futureSections.ts` |
| General visible copy | `messages/en.json` and `messages/es.json` |

## Add and Maintain Projects

### Step 1: Add Project Metadata

In `src/data/projects.ts`, add an object with:

- unique `slug`
- unique `i18nKey`
- `stack`
- `year`
- `featured`
- `links.github`
- `links.demo` (can be empty if there is no live demo)
- `screenshotCount`

### Step 2: Add Content in Both Languages

In `messages/en.json` and `messages/es.json`, create:

```text
projects.<i18nKey>
```

With at least:

- `name`
- `tagline`
- `overview`
- `feature1` to `feature4`
- `challenge1` to `challenge3`
- `architectureDescription`

### Step 3: Validate

- Card visible on home page.
- Detail route works on `/[locale]/projects/[slug]`.
- GitHub link is correct.
- Demo link is correct, or fallback badge shows "Demo coming soon".

## Internationalization (i18n)

### Current Configuration

- Supported locales: `en`, `es`
- Default locale: `en`
- Locale prefix: always (`/en`, `/es`)

### Translation Best Practices

- Keep keys aligned between both languages.
- Do not remove existing keys without checking usage.
- When adding new sections, add both language entries at the same time.

## SEO, Sitemap, and Robots

- `src/app/sitemap.ts` generates localized static and project URLs.
- `src/app/robots.ts` exposes indexing rules and sitemap URL.
- Keep the production base URL updated if your domain changes.

## Deployment on Vercel

### Recommended Flow

1. Connect repository to Vercel.
2. Framework should be auto-detected as Next.js.
3. Run first deploy.
4. Validate routes:
   - `/en`
   - `/es`
   - `/en/projects/<slug>`
   - `/es/projects/<slug>`

### Environment Variables

No mandatory environment variables are required for the base site.

## Pre-Publish Checklist

- Update `social.github` in `src/data/profile.ts`.
- Confirm `social.linkedin` and `email`.
- Replace/add `public/resume.pdf`.
- Review all `links.github` and `links.demo` in `src/data/projects.ts`.
- Replace `public/og.png` with a real image (1200x630).
- Run:

```bash
npm run lint
npm run build
```

## Current Status and Suggested Improvements

### Current Status

- Contact form currently validates on client and simulates submit behavior.
- There is no real submit integration yet (API Route, Resend, Formspree, etc.).
- Project screenshots are currently visual placeholders.

### Suggested Improvements

1. Connect contact form to a real backend/email provider.
2. Replace screenshot placeholders with real images using `next/image`.
3. Add basic tests for key components.
4. Add CI for lint/build on every push.

---

If this project is reused as a starter, keep the data-driven approach: edit `src/data` and `messages/*` first before adding new components.
