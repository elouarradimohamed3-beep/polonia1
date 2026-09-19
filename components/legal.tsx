import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui";
import { webPageLd } from "@/lib/seo";

export type LegalSection = { title: string; body: ReactNode };

export function LegalPage({
  title,
  path,
  description,
  updated,
  intro,
  sections,
}: {
  title: string;
  path: string;
  description: string;
  updated?: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
    <Breadcrumbs trail={[{ name: title, path }]} />
    <JsonLd data={webPageLd({ path, name: title, description })} />
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
        {updated && <p className="mt-2 text-sm opacity-70">Ostatnia aktualizacja: {updated}</p>}
        {intro && <div className="mt-6 leading-relaxed opacity-90">{intro}</div>}
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed opacity-90 [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Section>
    </>
  );
}
