import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui";
import { abs, pageMetadata, webPageLd } from "@/lib/seo";
import { GUIDE, WHATSAPP_SUPPORT } from "@/lib/site";

const TITLE = "Przewodnik instalacji IPTV na każde urządzenie";
const DESCRIPTION =
  "Jak skonfigurować IPTV na Smart TV (Samsung, LG), Fire TV Stick, Androidzie, iOS, MAG, Windows i Enigma 2. Instrukcje krok po kroku.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/przewodnik-instalacji",
});

const howToLd = GUIDE.map((g) => {
  const steps = g.steps ?? g.groups?.flatMap((grp) => grp.steps.map((s) => `${grp.heading}: ${s}`)) ?? [];
  return {
    "@type": "HowTo",
    "@id": `${abs("/przewodnik-instalacji")}#${g.id}`,
    name: `Jak skonfigurować IPTV: ${g.title.replace(/^\d+\.\s*/, "")}`,
    inLanguage: "pl-PL",
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Krok ${i + 1}`,
      text,
    })),
  };
});

function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-1.5 pl-6 leading-relaxed marker:font-bold marker:text-brand">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  );
}

export default function InstallationGuidePage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Przewodnik instalacji", path: "/przewodnik-instalacji" }]} />
      <JsonLd data={[webPageLd({ path: "/przewodnik-instalacji", name: TITLE, description: DESCRIPTION }), ...howToLd]} />
      <section className="hero-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Jak skonfigurować IPTV na swoim urządzeniu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Wybierz swoje urządzenie i postępuj zgodnie z instrukcją. Potrzebujesz pomocy? Instalacja jest bezpłatna.
          </p>
        </div>
      </section>

      <Section tone="muted">
        <nav aria-label="Spis urządzeń" className="mb-10 flex flex-wrap justify-center gap-2">
          {GUIDE.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold hover:border-brand hover:text-brand"
            >
              {g.title.replace(/^\d+\.\s*/, "")}
            </a>
          ))}
        </nav>

        <div className="mx-auto max-w-3xl space-y-6">
          {GUIDE.map((g) => (
            <article key={g.id} id={g.id} className="rounded-2xl border border-border bg-white p-6 md:p-8">
              <h2 className="text-xl font-extrabold md:text-2xl">{g.title}</h2>
              {g.groups?.map((grp) => (
                <div key={grp.heading} className="mt-5">
                  <h3 className="mb-2 font-bold text-brand">{grp.heading}</h3>
                  <Steps steps={grp.steps} />
                </div>
              ))}
              {g.steps && (
                <div className="mt-4">
                  <Steps steps={g.steps} />
                </div>
              )}
              {g.note && (
                <p className="mt-4 rounded-lg bg-muted p-3 text-sm">
                  <strong>Uwaga:</strong> {g.note}
                </p>
              )}
              {g.link && (
                <a
                  href={g.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-brand underline"
                >
                  {g.link.label}
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold">Nie możesz sobie poradzić z konfiguracją?</p>
          <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            Skontaktuj się z pomocą techniczną
          </a>
        </div>
      </Section>
    </>
  );
}
