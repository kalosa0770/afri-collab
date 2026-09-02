import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold max-w-3xl leading-tight text-brand-950 sm:text-5xl">
            Strengthening collaboration and partnerships across Africa
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-900/30 px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-950/5"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-80 w-80 sm:h-[26rem] sm:w-[26rem] md:h-[30rem] md:w-[30rem] lg:h-[34rem] lg:w-[34rem]">
            <span
              aria-hidden
              className="absolute -left-2 top-8 h-3 w-3 rounded-full bg-brand-300"
            />
            <span
              aria-hidden
              className="absolute right-10 -top-2 h-2 w-2 rounded-full bg-brand-900"
            />
            <span
              aria-hidden
              className="absolute -right-1 bottom-20 h-3.5 w-3.5 rounded-full bg-brand-500"
            />
            <span
              aria-hidden
              className="absolute left-8 -bottom-3 h-2.5 w-2.5 rounded-full bg-brand-300"
            />

            <div
              className="relative h-full w-full"
              style={{
                WebkitMaskImage: "url(/africa-mask.png)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: "url(/africa-mask.png)",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            >
              <Image
                src="/hero-photo.jpg"
                alt="Communities we work with across Africa"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
