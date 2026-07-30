import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-muted">{t("builtWith")}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal/50 hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal/50 hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-signal/50 hover:text-ink"
          >
            <Mail size={16} />
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div className="border-t border-border/60 py-4">
        <p className="container text-center text-xs text-ink-muted">
          © {year} {profile.name}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
