import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Headline font, exposed as the `font-display` utility
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const description =
  "Afri Collaborations for Development strengthens collaboration, learning, and partnerships among development actors across Africa — connecting organisations, practitioners, governance experts, civil society, and youth leaders to advance inclusive governance and sustainable development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.africollabs.com"),
  title: "Afri Collabs for Development",
  description,
  openGraph: {
    title: "Afri Collabs for Development",
    description,
    url: "/",
    siteName: "Afri Collabs for Development",
    type: "website",
    images: [{ url: "/hero-photo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afri Collabs for Development",
    description,
    images: ["/hero-photo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}