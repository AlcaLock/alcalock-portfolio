"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const order: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "tools",
  "methodologies",
];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {order.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                  {t(`categories.${category}`)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills[category].map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-md border border-border px-2.5 py-1 text-sm text-ink"
                    >
                      {skill.name}
                      {skill.learning && (
                        <span className="ml-1.5 text-xs text-amber">
                          · {t("learning")}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
