import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const OBJECTIVES = [
  {
    image: "/objective-collaboration.jpg",
    title: "Collaboration & Coordination",
    body: "Strengthening collaboration and coordination among development actors, institutions, and communities.",
  },
  {
    image: "/objective-governance.jpg",
    title: "Inclusive Governance",
    body: "Promoting inclusive governance, democratic participation, and accountable leadership.",
  },
  {
    image: "/objective-leadership.jpg",
    title: "Youth & Women Leadership",
    body: "Supporting youth and women leadership development and civic engagement.",
  },
  {
    image: "/objective-knowledge.jpg",
    title: "Knowledge Sharing",
    body: "Facilitating knowledge sharing, innovation, learning, and partnership building across the development sector.",
  },
  {
    image: "/objective-sustainable.jpg",
    title: "Sustainable Development",
    body: "Advancing sustainable development through evidence-based programming, advocacy, and capacity strengthening.",
  },
];

export function Objectives() {
  return (
    <section id="objectives" className="bg-brand-50 py-24">
      <div className="mx-auto  max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Our Focus
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-950 sm:text-4xl">
            Core Objectives
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OBJECTIVES.map(({ image, title, body }, i) => (
            <FadeIn key={title} delay={(i % 3) * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-brand-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-950 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:scale-105"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
