"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#objectives", label: "Objectives" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-900 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link
            href="#top"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-full.png"
              alt="Afri-Collabs for Development"
              width={599}
              height={202}
              priority
              unoptimized
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-900 transition-colors hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 md:inline-block"
          >
            Get Involved
          </a>
        </div>
      </header>

      {/* Rendered outside <header> so its backdrop-blur doesn't turn into a
          containing block for these fixed-position elements. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-950/40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 flex w-100 max-w-[100%] flex-col bg-white p-6 shadow-xl md:hidden"
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
                  className="inline-flex items-center justify-center rounded-md p-2 text-brand-900"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-brand-900 hover:text-brand-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700"
              >
                Get Involved
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
