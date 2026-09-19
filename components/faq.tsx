import { Plus } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { NightHeading, NightSection, glass } from "@/components/night";
import { FAQ, WHATSAPP_SUPPORT } from "@/lib/site";

export function Faq() {
  const jsonLd = {
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <NightSection id="faq" band>
      <NightHeading eyebrow="FAQ" title="Najczęściej zadawane pytania dotyczące abonamentów IPTV" />
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ.map((item) => (
          <details key={item.q} className={`${glass} group open:border-blue-400/40 open:bg-white/[0.07]`}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-white">
              <span>{item.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                <Plus size={18} className="faq-icon transition-transform" aria-hidden="true" />
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-slate-400">Nie znalazłeś odpowiedzi? Napisz do nas, odpowiadamy 24/7.</p>
        <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-glow mt-5">
          Napisz na WhatsApp
        </a>
      </div>
      <JsonLd data={jsonLd} />
    </NightSection>
  );
}
