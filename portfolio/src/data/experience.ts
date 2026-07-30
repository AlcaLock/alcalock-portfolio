import type { ExperienceEntry } from "@/types";

/**
 * To add a new role: append one object. The timeline, dates, and
 * duration badges are all derived automatically. Copy for each entry
 * (title, bullet points) lives in messages/en.json and messages/es.json
 * under experience.<id>.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "bcr",
    i18nKey: "experience.bcr",
    organization: "Banco Central de Costa Rica",
    startDate: "2026-05",
    endDate: "present",
    location: "Costa Rica",
    tags: ["C#", "SQL Server", "SonarQube", "SAFe"],
  },
];
