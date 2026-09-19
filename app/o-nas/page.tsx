import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui";
import { pageMetadata, webPageLd } from "@/lib/seo";
import { WHATSAPP_TRIAL } from "@/lib/site";

const TITLE = "O nas – dostawca IPTV od 2018 roku";
const DESCRIPTION =
  "IPTV Polska to dostawca abonamentów IPTV działający od 2018 roku. Subskrypcja rodzinna, pakiet sportowy, filmy i seriale, okres próbny i gwarancja zwrotu.";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/o-nas" });

const PROGRAMS = [
  { title: "Subskrypcja rodzinna", text: "Abonament na wiele urządzeń z kontrolą rodzicielską." },
  { title: "Pakiet sportowy", text: "Relacje sportowe i ekskluzywne wydarzenia z całego świata." },
  { title: "Filmy i seriale", text: "Tysiące filmów i seriali dostępnych na żądanie." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "O nas", path: "/o-nas" }]} />
      <JsonLd data={webPageLd({ path: "/o-nas", name: TITLE, description: DESCRIPTION, type: "AboutPage" })} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Niezawodny dostawca IPTV</h1>
          <p className="mt-5 text-lg leading-relaxed opacity-85">
            IPTV Polski to wiodący dostawca abonamentów IPTV, oferujący najwyższej jakości rozwiązania streamingowe na
            całym świecie. Działamy od 2018 roku, korzystamy z zaawansowanych technologii przesyłania strumieniowego i
            obsługujemy klientów na całym świecie.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <h2 className="mb-8 text-center text-3xl font-extrabold">Podróż do rozrywki premium</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-lg font-bold text-brand">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold">Nasza oferta</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed marker:text-brand">
            <li>Bezpłatny okres próbny: pełny dostęp do ponad 40 000 kanałów, 24-48 godzin, bez zobowiązań.</li>
            <li>7-dniowa gwarancja zwrotu pieniędzy.</li>
            <li>Plan 2-letni z ponad 22 000 kanałów.</li>
          </ul>
          <a href={WHATSAPP_TRIAL} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-8">
            Spróbuj teraz
          </a>
        </div>
      </Section>
    </>
  );
}
