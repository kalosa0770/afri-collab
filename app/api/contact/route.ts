// Save as: app/api/contact/route.ts
// Required environment variables (e.g. in .env.local and your host's settings):
//   RESEND_API_KEY        your Resend API key
//   CONTACT_FROM_EMAIL    e.g. "Afri-Collabs <website@yourdomain.org>" (domain verified in Resend)
//   CONTACT_TO_EMAIL      the inbox that should receive enquiries

import { NextResponse } from "next/server";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success for bots.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120).replace(/[\r\n]+/g, " ");
  const email = clean(body.email, 200);
  const organization = clean(body.organization, 200);
  const role = clean(body.role, 200);
  const message = clean(body.message, 5000);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !role || !message) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact form: email environment variables are not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Reaching out as: ${role}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}