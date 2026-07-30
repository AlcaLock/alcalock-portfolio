"use client";

import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { education } from "@/data/education";

export function Education() {
  const t = useTranslations();
  const tEdu = useTranslations("education");

  return (
    <section id="education" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={tEdu("eyebrow")} title={tEdu("title")} />

        <div className="space-y-4">
          {education.map((entry) => (
            <Card key={entry.id} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-signal">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="font-medium text-ink">{t(`${entry.i18nKey}.name`)}</p>
                  <p className="mt-1 text-sm text-ink-muted">{entry.location}</p>
                </div>
              </div>
              <p className="font-mono text-xs text-ink-muted">
                {tEdu("expectedGraduation")}: {entry.expectedGraduation}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
