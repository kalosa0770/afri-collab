// Save as: app/key-focus-areas/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import {
  Building2,
  Check,
  HeartHandshake,
  Link,
  Megaphone,
  Scale,
  Sprout,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { KeyFocusHero } from "@/components/KeyFocusHero";
import { STOCK_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Key Focus Areas | Afri-Collabs for Development",
};

// Titles: company profile, section 4 (Key Focus Areas).
// Points: wording taken verbatim from other sections of the profile
// (objectives, values, services, methodology, SDG alignment).
const FOCUS_AREAS = [
  {
    id: "youth-development",
    icon: Sprout,
    image: STOCK_IMAGES.focusYouth,
    title: "Youth Development and Empowerment",
    points: [
      "SDG 8: Decent Work and Economic Growth (through youth empowerment initiatives)",
      "Strengthening local ownership and leadership",
    ],
  },
  {
    id: "leadership-governance",
    icon: Scale,
    image: STOCK_IMAGES.focusGovernance,
    title: "Leadership and Governance",
    points: [
      "SDG 16: Peace, Justice and Strong Institutions (through governance and leadership initiatives)",
      "Strengthening local ownership and leadership",
    ],
  },
  {
    id: "community-development",
    icon: Users,
    image: STOCK_IMAGES.focusCommunity,
    title: "Community Development and Social Inclusion",
    points: [
      "Inclusivity: Ensuring no one is left behind in development processes",
      "SDG 10: Reduced Inequalities (through inclusive development programming)",
    ],
  },
  {
    id: "capacity-building",
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
    id: "strategic-partnerships",
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
    id: "policy-engagement",
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

const FOCUS_WHITE =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function KeyFocusAreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Slideshow hero: rotates through the six focus areas */}
        <KeyFocusHero
          slides={FOCUS_AREAS.map(({ id, title, image }) => ({ id, title, image }))}
        />

        {/* One row per focus area, alternating image side */}
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-20 md:space-y-28 md:py-28">
          {FOCUS_AREAS.map(({ id, icon: Icon, image, title, points }, i) => (
            <FadeIn key={id}>
              <section
                id={id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-900 shadow-xl ring-1 ring-brand-900/10 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 36rem, 100vw"
                  />
                  {/* Shared blue tint so mixed stock photos feel like one set */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-brand-800/25 mix-blend-multiply"
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <h2 className="font-display mt-5 text-2xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-3xl">
                    {title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-base leading-relaxed text-brand-900/80"
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
              </section>
            </FadeIn>
          ))}

          {/* Organizational Objectives */}
          <FadeIn>
            <div className="grid gap-10 rounded-3xl bg-brand-900 p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Organizational Objectives
                </h2>
                <Link
                  href="/company-profile"
                  className={`mt-2 inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white ${FOCUS_WHITE}`}
                >
                  Learn more about our company
                </Link>
              </div>
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
      </main>
      <Footer />
    </>
  );
}