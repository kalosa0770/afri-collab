import Image from "next/image";
import type { Metadata } from "next";
import { HeartHandshake, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PageCallToAction } from "@/components/PageCallToAction";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Vision, Mission, and Core Values | Afri-Collabs for Development",
};

const CORE_VALUES = [
  { name: "Collaboration", icon: HeartHandshake, text: "Promoting inclusive partnerships across sectors" },
  { name: "Integrity", icon: ShieldCheck, text: "Upholding transparency, accountability, and ethical practices" },
  { name: "Innovation", icon: Lightbulb, text: "Encouraging adaptive and scalable development solutions" },
  { name: "Impact", icon: Target, text: "Focusing on measurable and sustainable results" },
  { name: "Inclusivity", icon: Users, text: "Ensuring no one is left behind in development processes" },
];

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="relative isolate overflow-hidden bg-brand-950 text-white">
          <Image src={STOCK_IMAGES.vision} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-950/85" />
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Our purpose</p>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              A shared vision for a more inclusive Africa.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Our vision, mission, and values guide how we connect people and work towards sustainable development.
            </p>
            <a href="#vision" className="mt-8 inline-flex items-center gap-2 rounded text-sm font-bold text-white underline decoration-accent-500 decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore our purpose</a>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-24 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            <FadeIn className="h-full">
              <article className="h-full rounded-3xl bg-brand-50 p-8 ring-1 ring-brand-100 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Where we aspire to go</p>
                <h2 className="font-display mt-5 text-xl font-bold text-brand-700">Our vision</h2>
                <p className="font-display mt-4 text-2xl font-bold leading-snug text-brand-950 sm:text-3xl">An Africa where collaborative action drives sustainable, inclusive, and scalable development outcomes.</p>
              </article>
            </FadeIn>
            <FadeIn delay={0.1} className="h-full">
              <article className="h-full rounded-3xl bg-brand-950 p-8 text-white sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">How we get there</p>
                <h2 className="font-display mt-5 text-xl font-bold text-brand-300">Our mission</h2>
                <p className="font-display mt-4 text-2xl font-bold leading-snug sm:text-3xl">To build and strengthen partnerships that enhance the capacity, effectiveness, and impact of development actors across Africa.</p>
              </article>
            </FadeIn>
          </div>
        </section>

        <section className="bg-brand-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">What guides us</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">Our values in action.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-brand-900/75">These principles shape the way we build relationships and approach development.</p>
            </FadeIn>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map(({ name, icon: Icon, text }, i) => (
                <li key={name}>
                  <FadeIn delay={(i % 3) * 0.08} className="h-full">
                    <article className="h-full rounded-2xl bg-white p-7 ring-1 ring-brand-100">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon aria-hidden="true" className="h-6 w-6" /></span>
                      <h3 className="font-display mt-7 text-xl font-bold text-brand-950">{name}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-brand-900/75">{text}</p>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <PageCallToAction />
      </main>
      <Footer />
    </>
  );
}
