import type { Project } from "@/types";

/**
 * The Projects grid and every /projects/[slug] page are generated from
 * this array. To publish a new project:
 *   1. Add an object here with a unique `slug`.
 *   2. Add a matching `projects.<slug>` block in messages/en.json and
 *      messages/es.json (overview, features, challenges, architecture).
 * Nothing in src/components needs to change.
 */
export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    i18nKey: "projects.ecommercePlatform",
    stack: ["Node.js", "TypeScript", "Angular", "MySQL"],
    year: "2025",
    featured: true,
    links: {
      github: "https://github.com/replace-me/ecommerce-platform",
      demo: "",
    },
    screenshotCount: 3,
  },
  {
    slug: "cruise-reservation-system",
    i18nKey: "projects.cruiseReservationSystem",
    stack: ["C#", "ASP.NET", "SQL Server"],
    year: "2025",
    featured: true,
    links: {
      github: "https://github.com/replace-me/cruise-reservation-system",
      demo: "",
    },
    screenshotCount: 3,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
