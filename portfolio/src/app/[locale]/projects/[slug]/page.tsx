import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Github, ExternalLink, ImageIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/data/projects";
import { routing } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: project.i18nKey });
  return {
    title: `${t("name")} — Yohan Briceño Godoy`,
    description: t("tagline"),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations(project.i18nKey);
  const tp = await getTranslations("projects");

  const featureKeys = ["feature1", "feature2", "feature3", "feature4"] as const;
  const challengeKeys = ["challenge1", "challenge2", "challenge3"] as const;

  return (
    <article className="py-20">
      <div className="container max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} /> {tp("backToProjects")}
        </Link>

        <p className="mt-8 font-mono text-xs text-ink-muted">{project.year}</p>
        <h1 className="mt-2 text-balance font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
          {t("name")}
        </h1>
        <p className="mt-4 text-balance text-lg text-ink-muted">{t("tagline")}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.github && (
            <ButtonLink href={project.links.github} target="_blank" rel="noreferrer" variant="outline">
              <Github size={15} /> {tp("viewGithub")}
            </ButtonLink>
          )}
          {project.links.demo ? (
            <ButtonLink href={project.links.demo} target="_blank" rel="noreferrer" variant="signal">
              <ExternalLink size={15} /> {tp("viewDemo")}
            </ButtonLink>
          ) : (
            <span className="inline-flex h-11 items-center rounded-md border border-dashed border-border px-5 text-sm text-ink-muted">
              {tp("demoUnavailable")}
            </span>
          )}
        </div>

        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
            {`// ${tp("overview")}`}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">{t("overview")}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
            {`// ${tp("features")}`}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {featureKeys.map((key) => (
              <li key={key} className="flex gap-2.5 text-sm text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {t(key)}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
            {`// ${tp("challenges")}`}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {challengeKeys.map((key) => (
              <li key={key} className="flex gap-2.5 text-sm text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                {t(key)}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
            {`// ${tp("architecture")}`}
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            {t("architectureDescription")}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
            {`// ${tp("screenshots")}`}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: project.screenshotCount }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface-raised text-ink-muted"
              >
                <div className="flex flex-col items-center gap-2 text-xs">
                  <ImageIcon size={20} />
                  {tp("screenshotPlaceholder")}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
