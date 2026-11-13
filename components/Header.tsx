"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/key-focus-areas", label: "Key Focus Areas" },
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (open && event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-200 motion-reduce:transition-none ${
        scrolled || open
          ? "border-brand-100 shadow-[0_8px_30px_rgba(11,31,77,0.08)]"
          : "border-brand-100/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 sm:px-10 lg:px-12">
        <Link href="/" aria-label="Afri-Collabs for Development, home" className={`shrink-0 rounded-md ${FOCUS}`} onNavigate={() => setOpen(false)}>
          <Image
            src="/logo-full.png"
            alt=""
            width={599}
            height={202}
            priority
            unoptimized
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-3 py-2.5 text-sm font-semibold transition-colors motion-reduce:transition-none ${FOCUS} ${
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-brand-900/75 hover:bg-brand-50 hover:text-brand-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className={`group hidden min-h-11 shrink-0 items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-600 motion-reduce:transition-none lg:inline-flex ${FOCUS}`}>
          Partner with us
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={open ? "mobile-menu" : undefined}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-200 px-4 text-sm font-bold text-brand-950 transition-colors hover:bg-brand-50 motion-reduce:transition-none lg:hidden ${FOCUS}`}
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <MobileMenu key="mobile-menu" pathname={pathname} reduce={reduce} onNavigate={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileMenu({
  pathname,
  reduce,
  onNavigate,
}: {
  pathname: string;
  reduce: boolean | null;
  onNavigate: () => void;
}) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      id="mobile-menu"
      inert={!isPresent}
      aria-hidden={!isPresent}
      initial={reduce ? false : { opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, height: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
      className="absolute inset-x-0 top-full overflow-hidden bg-white shadow-[0_20px_35px_rgba(11,31,77,0.14)] lg:hidden"
    >
      <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-brand-100 px-6 pb-7 pt-6 sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Explore Afri-Collabs</p>
        <nav aria-label="Mobile" className="mt-4">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.25, delay: index * 0.035 }}
              >
                <Link
                  href={link.href}
                  onNavigate={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex min-h-14 items-center gap-4 border-b border-brand-100 py-3 ${FOCUS}`}
                >
                  <span className="text-xs font-bold tabular-nums text-brand-600">{String(index + 1).padStart(2, "0")}</span>
                  <span className={`font-display flex-1 text-lg font-bold ${isActive ? "text-brand-600" : "text-brand-950 group-hover:text-brand-600"}`}>{link.label}</span>
                  {isActive && <span className="text-xs font-semibold text-brand-600">Current</span>}
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <Link href="/contact" onNavigate={onNavigate} className={`group mt-6 flex min-h-12 items-center justify-between gap-4 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-brand-950 transition-colors hover:bg-accent-600 motion-reduce:transition-none ${FOCUS}`}>
          Partner with us
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
        <p className="mt-5 text-xs font-medium text-brand-900/65">Based in Lusaka, Zambia · A regional outlook</p>
      </div>
    </motion.div>
  );
}
