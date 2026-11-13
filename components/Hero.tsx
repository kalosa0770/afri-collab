"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { STOCK_IMAGES } from "@/lib/images";

const SLIDES = [
  { image: STOCK_IMAGES.hero, label: "Connecting people and ideas" },
  { image: STOCK_IMAGES.heroYouth, label: "Supporting the next generation" },
  { image: STOCK_IMAGES.heroCommunity, label: "Building stronger communities" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  function move(direction: number) {
    setIndex((current) => (current + direction + SLIDES.length) % SLIDES.length);
  }

  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl lg:min-h-[640px] lg:grid-cols-[1fr_1fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 pb-12 pt-16 sm:px-10 lg:py-24 lg:pl-12 lg:pr-10">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
            <span className="h-px w-8 bg-accent-500" aria-hidden="true" />
            Connect. Collaborate. Drive impact.
          </p>
          <h1 className="font-display mt-7 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl xl:text-[3.8rem]">
            Building a better future, <span className="text-accent-500">together.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            We bring people and organizations together to strengthen leadership,
            empower communities, and advance sustainable development across Africa.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Partner with us <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a href="#our-work" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore our work <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-10 text-sm text-white/60">Based in Lusaka, Zambia <span aria-hidden="true" className="mx-2 text-accent-500">•</span> A regional outlook</p>
        </div>

        <div role="region" aria-roledescription="carousel" aria-label="Our focus in pictures" className="relative min-h-[310px] overflow-hidden sm:min-h-[400px] lg:min-h-full">
          {SLIDES.map((slide, i) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-brand-950/85 via-brand-950/10 to-brand-950/10" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">A shared purpose</p>
              <p className="font-display mt-2 text-lg font-bold sm:text-xl">{SLIDES[index].label}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="mr-2 text-xs font-semibold tabular-nums text-white/80">{String(index + 1).padStart(2, "0")} / 03</span>
              <button type="button" onClick={() => move(-1)} aria-label="Previous image" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next image" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
