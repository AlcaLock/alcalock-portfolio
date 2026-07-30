"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { formatMonthYear } from "@/lib/utils";

export function Experience() {
  const t = useTranslations();
  const tExp = useTranslations("experience");
  const locale = useLocale();

  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={tExp("eyebrow")} title={tExp("title")} />

        <div className="space-y-6">
          {experience.map((role, i) => {
            const bulletKeys = Object.keys(
              (t.raw(role.i18nKey) as Record<string, string>) ?? {},
            ).filter((k) => k.startsWith("bullet"));

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:p-8">
                  <div>
                    <p className="font-medium text-ink">{t(`${role.i18nKey}.role`)}</p>
                    <p className="mt-1 text-sm text-signal">{role.organization}</p>
                    <p className="mt-3 font-mono text-xs text-ink-muted">
                      {formatMonthYear(role.startDate, locale)} —{" "}
                      {role.endDate === "present"
                        ? tExp("present")
                        : formatMonthYear(role.endDate, locale)}
                    </p>
                    <p className="font-mono text-xs text-ink-muted">{role.location}</p>
                  </div>

                  <div>
                    <p className="text-sm text-ink-muted">{t(`${role.i18nKey}.summary`)}</p>
                    <ul className="mt-4 space-y-2.5">
                      {bulletKeys.map((key) => (
                        <li key={key} className="flex gap-2.5 text-sm text-ink">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                          {t(`${role.i18nKey}.${key}`)}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
