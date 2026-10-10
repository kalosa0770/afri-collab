"use client";

// Save as: components/KeyFocusHero.tsx
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

type Slide = { id: string; title: string; image: string };

const INTERVAL_MS = 5000;

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function KeyFocusHero({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion, slides.length]);

  const current = slides[index];

  return (
    <section className="relative isolate flex min-h-[30rem] flex-col overflow-hidden bg-brand-950 md:min-h-[36rem]">
      {/* Background photos crossfade with the text */}
      {slides.map(({ id, image }, i) => (
        <Image
          key={id}
          src={image}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-20 object-cover transition-opacity duration-700 motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-950/70 md:bg-brand-950/30" />
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
        <h1 className="font-display text-lg font-semibold text-white/85 sm:text-xl">
          Key Focus Areas
          <span className="sr-only">: {slides.map((s) => s.title).join(", ")}</span>
        </h1>

        {/* All titles share one grid cell so the layout never jumps */}
        <div aria-hidden className="mt-3 grid max-w-3xl">
          {slides.map(({ id, title }, i) => (
            <span
              key={id}
              className={`font-display col-start-1 row-start-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-500 ease-out motion-reduce:transition-none sm:text-5xl lg:text-[3.5rem] ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-4 opacity-0"
              }`}
            >
              {title}
            </span>
          ))}
        </div>

        <div role="group" aria-label="Choose a focus area" className="mt-6 -ml-2 flex items-center">
          {slides.map(({ id, title }, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={title}
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

        <div className="mt-10">
          <a
            href={`#${current.id}`}
            className={`group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-600 ${FOCUS}`}
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}