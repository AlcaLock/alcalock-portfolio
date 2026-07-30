import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/data/projects";

const baseUrl = "https://yohan-briceno.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const localePath = (locale: string, path = "") =>
    locale === routing.defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  const staticEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: localePath(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  const projectEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: localePath(locale, `/projects/${project.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...projectEntries];
}
