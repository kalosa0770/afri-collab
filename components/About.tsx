import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="bg-brand-50 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-950 sm:text-4xl">
            About Afri-Collaborations for Development
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Afri-Collaborations for Development is a non-governmental organisation
            dedicated to strengthening collaboration, learning, and partnerships among
            development actors across Africa. The organisation works to enhance the
            effectiveness, sustainability, and impact of development interventions by
            connecting development organisations, practitioners, political actors,
            governance experts, civil society organisations, youth leaders,
            researchers, and development partners.
          </p>
          <a
            href="#vision-mission"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <span
            aria-hidden
            className="absolute -left-4 -top-4 h-3 w-3 rounded-full bg-brand-300"
          />
          <span
            aria-hidden
            className="absolute -right-3 bottom-10 h-3.5 w-3.5 rounded-full bg-brand-500"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-900/10">
            <Image
              src="/about-photo-main.jpg"
              alt="A community engagement session facilitated with a partner organisation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
