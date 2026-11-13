import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { PageCallToAction } from "@/components/PageCallToAction";
import { ServicesSlider } from "@/components/ServicesSlider";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Afri-Collabs for Development",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="bg-brand-950 text-white">
          <div className="mx-auto grid max-w-7xl lg:min-h-[500px] lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">About Afri-Collabs</p>
              <h1 className="font-display mt-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Connecting people for lasting change.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                We believe collaboration can strengthen the reach and sustainability of development initiatives across Africa.
              </p>
              <a href="#who-we-are" className="mt-8 inline-flex w-fit items-center gap-2 rounded text-sm font-bold text-white underline decoration-accent-500 decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Get to know us <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full">
              <Image src={STOCK_IMAGES.about} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section id="who-we-are" className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Who we are</p>
              <h2 className="font-display mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl">
                Collaboration is at the heart of what we do.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-base leading-8 text-brand-900/80 sm:text-lg">
                Afri-Collaborations for Development Limited is a not-for-profit organization registered in Zambia and headquartered in Lusaka. We foster strategic partnerships that enhance the effectiveness, reach, and sustainability of development initiatives across Africa.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-900/80 sm:text-lg">
                By connecting stakeholders and bringing together their expertise, we aim to scale solutions that address socio-economic challenges in line with global development priorities.
              </p>
              <Link href="/vision-mission" className="mt-7 inline-flex items-center gap-2 rounded text-sm font-bold text-brand-700 hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500">
                Our vision and values <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <FadeIn className="mx-auto mt-14 max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-5 rounded-2xl bg-brand-50 p-7 sm:flex-row sm:items-start sm:p-9">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100"><MapPin aria-hidden="true" className="h-6 w-6" /></span>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-950">Rooted in Zambia, connected across Africa</h3>
                <p className="mt-2 max-w-3xl leading-7 text-brand-900/75">From our headquarters in Lusaka, we support initiatives across Southern Africa and the broader African continent through partnerships and collaborative platforms.</p>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="bg-brand-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn><ServicesSlider /></FadeIn>
          </div>
        </section>
        <PageCallToAction />
      </main>
      <Footer />
    </>
  );
}
