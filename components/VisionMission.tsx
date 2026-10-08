import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

// Exact wording from the company profile, section 2
const VISION =
  "An Africa where collaborative action drives sustainable, inclusive, and scalable development outcomes.";
const MISSION =
  "To build and strengthen partnerships that enhance the capacity, effectiveness, and impact of development actors across Africa.";

const CORE_VALUES = [
  { name: "Collaboration", text: "Promoting inclusive partnerships across sectors" },
  {
    name: "Integrity",
    text: "Upholding transparency, accountability, and ethical practices",
  },
  {
    name: "Innovation",
    text: "Encouraging adaptive and scalable development solutions",
  },
  { name: "Impact", text: "Focusing on measurable and sustainable results" },
  {
    name: "Inclusivity",
    text: "Ensuring no one is left behind in development processes",
  },
];

export function VisionMission() {
  return (
    <section id="vision-mission">
      {/* Photo band: Vision and Mission. Image: /public/vision-mission-bg.jpg */}
      <div className="relative isolate overflow-hidden bg-brand-950 py-20 md:py-28">
        <Image
          src="/vision-mission-bg.jpg"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-brand-950/80" />

        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-display max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Vision, Mission, and Core Values
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="border-t-4 border-accent-500 pt-6">
                <h3 className="font-display text-xl font-bold text-brand-300">
                  Vision
                </h3>
                <p className="font-display mt-4 text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
                  {VISION}
                </p>
              </div>
              <div className="border-t-4 border-white/60 pt-6">
                <h3 className="font-display text-xl font-bold text-brand-300">
                  Mission
                </h3>
                <p className="font-display mt-4 text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
                  {MISSION}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Core values on a light band */}
      <div className="bg-brand-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-brand-950">
              Core Values
            </h3>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {CORE_VALUES.map(({ name, text }) => (
                <li key={name} className="border-t border-brand-200 pt-5">
                  <p className="font-display text-lg font-bold text-brand-800">
                    {name}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-900/80">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}