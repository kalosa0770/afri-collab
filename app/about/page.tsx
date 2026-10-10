// Save as: app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ServicesSlider } from "@/components/ServicesSlider";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Afri-Collabs for Development",
};

// All wording below is taken from the company profile:
// section 1 (Company Overview) and section 11 (Geographic Scope).
// Services / Activities (section 6) lives in ServicesSlider.
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          {/* Company Overview + photo with Geographic Scope card */}
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
            <FadeIn>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
                Company Overview
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-900/85">
                Afri-Collaborations for Development Limited is a not-for-profit
                organization registered in Zambia and headquartered in Lusaka.
                The organization is dedicated to fostering strategic
                partnerships that enhance the effectiveness, reach, and
                sustainability of development initiatives across Africa. By
                connecting stakeholders and leveraging collective expertise,
                the organization aims to scale impactful solutions that address
                pressing socio-economic challenges in line with global
                development priorities.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-900 shadow-xl ring-1 ring-brand-900/10 lg:aspect-[4/5]">
                  <Image
                    src={STOCK_IMAGES.about}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 30rem, 90vw"
                    className="object-cover"
                  />
                  {/* Shared blue tint so mixed stock photos feel like one set */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-brand-800/25 mix-blend-multiply"
                  />
                </div>

                <div className="relative mx-4 -mt-14 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-brand-100 lg:absolute lg:-left-12 lg:bottom-8 lg:mx-0 lg:mt-0 lg:w-[90%]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800 text-white">
                      <MapPin aria-hidden className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-lg font-bold text-brand-950">
                      Geographic Scope
                    </h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-900/85">
                    While headquartered in Lusaka, Zambia, the organization
                    operates with a regional outlook, supporting initiatives
                    across Southern Africa and the broader African continent
                    through partnerships and collaborative platforms.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services / Activities (slideshow) */}
        <section className="bg-brand-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <ServicesSlider />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}