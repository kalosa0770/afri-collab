// Save as: app/vision-mission/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Vision, Mission, and Core Values | Afri-Collabs for Development",
};

// Intro sentence: from the Company Overview in the company profile
const INTRO =
  "The organization is dedicated to fostering strategic partnerships that enhance the effectiveness, reach, and sustainability of development initiatives across Africa.";

// Exact wording from the company profile, section 2
const VISION =
  "An Africa where collaborative action drives sustainable, inclusive, and scalable development outcomes.";
const MISSION =
  "To build and strengthen partnerships that enhance the capacity, effectiveness, and impact of development actors across Africa.";

// Add these five keys to STOCK_IMAGES in lib/images.ts (see the note in chat)
const CORE_VALUES = [
  {
    name: "Collaboration",
    image: STOCK_IMAGES.valueCollaboration,
    icon: HeartHandshake,
    text: "Promoting inclusive partnerships across sectors",
  },
  {
    name: "Integrity",
    image: STOCK_IMAGES.valueIntegrity,
    icon: ShieldCheck,
    text: "Upholding transparency, accountability, and ethical practices",
  },
  {
    name: "Innovation",
    image: STOCK_IMAGES.valueInnovation,
    icon: Lightbulb,
    text: "Encouraging adaptive and scalable development solutions",
  },
  {
    name: "Impact",
    image: STOCK_IMAGES.valueImpact,
    icon: Target,
    text: "Focusing on measurable and sustainable results",
  },
  {
    name: "Inclusivity",
    image: STOCK_IMAGES.valueInclusivity,
    icon: Users,
    text: "Ensuring no one is left behind in development processes",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-6 pb-4 pt-16 md:pt-24">
          <h1 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            Vision, Mission, and Core Values
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-900/80">
            {INTRO}
          </p>
        </section>

        {/* Vision and Mission: two cards side by side */}
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <FadeIn className="h-full">
              <article className="h-full rounded-3xl border-t-4 border-brand-800 bg-brand-50 p-8 ring-1 ring-brand-100 sm:p-10">
                <h2 className="font-display text-xl font-bold text-brand-800">
                  Vision
                </h2>
                <p className="font-display mt-4 text-2xl font-bold leading-snug text-brand-950">
                  {VISION}
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={0.1} className="h-full">
              <article className="h-full rounded-3xl border-t-4 border-accent-500 bg-brand-900 p-8 shadow-xl sm:p-10">
                <h2 className="font-display text-xl font-bold text-accent-500">
                  Mission
                </h2>
                <p className="font-display mt-4 text-2xl font-bold leading-snug text-white">
                  {MISSION}
                </p>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-brand-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-950 sm:text-3xl">
                Core Values
              </h2>
            </FadeIn>
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map(({ name, image, icon: Icon, text }, i) => (
                <li key={name}>
                  <FadeIn delay={(i % 3) * 0.1} className="h-full">
                    <div className="h-full overflow-hidden rounded-2xl bg-white ring-1 ring-brand-100">
                      <div className="relative aspect-[16/10] bg-brand-900">
                        <Image
                          src={image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                        />
                        {/* Shared blue tint so mixed stock photos feel like one set */}
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-brand-800/25 mix-blend-multiply"
                        />
                        <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white ring-4 ring-white">
                          <Icon aria-hidden className="h-6 w-6" />
                        </span>
                      </div>
                      <div className="px-7 pb-7 pt-10">
                        <h3 className="font-display text-xl font-bold text-brand-950">
                          {name}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-brand-900/80">
                          {text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}