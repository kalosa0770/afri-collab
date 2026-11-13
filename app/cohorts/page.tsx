import Image, { type StaticImageData } from "next/image";
import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import workshop from "@/public/images/gallery-4.jpg";
import facilitator from "@/public/images/cohorts-workshop-facilitator.jpg";
import presentation from "@/public/images/cohorts-group-presentation.jpg";
import participants from "@/public/images/gallery-2.jpg";
import discussion from "@/public/images/cohorts-participant-discussion.jpg";
import outing from "@/public/images/cohorts-group-outing.jpg";
import speaker from "@/public/images/gallery-3.jpg";
import workshopSpeaker from "@/public/images/cohorts-workshop-speaker.jpg";
import sharedMoment from "@/public/images/cohorts-shared-moment.jpg";
import workshopTalk from "@/public/images/gallery-1.jpg";
import participantVoice from "@/public/images/vision-bg.jpg";
import groupActivity from "@/public/images/hero-img.jpg";
import riversidePortrait from "@/public/images/cohorts-riverside-portrait.jpg";
import riverOuting from "@/public/images/cohorts-river-outing.jpg";
import riversideSunset from "@/public/images/cohorts-riverside-sunset.jpg";

export const metadata: Metadata = {
  title: "Cohorts | Afri-Collabs for Development",
  description: "Explore photographs of learning, conversation, and connection from past Afri-Collabs cohorts.",
};

const PHOTOS: { src: StaticImageData; alt: string; caption: string; contain?: boolean }[] = [
  { src: workshop, alt: "Participants gathered around tables during a workshop", caption: "Learning together" },
  { src: facilitator, alt: "A facilitator speaking to workshop participants", caption: "Sharing perspectives" },
  { src: presentation, alt: "Two participants presenting to the group", caption: "Ideas in conversation" },
  { src: participants, alt: "Participants listening and taking notes at a workshop", caption: "Listening and learning" },
  { src: discussion, alt: "A participant speaking and gesturing during a discussion", caption: "Making space for voices" },
  { src: outing, alt: "A group of participants standing together by the water", caption: "Building connections" },
  { src: speaker, alt: "A participant speaking to a room of attendees", caption: "Leading the conversation" },
  { src: workshopSpeaker, alt: "A participant speaking into a microphone", caption: "Learning from one another" },
  { src: sharedMoment, alt: "Participants sitting together around a table by the water", caption: "Moments together" },
  { src: workshopTalk, alt: "A speaker addressing participants at a workshop", caption: "Sharing experience" },
  { src: participantVoice, alt: "A participant speaking into a microphone at a gathering", caption: "Voices in the room" },
  { src: groupActivity, alt: "A participant with a notebook speaking during a group activity", caption: "Taking part" },
  { src: riversidePortrait, alt: "Two people sitting together by the water", caption: "A shared moment" },
  { src: riverOuting, alt: "A group spending time together on a boat", caption: "Connecting beyond the workshop" },
  { src: riversideSunset, alt: "Sunset over the water", caption: "A moment to reflect", contain: true },
];

export default function CohortsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <section className="bg-brand-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-20 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Our community</p>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Cohorts, shared moments.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              A glimpse of the people, conversations, and connections that have brought our community together.
            </p>
            <a href="#cohort-gallery" className="mt-8 inline-flex w-fit items-center gap-2 rounded text-sm font-bold text-white underline decoration-accent-500 decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore the gallery <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="cohort-gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 bg-brand-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">In pictures</p>
              <h2 id="gallery-heading" className="font-display mt-4 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
                Learning and growing together.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-brand-900/75">
                Explore moments of collaboration, learning, and connection from our community.
              </p>
            </FadeIn>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PHOTOS.map(({ src, alt, caption, contain }, i) => (
                <li key={src.src}>
                  <FadeIn delay={(i % 3) * 0.06} className="h-full">
                    <figure className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-900/10">
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          loading="eager"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className={contain ? "object-contain" : "object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"}
                        />
                      </div>
                      <figcaption className="px-5 py-4 text-sm font-semibold text-brand-950">{caption}</figcaption>
                    </figure>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
