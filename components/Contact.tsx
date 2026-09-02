"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

type Status = "idle" | "submitting" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // NOTE: this is a front-end stub. Wire this up to an email/API provider
  // (e.g. Resend, Formspree, or a Next.js Route Handler) before going live.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="contact" className="bg-brand-950 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-start">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Get In Touch
          </p>
          <h2 className="mt-3 break-words text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s collaborate
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-brand-100">
            Whether you&apos;re a development organisation, a civil society group, a
            youth leader, or a partner interested in inclusive governance and
            sustainable development across Africa &mdash; we&apos;d love to hear from
            you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === "sent" ? (
            <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-8">
              <CheckCircle2 className="h-8 w-8 text-brand-600" />
              <h3 className="text-lg font-semibold text-brand-950">Message sent</h3>
              <p className="text-sm text-slate-600">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-8">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-950">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-brand-950">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  placeholder="Tell us about your organisation or how you'd like to collaborate"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
