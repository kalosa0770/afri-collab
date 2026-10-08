"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// Exact wording from the company profile, section 4 (Key Focus Areas)
const FOCUS_AREAS = [
  "Youth Development and Empowerment",
  "Leadership and Governance",
  "Community Development and Social Inclusion",
  "Capacity Building and Institutional Strengthening",
  "Strategic Partnerships and Collaboration",
  "Policy Engagement and Development Advocacy",
];

const LEAD_IN = "We are a not-for-profit organization that focuses on";
const INTERVAL_MS = 3500;

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect reduced-motion: no auto-rotation, people can use the dots instead.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Advance every few seconds; restarts whenever the slide changes.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % FOCUS_AREAS.length),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[36rem] flex-col overflow-hidden bg-brand-950 md:min-h-[42rem] lg:min-h-[46rem]"
    >
      {/* Photo: /public/hero-team.jpg */}
      <Image
        src="/hero-team.jpg"
        alt="A group of young African professionals laughing together outdoors at sunset"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_45%] md:object-[50%_45%]"
      />
      {/* Scrim: even on phones, heavier on the text side from tablet up */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-brand-950/70 md:bg-brand-950/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-brand-950/90 via-brand-950/65 to-transparent md:block"
      />

      <div
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 md:py-24"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Screen readers get the full sentence once, not the rotation */}
        <h1 className="sr-only">
          {LEAD_IN} {FOCUS_AREAS.join(", ")}.
        </h1>

        <p
          aria-hidden
          className="font-display text-lg font-semibold text-white/85 sm:text-xl"
        >
          {LEAD_IN}
        </p>

        {/* All slides share one grid cell, so the tallest sets the height and
            nothing below jumps when the text changes. */}
        <div aria-hidden className="mt-3 grid max-w-3xl">
          {FOCUS_AREAS.map((area, i) => (
            <span
              key={area}
              className={`font-display col-start-1 row-start-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-500 ease-out motion-reduce:transition-none sm:text-5xl lg:text-[3.5rem] ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-4 opacity-0"
              }`}
            >
              {area}
            </span>
          ))}
        </div>

        <div
          role="group"
          aria-label="Choose a focus area"
          className="mt-6 -ml-2 flex items-center"
        >
          {FOCUS_AREAS.map((area, i) => (
            <button
              key={area}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={area}
              aria-current={i === index}
              className={`group rounded-full p-2 ${FOCUS}`}
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-accent-500"
                    : "w-1.5 bg-white/50 group-hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#contact"
            className={`inline-flex items-center rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-600 ${FOCUS}`}
          >
            Partner with us
          </a>
          <a
            href="#objectives"
            className={`group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white ${FOCUS}`}
          >
            <span className="underline decoration-white/40 underline-offset-4 transition-colors group-hover:decoration-white">
              Key Focus Areas
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}