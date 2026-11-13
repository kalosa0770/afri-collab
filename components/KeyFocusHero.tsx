"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = { id: string; title: string; image: string };

export function KeyFocusHero({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  function move(direction: number) {
    setIndex((value) => (value + direction + slides.length) % slides.length);
  }

  return (
    <section className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl lg:min-h-[520px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Our focus areas</p>
          <h1 className="font-display mt-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Working together for inclusive development.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            From youth leadership to stronger institutions, our focus areas connect people and ideas around shared challenges.
          </p>
          <a href="#focus-areas" className="mt-8 inline-flex w-fit items-center gap-2 rounded text-sm font-bold text-white underline decoration-accent-500 decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore all focus areas <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
        <div role="region" aria-roledescription="carousel" aria-label="Featured focus areas" className="relative min-h-[320px] overflow-hidden lg:min-h-full">
          {slides.map(({ id, image }, i) => (
            <Image key={id} src={image} alt="" fill priority={i === 0} sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${i === index ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-brand-950/90 via-brand-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-end sm:p-8">
            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">Featured focus area</p>
              <a href={`#${current.id}`} className="font-display mt-2 inline-block rounded text-lg font-bold underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{current.title}</a>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="mr-1 text-xs font-semibold tabular-nums text-white/80">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => move(-1)} aria-label="Previous focus area" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next focus area" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
