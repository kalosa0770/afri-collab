"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, MapPin, Send } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

type Status = "idle" | "submitting" | "sent" | "error";

// Stakeholder list: company profile, section 8
const ROLES = [
  "Youth and community-based groups",
  "Civil society organizations and NGOs",
  "Government institutions and public sector agencies",
  "Private sector partners",
  "Development agencies and donors",
];

const FIELD =
  "mt-1.5 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-[15px] text-brand-950 placeholder:text-brand-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";
const LABEL = "text-sm font-semibold text-brand-950";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-brand-950 py-20 md:py-28"
    >
      {/* Background photo: /public/contact-bg.jpg */}
      <Image
        src="/contact-bg.jpg"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-950/85" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s collaborate
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
            Whether you are a youth or community-based group, a civil society
            organization, a government institution, a private sector partner,
            or a development agency or donor, we would love to hear from you.
          </p>
          <p className="mt-8 flex items-center gap-3 text-[15px] font-semibold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-500">
              <MapPin aria-hidden className="h-5 w-5" />
            </span>
            Headquartered in Lusaka, Zambia
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "sent" ? (
            <div
              role="status"
              className="flex flex-col items-start gap-3 rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
            >
              <CheckCircle2 aria-hidden className="h-9 w-9 text-brand-600" />
              <h3 className="font-display text-xl font-bold text-brand-950">
                Message sent
              </h3>
              <p className="text-[15px] leading-relaxed text-brand-900/80">
                Thank you for reaching out. We will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={FIELD}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={FIELD}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="organization" className={LABEL}>
                    Organization <span className="font-normal text-brand-900/50">(optional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    className={FIELD}
                    placeholder="Where you work"
                  />
                </div>
                <div>
                  <label htmlFor="role" className={LABEL}>
                    I am reaching out as
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      required
                      defaultValue=""
                      className={`${FIELD} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden
                      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={LABEL}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${FIELD} resize-none`}
                  placeholder="Tell us how you would like to collaborate"
                />
              </div>

              {/* Honeypot: hidden from people, tempting for spam bots */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Leave this field empty</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  Your message could not be sent. Please try again in a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
                <Send aria-hidden className="h-4 w-4" />
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}