import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/ui";
import { pageMetadata, webPageLd } from "@/lib/seo";
import { SITE, WHATSAPP_SUPPORT } from "@/lib/site";

const TITLE = "Skontaktuj się z nami – wsparcie IPTV 24/7";
const DESCRIPTION =
  "Wsparcie techniczne IPTV Polska dostępne 24/7: pomoc z połączeniem, konfiguracją kanałów i urządzeniami. Napisz na WhatsApp lub e-mail.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/skontaktuj-sie-z-nami",
});

export default function ContactPage() {
  return (
    <>
    <Breadcrumbs trail={[{ name: "Skontaktuj się z nami", path: "/skontaktuj-sie-z-nami" }]} />
    <JsonLd
      data={webPageLd({
        path: "/skontaktuj-sie-z-nami",
        name: TITLE,
        description: DESCRIPTION,
        type: "ContactPage",
        image: "/images/support.webp",
      })}
    />
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Wsparcie dostawcy usług IPTV dostępne 24/7
          </h1>
          <p className="mt-5 text-lg leading-relaxed opacity-85">
            Nasz zespół techniczny jest gotowy pomóc Ci z abonamentem IPTV. Oferujemy pomoc w rozwiązywaniu problemów z
            połączeniem, konfiguracją kanałów, zgodnością urządzeń i jakością streamingu, aby zapewnić Ci nieprzerwaną
            rozrywkę.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Napisz na WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn-accent">
              Wyślij e-mail
            </a>
          </div>
          <dl className="mt-8 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="font-bold">E-mail:</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-brand underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold">WhatsApp:</dt>
              <dd>{SITE.phoneDisplay}</dd>
            </div>
          </dl>
        </div>
        <Image
          src="/images/support.webp"
          alt="Wsparcie techniczne IPTV Polska 24/7"
          width={800}
          height={800}
          className="h-auto w-full max-w-md justify-self-center rounded-2xl"
        />
      </div>
    </Section>
    </>
  );
}
