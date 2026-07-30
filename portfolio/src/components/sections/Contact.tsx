"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = t("errorRequired");
    if (!email) next.email = t("errorRequired");
    else if (!emailPattern.test(email)) next.email = t("errorEmail");
    if (!message) next.message = t("errorRequired");

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Replace with a real endpoint (e.g. Formspree, Resend, an API route).
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="max-w-sm text-ink-muted">{t("description")}</p>
            <a
              href={`mailto:${profile.social.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-signal"
            >
              <Mail size={15} />
              {t("directEmail")} {profile.social.email}
            </a>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  {t("nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  aria-invalid={Boolean(errors.name)}
                  className="mt-2 w-full rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-signal"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-amber">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  {t("emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  aria-invalid={Boolean(errors.email)}
                  className="mt-2 w-full rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-signal"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-amber">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  aria-invalid={Boolean(errors.message)}
                  className="mt-2 w-full resize-none rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-signal"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-amber">{errors.message}</p>
                )}
              </div>

              <Button type="submit" variant="signal" disabled={status === "submitting"}>
                {status === "submitting" ? t("submitting") : t("submit")}
              </Button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-signal">
                  <CheckCircle2 size={15} /> {t("success")}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-amber">
                  <AlertCircle size={15} /> {t("error")}
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
