import Image from "next/image";
import { UserRound } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const PEOPLE: { name: string; role: string; initials: string; image?: string }[] = [
  { name: "Anna Mate Siame", role: "Executive Director", initials: "A" },
  { name: "Charity Chizola", role: "Program Lead", initials: "C" },
  { name: "Kasapo Mwenya", role: "Finance Director", initials: "K" },
  { name: "Annie Jimu", role: "Program Coordinator Malawi", initials: "A" },
];

export function OurPeopleSection() {
  return (
    <section
      id="our-people"
      aria-labelledby="team-heading"
      className="scroll-mt-24 bg-brand-50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Meet the team
          </p>
          <h2
            id="team-heading"
            className="font-display mt-4 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl"
          >
            People making collaboration happen.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-brand-900/75">
            Get to know the people working together to strengthen development
            partnerships across Africa.
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PEOPLE.map(({ name, role, initials, image }, index) => (
            <li key={name}>
              <FadeIn delay={(index % 4) * 0.08} className="h-full">
                <article className="h-full overflow-hidden rounded-2xl bg-white ring-1 ring-brand-100">
                  <div
                    role="img"
                    aria-label={image ? `Portrait of ${name}` : `Portrait placeholder for ${name}`}
                    className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-50"
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden="true"
                          className="absolute -right-14 -top-14 h-52 w-52 rounded-full border-[24px] border-brand-100/70"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute -bottom-24 -left-12 h-60 w-60 rounded-full bg-brand-100/60"
                        />
                        <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border border-brand-200 bg-white/80 text-brand-600 shadow-sm">
                          <UserRound
                            aria-hidden="true"
                            className="h-14 w-14"
                            strokeWidth={1.2}
                          />
                          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]">
                            Photo soon
                          </span>
                        </div>
                      </>
                    )}
                    <span className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-950 text-lg font-bold text-white ring-4 ring-white/80">
                      {initials}
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="font-display text-xl font-bold text-brand-950">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-600">
                      {role}
                    </p>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
