import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  website?: string;
}

function clean(value: unknown): string {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const company = clean(body.company);
    const subject = clean(body.subject);
    const message = clean(body.message);
    const website = clean(body.website);

    // Honeypot: bots usually fill hidden fields.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (name.length > 120 || email.length > 200 || company.length > 140 || subject.length > 180 || message.length > 5000) {
      return NextResponse.json({ error: "Payload too large" }, { status: 400 });
    }

    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      return NextResponse.json({ error: "Contact service is not configured" }, { status: 503 });
    }

    const formspreePayload = {
      name,
      email,
      company,
      subject,
      message,
      _subject: `[Portfolio] ${subject}`,
      _replyto: email,
      _format: "plain",
    };

    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formspreePayload),
      cache: "no-store",
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Upstream contact service failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
