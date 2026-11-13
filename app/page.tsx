import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, Sprout } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FadeIn } from "@/components/FadeIn";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { STOCK_IMAGES } from "@/lib/images";

const PATHWAYS = [
  {
    icon: Handshake,
    title: "Partner with us",
    text: "Connect with us to explore partnerships that strengthen development initiatives.",
    link: "Start a conversation",
    href: "/contact",
  },
  {
    icon: Compass,
    title: "Get to know us",
    text: "Discover the purpose, values, and collaborative approach behind Afri-Collabs.",
    link: "About Afri-Collabs",
    href: "/about",
  },
  {
    icon: Sprout,
    title: "Grow as a young leader",
    text: "Explore our commitment to youth empowerment, leadership, and local ownership.",
    link: "Explore youth development",
    href: "/key-focus-areas#youth-development",
  },
];

const FOCUS_AREAS = [
  {
    number: "01",
    title: "Youth development",
    text: "Supporting young people and strengthening local leadership.",
    image: STOCK_IMAGES.homeFocusYouth,
    href: "/key-focus-areas#youth-development",
  },
  {
    number: "02",
    title: "Leadership & governance",
    text: "Promoting leadership and strong, inclusive institutions.",
    image: STOCK_IMAGES.homeFocusGovernance,
    href: "/key-focus-areas#leadership-governance",
  },
  {
    number: "03",
    title: "Community & inclusion",
    text: "Bringing people together for more inclusive development.",
    image: STOCK_IMAGES.homeFocusCommunity,
    href: "/key-focus-areas#community-development",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <section aria-labelledby="pathways-heading" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <div className="grid gap-5 md:grid-cols-[1fr_1.15fr] md:items-end md:gap-16">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Find your place</p>
                  <h2 id="pathways-heading" className="font-display mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl">
                    Meaningful change starts with connection.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-brand-900/75">
                  Whether you&apos;re looking to collaborate, learn about our mission,
                  or explore youth leadership, there&apos;s a place for you here.
                </p>
              </div>
            </FadeIn>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PATHWAYS.map(({ icon: Icon, title, text, link, href }, i) => (
                <FadeIn key={title} delay={i * 0.08} className="h-full">
                  <Link href={href} className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-brand-50/60 p-7 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <h3 className="font-display mt-8 text-xl font-bold text-brand-950">{title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-7 text-brand-900/75">{text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                      {link} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="our-work" aria-labelledby="work-heading" className="bg-brand-50 py-20 md:py-24">
          <div id="objectives" className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">What we focus on</p>
                  <h2 id="work-heading" className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-brand-950 sm:text-4xl">
                    Working together where it matters.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-brand-900/75">
                    Our work brings together people, knowledge, and partnerships to address shared development challenges.
                  </p>
                </div>
                <Link href="/key-focus-areas" className="inline-flex items-center gap-2 rounded text-sm font-bold text-brand-700 hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500">
                  All focus areas <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {FOCUS_AREAS.map(({ number, title, text, image, href }, i) => (
                <FadeIn key={title} delay={i * 0.08} className="h-full">
                  <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-100 transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500">
                    <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
                      <Image src={image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="text-xs font-bold tracking-[0.16em] text-brand-600">{number} / FOCUS AREA</p>
                      <h3 className="font-display mt-3 text-xl font-bold text-brand-950">{title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-7 text-brand-900/75">{text}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700">Learn more <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="purpose-heading" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <div className="grid overflow-hidden rounded-3xl bg-brand-950 lg:grid-cols-2">
                <div className="relative min-h-[300px] lg:min-h-[420px]">
                  <Image src={STOCK_IMAGES.homeAbout} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div id="vision-mission" className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-14">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Our shared purpose</p>
                  <h2 id="purpose-heading" className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                    Local roots. A shared vision for Africa.
                  </h2>
                  <p className="mt-5 max-w-lg leading-7 text-white/80">
                    Based in Lusaka, Afri-Collaborations for Development is a not-for-profit organization working to build partnerships for sustainable, inclusive development across Africa.
                  </p>
                  <Link href="/vision-mission" className="mt-8 inline-flex w-fit items-center gap-2 rounded text-sm font-bold text-white underline decoration-accent-500 decoration-2 underline-offset-8 hover:text-accent-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    Discover our vision <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
