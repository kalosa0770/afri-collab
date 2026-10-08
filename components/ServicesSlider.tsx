"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileSearch,
  GraduationCap,
  MessagesSquare,
  PencilRuler,
} from "lucide-react";

// Exact wording from the company profile, section 6 (Services / Activities)
const SERVICES = [
  { icon: PencilRuler, text: "Project design and development support" },
  { icon: ClipboardList, text: "Program implementation and coordination" },
  { icon: GraduationCap, text: "Capacity building workshops and training" },
  { icon: FileSearch, text: "Research, policy analysis, and knowledge products" },
  { icon: MessagesSquare, text: "Stakeholder convening and dialogue facilitation" },
  { icon: BarChart3, text: "Monitoring, evaluation, and learning support" },
];

const INTERVAL_MS = 4500;

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function ServicesSlider() {
  const track = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(SERVICES.length);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Distance between the left edges of two neighbouring slides
  const getStep = () => {
    const el = track.current;
    if (!el || el.children.length < 2) return 1;
    const a = el.children[0] as HTMLElement;
    const b = el.children[1] as HTMLElement;
    return b.offsetLeft - a.offsetLeft || 1;
  };

  // How many "stops" exist at the current screen width (1, 2 or 3 slides visible)
  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const step = getStep();
    const max = el.scrollWidth - el.clientWidth;
    const total = Math.max(1, Math.round(max / step) + 1);
    setPages(total);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / step)));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    measure();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const goTo = useCallback(
    (p: number) => {
      const el = track.current;
      if (!el) return;
      el.scrollTo({
        left: p * getStep(),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion]
  );

  const next = () => goTo(page >= pages - 1 ? 0 : page + 1);
  const prev = () => goTo(page <= 0 ? pages - 1 : page - 1);

  // Automatic advance; restarts after every change, pauses on hover/focus/touch
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(
      () => goTo(page >= pages - 1 ? 0 : page + 1),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [page, pages, paused, reduceMotion, goTo]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="flex items-end justify-between gap-6">
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-brand-950">
          Services / Activities
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous services"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-800 transition-colors hover:bg-brand-50 ${FOCUS_RING}`}
          >
            <ChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next services"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-800 transition-colors hover:bg-brand-50 ${FOCUS_RING}`}
          >
            <ChevronRight aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        onScroll={measure}
        role="region"
        aria-roledescription="carousel"
        aria-label="Services / Activities"
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map(({ icon: Icon, text }, i) => (
          <li
            key={text}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SERVICES.length}`}
            className="flex min-h-[14rem] shrink-0 basis-[85%] snap-start flex-col justify-between rounded-2xl bg-brand-900 p-7 text-white sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-500">
              <Icon aria-hidden className="h-6 w-6" />
            </span>
            <p className="font-display mt-10 text-xl font-bold leading-snug">
              {text}
            </p>
          </li>
        ))}
      </ul>

      <div role="group" aria-label="Choose services page" className="mt-5 flex items-center">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show services page ${i + 1}`}
            aria-current={i === page}
            className={`group rounded-full p-2 ${FOCUS_RING}`}
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-8 bg-brand-500"
                  : "w-1.5 bg-brand-200 group-hover:bg-brand-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}