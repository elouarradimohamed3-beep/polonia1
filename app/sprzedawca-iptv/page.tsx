import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Check, Section, SectionTitle } from "@/components/ui";
import { ORG_ID, abs, pageMetadata, webPageLd } from "@/lib/seo";
import { RESELLER_FEATURES, RESELLER_PACKAGES, WHATSAPP_RESELLER, whatsappLink } from "@/lib/site";

const TITLE = "Sprzedawca IPTV – program resellerski";
const DESCRIPTION =
  "Zostań resellerem IPTV: pakiety od 120 kredytów (290 €), własny panel white label, kredyty bez terminu ważności, szkolenie i wsparcie 24/7.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/sprzedawca-iptv",
});

const serviceLd = {
  "@type": "Service",
  "@id": `${abs("/sprzedawca-iptv")}#service`,
  name: "Program resellerski IPTV",
  serviceType: "Reseller IPTV",
  description: DESCRIPTION,
  provider: { "@id": ORG_ID },
  areaServed: ["PL", "EU"],
  image: abs("/images/reseller.webp"),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pakiety resellerskie IPTV",
    itemListElement: RESELLER_PACKAGES.map((p) => ({
      "@type": "Offer",
      name: `${p.credits} kredytów`,
      price: p.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: abs("/sprzedawca-iptv"),
    })),
  },
};

const STEPS = [
  { title: "Wybierz swój pakiet resellerski", text: "Dobierz pakiet kredytów odpowiedni do skali Twojej sprzedaży." },
  { title: "Otrzymaj szkolenie ekspertów", text: "Przeprowadzimy Cię przez wdrożenie i pokażemy, jak korzystać z panelu." },
  { title: "Zacznij generować dochód", text: "Uruchom sprzedaż i zarabiaj na abonamentach swoich klientów." },
];

export default function ResellerPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Sprzedawca IPTV", path: "/sprzedawca-iptv" }]} />
      <JsonLd
        data={[
          webPageLd({ path: "/sprzedawca-iptv", name: TITLE, description: DESCRIPTION, image: "/images/reseller.webp" }),
          serviceLd,
        ]}
      />
      <section className="hero-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Najlepszy reseller IPTV w Polsce i Europie
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Zostań resellerem IPTV już dziś! Osiągaj znaczne zyski dzięki naszemu kompleksowemu rozwiązaniu. Kanały
            premium, wysokie marże i brak problemów technicznych. Dołącz do odnoszących sukcesy resellerów IPTV w całym
            kraju!
          </p>
        </div>
      </section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-3">
          {RESELLER_PACKAGES.map((pkg) => (
            <article key={pkg.credits} className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
              <Image
                src="/images/reseller.webp"
                alt="Program resellerski IPTV"
                width={300}
                height={300}
                className="mx-auto h-36 w-36 object-contain"
              />
              <h2 className="mt-4 text-center text-xl font-extrabold text-brand">{pkg.credits} kredytów</h2>
              <p className="mt-1 text-center text-5xl font-extrabold">€{pkg.price}</p>
              <ul className="my-6 flex-1 space-y-2.5 text-sm">
                {RESELLER_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Cześć! Chcę kupić pakiet resellerski: ${pkg.credits} kredytów (€${pkg.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Kup teraz
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle>Dlaczego warto wybrać nasz program resellerski IPTV?</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-bold">Platforma White Label</h3>
            <p className="mt-2 opacity-80">
              Zbuduj swoją markę dzięki naszemu w pełni konfigurowalnemu panelowi sprzedawcy, zawierającemu Twoje logo,
              kolory i nazwę domeny.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="text-lg font-bold">Zautomatyzowane zarządzanie</h3>
            <p className="mt-2 opacity-80">
              Oszczędzaj czas dzięki naszemu kompleksowemu systemowi do fakturowania, zakładania kont i obsługi klienta.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionTitle>Jak działa nasz program resellerski IPTV</SectionTitle>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/reseller-diagram.webp"
            alt="Schemat działania programu resellerskiego IPTV"
            width={1024}
            height={1024}
            className="h-auto w-full max-w-md justify-self-center rounded-2xl"
          />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 opacity-80">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10 text-center">
          <a href={WHATSAPP_RESELLER} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            Zacznij teraz
          </a>
        </div>
      </Section>
    </>
  );
}
