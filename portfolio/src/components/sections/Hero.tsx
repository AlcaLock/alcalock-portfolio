"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <AnimatedBackground />

      <div className="container relative flex flex-col gap-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-ink-muted backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          {t("status")}
        </motion.div>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-mono text-sm text-signal"
          >
            {profile.name} · {t("kicker")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-balance text-lg text-ink-muted"
          >
            {t("intro")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href={profile.resumeUrl} download variant="signal">
              <Download size={15} /> {t("ctaResume")}
            </ButtonLink>
            <ButtonLink href={profile.social.github} target="_blank" rel="noreferrer" variant="outline">
              <Github size={15} /> {t("ctaGithub")}
            </ButtonLink>
            <ButtonLink href={profile.social.linkedin} target="_blank" rel="noreferrer" variant="outline">
              <Linkedin size={15} /> {t("ctaLinkedin")}
            </ButtonLink>
            <ButtonLink href="/#contact" variant="ghost">
              {t("ctaContact")} <ArrowRight size={15} />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
