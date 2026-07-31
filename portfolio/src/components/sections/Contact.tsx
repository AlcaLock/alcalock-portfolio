"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = t("errorRequired");
    if (!email) next.email = t("errorRequired");
    else if (!emailPattern.test(email)) next.email = t("errorEmail");
    if (!subject) next.subject = t("errorRequired");
    if (!message) next.message = t("errorRequired");

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const payload = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        company: String(formData.get("company") ?? "").trim(),
        subject: String(formData.get("subject") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        website: String(formData.get("website") ?? "").trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Contact submit failed");
      }

      setStatus("success");
      setErrors({});
      form.reset();
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
              {/* Honeypot field for basic bot filtering. */}
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                type="text"
                className="hidden"
                aria-hidden="true"
              />

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
                <label htmlFor="company" className="text-sm font-medium text-ink">
                  {t("companyLabel")}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t("companyPlaceholder")}
                  className="mt-2 w-full rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-signal"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-ink">
                  {t("subjectLabel")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("subjectPlaceholder")}
                  aria-invalid={Boolean(errors.subject)}
                  className="mt-2 w-full rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:border-signal"
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-amber">{errors.subject}</p>
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
