"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations();
  const tp = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Card className="group flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-ink-muted">{project.year}</span>
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={tp("viewGithub")}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-4 font-display text-xl font-medium text-ink">
          {t(`${project.i18nKey}.name`)}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{t(`${project.i18nKey}.tagline`)}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6 flex-1" />

        <Link
          href={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-colors group-hover:gap-2.5"
        >
          {tp("viewProject")}
          <ArrowUpRight size={15} />
        </Link>
      </Card>
    </motion.div>
  );
}
