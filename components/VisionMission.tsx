import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Mission: text left, single image right */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              What We Do
            </p>
            <h3 className="mt-3 text-2xl font-bold text-brand-950 sm:text-3xl">
              Our Mission
            </h3>
            <p className="mt-5 leading-relaxed text-slate-700">
              To connect, strengthen, and support organisations, leaders, and
              communities through collaboration, capacity development, knowledge
              sharing, and strategic partnerships that advance inclusive
              governance and sustainable development.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <span
              aria-hidden
              className="absolute -right-4 -top-4 h-3 w-3 rounded-full bg-brand-300"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-900/10">
              <Image
                src="/mission-photo.jpg"
                alt="Students engaged in a capacity-building session"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Vision: image collage left, text right */}
        <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <FadeIn className="relative order-2 md:order-1">
            <span
              aria-hidden
              className="absolute -left-4 top-6 h-3 w-3 rounded-full bg-brand-500"
            />
            <div className="relative h-80 sm:h-96">
              <div className="absolute left-0 top-0 h-2/3 w-2/3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-900/10">
                <Image
                  src="/vision-photo.jpg"
                  alt="Children at a school supported by partner programmes"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-1/2 w-1/2 overflow-hidden rounded-3xl shadow-xl ring-4 ring-brand-50">
                <Image
                  src="/hero-photo.jpg"
                  alt="Children we work alongside across Africa"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-1 md:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Looking Ahead
            </p>
            <h3 className="mt-3 text-2xl font-bold text-brand-950 sm:text-3xl">
              Our Vision
            </h3>
            <p className="mt-5 leading-relaxed text-slate-700">
              An Africa where collaborative leadership, inclusive governance,
              and sustainable partnerships drive equitable development and
              democratic transformation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
