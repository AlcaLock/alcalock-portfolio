import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** "2026-05" -> respects locale, used in Experience/Education timelines */
export function formatMonthYear(iso: string, locale: string) {
  const [year, month] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short" }).format(
    new Date(year ?? new Date().getFullYear(), (month ?? 1) - 1),
  );
}
