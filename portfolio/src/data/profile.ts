import type { Profile } from "@/types";

/**
 * Edit THIS file to update personal information anywhere on the site:
 * hero, footer, contact section, metadata, resume link, etc.
 * Nothing else needs to change.
 */
export const profile: Profile = {
  name: "Yohan Saito Briceño Godoy",
  location: "Alajuela, Costa Rica",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/AlcaLock",
    linkedin: "https://www.linkedin.com/in/yohan-briceño-godoy-452b5435b",
    email: "yohanbriceno256@gmail.com",
  },
  languages: [
    { key: "spanish", levelKey: "native" },
    { key: "english", levelKey: "advanced" },
  ],
  careerStartYear: 2026,
};
