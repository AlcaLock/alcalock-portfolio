"use client";

import { useTranslations } from "next-intl";
import {
  Award,
  GitBranch,
  Trophy,
  BookOpen,
  FileText,
  PenLine,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { futureSections } from "@/data/futureSections";
import type { FutureSectionKey } from "@/types";

const icons: Record<FutureSectionKey, typeof Award> = {
  certifications: Award,
  openSource: GitBranch,
  hackathons: Trophy,
  awards: Trophy,
  publications: BookOpen,
  articles: FileText,
};

export function FutureSections() {
  const t = useTranslations("futureSections");

  return (
    <section className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <p className="-mt-8 mb-10 max-w-2xl text-sm text-ink-muted">{t("description")}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureSections.map((key) => {
            const Icon = icons[key] ?? PenLine;
            return (
              <Card key={key} className="flex flex-col gap-3 p-6 opacity-70">
                <Icon size={18} className="text-ink-muted" />
                <p className="font-medium text-ink">{t(key)}</p>
                <p className="text-xs text-ink-muted">{t("emptyState")}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
