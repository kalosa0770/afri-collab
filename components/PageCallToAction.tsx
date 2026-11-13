import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function PageCallToAction() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-12 md:py-20">
      <FadeIn className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 rounded-3xl bg-brand-950 p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Let&apos;s work together</p>
            <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Have an idea for collaboration?</h2>
            <p className="mt-3 leading-7 text-white/80">Whether you are a young leader or an organization, we would love to hear from you.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
