"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Building2,
  Check,
  ChevronDown,
  HeartHandshake,
  Megaphone,
  Scale,
  Sprout,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { STOCK_IMAGES } from "@/lib/images";

// Titles: company profile, section 4 (Key Focus Areas).
// Points: wording taken verbatim from other sections of the profile.
const FOCUS_AREAS = [
  {
    icon: Sprout,
    image: STOCK_IMAGES.focusYouth,
    title: "Youth Development and Empowerment",
    points: [
      "SDG 8: Decent Work and Economic Growth (through youth empowerment initiatives)",
      "Strengthening local ownership and leadership",
    ],
  },
  {
    icon: Scale,
    image: STOCK_IMAGES.focusGovernance,
    title: "Leadership and Governance",
    points: [
      "SDG 16: Peace, Justice and Strong Institutions (through governance and leadership initiatives)",
      "Strengthening local ownership and leadership",
    ],
  },
  {
    icon: Users,
    image: STOCK_IMAGES.focusCommunity,
    title: "Community Development and Social Inclusion",
    points: [
      "Inclusivity: Ensuring no one is left behind in development processes",
      "SDG 10: Reduced Inequalities (through inclusive development programming)",
    ],
  },
  {
    icon: Building2,
    image: STOCK_IMAGES.focusCapacity,
    title: "Capacity Building and Institutional Strengthening",
    points: [
      "To strengthen institutional and community capacity for sustainable development",
      "Capacity building workshops and training",
      "SDG 4: Quality Education (through capacity building and knowledge sharing)",
    ],
  },
  {
    icon: HeartHandshake,
    image: STOCK_IMAGES.focusPartnerships,
    title: "Strategic Partnerships and Collaboration",
    points: [
      "To facilitate strategic partnerships among development stakeholders",
      "Stakeholder convening and dialogue facilitation",
      "SDG 17: Partnerships for the Goals (through multi-stakeholder collaboration)",
    ],
  },
  {
    icon: Megaphone,
    image: STOCK_IMAGES.focusPolicy,
    title: "Policy Engagement and Development Advocacy",
    points: [
      "To promote knowledge sharing and evidence-based decision-making",
      "Research, policy analysis, and knowledge products",
      "To contribute to regional and continental development agendas",
    ],
  },
];

// Exact wording from the company profile, section 3 (Organizational Objectives)
const OBJECTIVES = [
  "To facilitate strategic partnerships among development stakeholders",
  "To strengthen institutional and community capacity for sustainable development",
  "To support the design and scaling of high-impact development initiatives",
  "To promote knowledge sharing and evidence-based decision-making",
  "To contribute to regional and continental development agendas",
];

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function Objectives() {
  const [open, setOpen] = useState<number | null>(0);
  // The photo stays on the last area opened, so closing a row never blanks it.
  const [shown, setShown] = useState(0);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) setShown(next);
  };

  return (
    <section id="objectives" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Key Focus Areas
            </h2>

            {/* One photo per focus area, crossfading as rows open */}
            <div
              aria-hidden
              className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl bg-brand-900 shadow-xl ring-1 ring-brand-900/10 lg:aspect-[4/5]"
            >
              {FOCUS_AREAS.map(({ image }, i) => (
                <Image
                  key={image}
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                    i === shown ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Shared blue tint so mixed stock photos feel like one set */}
              <div className="absolute inset-0 bg-brand-800/25 mix-blend-multiply" />
            </div>
          </FadeIn>

          <ul className="border-t border-brand-100">
            {FOCUS_AREAS.map(({ icon: Icon, title, points }, i) => {
              const isOpen = open === i;
              return (
                <li key={title} className="border-b border-brand-100">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`focus-panel-${i}`}
                      id={`focus-trigger-${i}`}
                      className={`group flex w-full items-center gap-4 rounded-lg py-5 text-left ${FOCUS_RING}`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isOpen
                            ? "bg-brand-800 text-white"
                            : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                        }`}
                      >
                        <Icon aria-hidden className="h-6 w-6" />
                      </span>
                      <span
                        className={`font-display flex-1 text-lg font-bold leading-snug transition-colors ${
                          isOpen ? "text-brand-800" : "text-brand-950"
                        }`}
                      >
                        {title}
                      </span>
                      <ChevronDown
                        aria-hidden
                        className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={`focus-panel-${i}`}
                    role="region"
                    aria-labelledby={`focus-trigger-${i}`}
                    className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${
                      isOpen
                        ? "visible grid-rows-[1fr]"
                        : "invisible grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 pb-6 pl-16 pr-4">
                        {points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 text-[15px] leading-relaxed text-brand-900/80"
                          >
                            <span
                              aria-hidden
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <FadeIn className="mt-16 md:mt-24">
          <div className="grid gap-10 rounded-3xl bg-brand-900 p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Organizational Objectives
            </h3>
            <ul className="space-y-5">
              {OBJECTIVES.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-brand-950">
                    <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base leading-relaxed text-white/90">
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}