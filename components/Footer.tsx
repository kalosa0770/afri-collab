import Image from "next/image";
import { ArrowUp } from "lucide-react";

const EXPLORE = [
  { href: "#objectives", label: "Key Focus Areas" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS: { name: SocialName; href: string }[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/afri-collaborations-for-development/" },
  { name: "Facebook", href: "https://www.facebook.com/africollabs" },
  { name: "Instagram", href: "https://www.instagram.com/africollabs/" },
  { name: "X", href: "https://x.com/africollabs" },
  { name: "YouTube", href: "https://www.youtube.com/@africollabs" },
];

type SocialName = "LinkedIn" | "Facebook" | "Instagram" | "X" | "YouTube";

// Brand logo SVGs (24x24, single colour), drawn inline so nothing extra is installed
const ICON_PATHS: Record<SocialName, string> = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z",
  Facebook:
    "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z",
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  X: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  YouTube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

const LINK =
  "rounded text-[15px] text-brand-900/75 transition-colors hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.3fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt=""
                width={189}
                height={179}
                unoptimized
                className="h-11 w-auto"
              />
              <span className="font-display text-lg font-extrabold leading-tight text-brand-800">
                Afri-Collaborations
                <br />
                for Development
              </span>
            </div>
            <p className="font-display mt-5 text-[15px] font-bold text-brand-600">
              Connect. Collaborate. Drive Impact.
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-brand-900/75">
              A not-for-profit organization registered in Zambia and
              headquartered in Lusaka.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-sm font-bold text-brand-950">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={LINK}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {SOCIALS.some((x) => x.href) && (
            <div>
              <p className="font-display text-sm font-bold text-brand-950">
                Follow us
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {SOCIALS.filter((x) => x.href).map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-800 hover:bg-brand-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      <SocialIcon name={name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brand-100 pt-6 text-sm text-brand-900/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Afri-Collaborations for
            Development Limited. All rights reserved.
          </p>
          {/* If you use Freepik's free licence, add the credit here, e.g.
              <p>Images: Freepik</p> */}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded font-semibold text-brand-800 transition-colors hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            Back to top <ArrowUp aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}