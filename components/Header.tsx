"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [active, setActive] = useState<string>(pathname);
  const reduce = useReducedMotion();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const t = reduce ? { duration: 0 } : { duration: 0.28, ease: "easeOut" as const };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow duration-200 ${
          scrolled
            ? "border-brand-100 shadow-[0_2px_14px_rgba(11,47,143,0.08)]"
            : "border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-200 ${
            scrolled ? "py-2" : "py-3.5"
          }`}
        >
          <Link
            href="/"
            className={`flex items-center rounded-md ${FOCUS}`}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-full.png"
              alt="Afri-Collabs for Development"
              width={599}
              height={202}
              priority
              unoptimized
              className={`w-auto transition-[height] duration-200 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
              }`}
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-[15px] font-medium transition-colors ${FOCUS} ${
                    isActive
                      ? "text-brand-800"
                      : "text-brand-900/70 hover:text-brand-800"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`hidden rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-600 md:inline-block ${FOCUS}`}
            >
              Partner with us
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`inline-flex items-center justify-center rounded-md p-2 text-brand-900 md:hidden ${FOCUS}`}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={t}
              className="fixed inset-0 z-40 bg-brand-950/50 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={t}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(22rem,100%)] flex-col bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/logo-full.png"
                  alt="Afri-Collabs for Development"
                  width={599}
                  height={202}
                  unoptimized
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`inline-flex items-center justify-center rounded-md p-2 text-brand-900 ${FOCUS}`}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col divide-y divide-brand-100 border-y border-brand-100">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`py-4 text-lg font-semibold transition-colors ${FOCUS} ${
                      active === link.href
                        ? "text-brand-500"
                        : "text-brand-900 hover:text-brand-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`mt-auto rounded-full bg-accent-500 px-5 py-3 text-center text-base font-semibold text-brand-950 hover:bg-accent-600 ${FOCUS}`}
              >
                Partner with us
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}