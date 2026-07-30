/**
 * Central type definitions for every data-driven part of the portfolio.
 * Keeping these in one place means a new project, skill, or role only
 * ever needs a new object literal — never a new component.
 */

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  location: string;
  resumeUrl: string;
  social: SocialLinks;
  languages: { key: string; levelKey: string }[];
  careerStartYear: number;
}

export interface ExperienceEntry {
  id: string;
  /** translation key namespace, e.g. "experience.bcr" */
  i18nKey: string;
  organization: string;
  startDate: string; // ISO "2026-05"
  endDate: string | "present";
  location: string;
  tags: string[];
}

export interface EducationEntry {
  id: string;
  i18nKey: string;
  institution: string;
  location: string;
  expectedGraduation: string;
}

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "tools"
  | "methodologies";

export interface SkillItem {
  name: string;
  learning?: boolean;
}

export type SkillMap = Record<SkillCategory, SkillItem[]>;

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  i18nKey: string;
  stack: string[];
  year: string;
  featured: boolean;
  links: ProjectLink;
  /** ordered keys of screenshot placeholders, rendered generically */
  screenshotCount: number;
}

export type FutureSectionKey =
  | "certifications"
  | "openSource"
  | "hackathons"
  | "awards"
  | "publications"
  | "articles";
