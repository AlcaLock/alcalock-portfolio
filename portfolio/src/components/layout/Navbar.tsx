"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Terminal } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const sections = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#education", key: "education" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-medium text-ink"
        >
          <Terminal size={16} className="text-signal" aria-hidden />
          <span>ybg@dev</span>
          <span className="text-ink-muted">~$</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {sections.map((s) => (
            <Link
              key={s.key}
              href={s.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {t(s.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <ButtonLink href={profile.resumeUrl} download size="sm" variant="outline">
            {t("resume")}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-canvas px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {sections.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-muted hover:bg-surface-raised hover:text-ink"
              >
                {t(s.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <ButtonLink href={profile.resumeUrl} download size="sm" variant="outline">
              {t("resume")}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
