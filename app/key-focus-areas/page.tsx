import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  Check,
  HeartHandshake,
  Megaphone,
  Scale,
  Sprout,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { KeyFocusHero } from "@/components/KeyFocusHero";
import { PageCallToAction } from "@/components/PageCallToAction";
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
    heroImage: STOCK_IMAGES.focusHeroYouth,
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
    heroImage: STOCK_IMAGES.focusHeroGovernance,
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
    heroImage: STOCK_IMAGES.focusHeroCommunity,
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
    heroImage: STOCK_IMAGES.focusHeroCapacity,
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
    heroImage: STOCK_IMAGES.focusHeroPartnerships,
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
    heroImage: STOCK_IMAGES.focusHeroPolicy,
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
        <KeyFocusHero
          slides={FOCUS_AREAS.map(({ id, title, heroImage }) => ({ id, title, image: heroImage }))}
        />

        <section id="focus-areas" className="bg-brand-50 py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Explore our work</p>
              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-brand-950">Six areas, one shared purpose.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-brand-900/75">Choose an area to learn more about our priorities and how they connect to development goals.</p>
            </FadeIn>
            <nav aria-label="Focus areas" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FOCUS_AREAS.map(({ id, title }, i) => (
                <a key={id} href={`#${id}`} className="group flex items-center gap-4 rounded-xl bg-white p-4 text-sm font-semibold text-brand-950 ring-1 ring-brand-100 transition-colors hover:bg-brand-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">
                  <span className="text-xs font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                  <span>{title}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:px-10 md:space-y-24 md:py-24 lg:px-12">
          {FOCUS_AREAS.map(({ id, icon: Icon, image, title, points }, i) => (
            <FadeIn key={id}>
              <section
                id={id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-900 ${
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
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Focus area {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-3xl">
                    {title}
                  </h2>
                  <ul className="mt-6 space-y-4 border-t border-brand-100 pt-6">
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

          <FadeIn>
            <div className="grid gap-10 rounded-3xl bg-brand-950 p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">What we work towards</p>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Organizational Objectives
                </h2>
                <Link
                  href="/about"
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
        <PageCallToAction />
      </main>
      <Footer />
    </>
  );
}