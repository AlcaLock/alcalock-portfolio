# Yohan Briceño Godoy — Portfolio

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, next-intl.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content — no component changes needed

All real content lives in two places:

| What you want to change            | File(s) to edit                                    |
| ----------------------------------- | --------------------------------------------------- |
| Name, location, email, socials, résumé path | `src/data/profile.ts`                        |
| Work experience                     | `src/data/experience.ts` + `messages/en.json` / `es.json` → `experience.<id>` |
| Education                           | `src/data/education.ts` + `messages` → `education.<key>` |
| Skills                              | `src/data/skills.ts`                                |
| Projects (cards + detail pages)     | `src/data/projects.ts` + `messages` → `projects.<i18nKey>` |
| "Coming soon" sections              | `src/data/futureSections.ts`                        |
| Any visible text/copy               | `messages/en.json`, `messages/es.json`              |

### Adding a new project

1. Add an object to the `projects` array in `src/data/projects.ts` with a unique `slug`.
2. Add a matching block under `projects.<i18nKey>` in **both** `messages/en.json` and `messages/es.json` (name, tagline, overview, feature1-4, challenge1-3, architectureDescription).
3. Done — the grid on the homepage and the `/projects/[slug]` detail page render automatically.

### Replacing placeholders

- `public/resume-placeholder.txt` → replace with a real `public/resume.pdf`.
- GitHub URL in `src/data/profile.ts` (`social.github`) and per-project `links.github`/`links.demo` in `src/data/projects.ts`.
- `public/og.png` (1200×630) for social share previews.
- Screenshots: swap the dashed placeholders in the project detail page for real `<Image>` components once you have screenshots.

## Scripts

- `npm run dev` – local development
- `npm run build` – production build
- `npm run start` – run the production build
- `npm run lint` – ESLint
- `npm run format` – Prettier (with Tailwind class sorting)

## Stack

Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS · Framer Motion · next-intl (en/es) · next-themes · lucide-react
