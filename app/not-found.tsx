import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">Nie znaleziono strony</h1>
        <p className="mt-3 opacity-80">Strona, której szukasz, nie istnieje lub została przeniesiona. Skorzystaj z poniższych linków.</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="btn btn-primary">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
