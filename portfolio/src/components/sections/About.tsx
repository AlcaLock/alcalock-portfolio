"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Sparkles, Layers, Cloud, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";

const highlightIcons = [Sparkles, Layers, Cloud, ShieldCheck] as const;

export function About() {
  const t = useTranslations("about");
  const tLang = useTranslations("languages");

  const highlights = [1, 2, 3, 4].map((n) => t(`highlight${n}`));

  return (
    <section id="about" className="border-b border-border py-24">
      <div className="container">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-balance leading-relaxed text-ink-muted">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                {t("highlightsTitle")}
              </p>
              <ul className="mt-4 space-y-3">
                {highlights.map((h, i) => {
                  const Icon = highlightIcons[i] ?? Sparkles;
                  return (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <Icon size={16} className="mt-0.5 shrink-0 text-signal" />
                      {h}
                    </motion.li>
                  );
                })}
              </ul>
            </Card>

            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                {profile.location}
              </p>
              <div className="mt-4 space-y-2">
                {profile.languages.map((l) => (
                  <div key={l.key} className="flex items-center justify-between text-sm">
                    <span className="text-ink">{tLang(l.key)}</span>
                    <span className="font-mono text-xs text-ink-muted">
                      {tLang(l.levelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
