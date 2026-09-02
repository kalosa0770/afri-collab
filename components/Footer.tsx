import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Afri-Collabs for Development"
            width={189}
            height={179}
            unoptimized
            className="h-9 w-auto"
          />
          <span className="text-sm font-semibold text-brand-950">
            Afri-Collabs for Development
          </span>
        </div>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Afri-Collaborations for Development. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
