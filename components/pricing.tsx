import { Check, Headset, RotateCcw, ShieldCheck, Wallet, Zap } from "lucide-react";
import { NightHeading, NightSection, glass } from "@/components/night";
import { PricingPlans } from "@/components/pricing-plans";
import { PLAN_FEATURES, WHATSAPP_SUPPORT } from "@/lib/site";

const TRUST = [
  { icon: Zap, text: "Natychmiastowa aktywacja" },
  { icon: RotateCcw, text: "Zwrot w ciągu 7 dni" },
  { icon: Headset, text: "Wsparcie 24/7" },
  { icon: Wallet, text: "PayPal · Visa · Mastercard" },
];

export function Pricing() {
  return (
    <NightSection id="pricing" band>
      <NightHeading
        eyebrow="Cennik"
        title="Wybierz swój plan IPTV Polska"
        sub="Wybierz najlepszy plan abonamentu IPTV Polska."
      />

      <PricingPlans />

      {/* Trust row */}
      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {TRUST.map(({ icon: Icon, text }) => (
          <li key={text} className={`${glass} flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-200`}>
            <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>

      {/* Features shared by every plan */}
      <div className={`${glass} mt-6 p-8 md:p-10`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">W cenie każdego planu</p>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
              Wszystko, czego potrzebujesz do oglądania
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Każdy abonament zawiera pełny dostęp do naszej oferty. Różni się okresem trwania i liczbą urządzeń.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:col-span-8">
            {PLAN_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[0.95rem] text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30">
                  <Check size={13} strokeWidth={3.5} aria-hidden="true" />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Multi-device note */}
      <div className="mt-6 flex flex-col items-start gap-5 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-accent ring-1 ring-amber-400/30">
            <ShieldCheck size={24} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-slate-300">
            <strong className="text-white">Uwaga:</strong> Aby uzyskać dostęp na więcej niż pięciu urządzeniach,
            skontaktuj się z naszym zespołem wsparcia. Oferujemy elastyczne plany obejmujące wiele urządzeń, dopasowane
            do Twoich indywidualnych potrzeb.
          </p>
        </div>
        <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-glow shrink-0">
          Skontaktuj się z pomocą techniczną już teraz
        </a>
      </div>
    </NightSection>
  );
}
