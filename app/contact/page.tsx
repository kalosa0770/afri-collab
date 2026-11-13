import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Afri-Collabs for Development",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Contact standalone />
      </main>
      <Footer />
    </>
  );
}
