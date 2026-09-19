import { Check } from "lucide-react";
import { NightSection, glass } from "@/components/night";
import { TrialForm } from "@/components/trial-form";

const POINTS = [
  "Pełny dostęp do ponad 40 000 kanałów",
  "Test trwa 24 do 48 godzin",
  "Bez zobowiązań i bez płatności z góry",
  "Dane logowania wyślemy na Twój e-mail",
];

export function TrialSection() {
  return (
    <NightSection id="trial">
      <div className={`${glass} relative overflow-hidden`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-400/15 blur-[100px]"
        />
        <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Bez ryzyka</p>
            <h2 className="text-gradient mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Wypróbuj IPTV Polska za darmo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Sprawdź jakość obrazu, listę kanałów i działanie na swoim urządzeniu, zanim wybierzesz plan.
            </p>
            <ul className="mt-8 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-header">
                    <Check size={14} strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#08101f]/80 p-6 md:p-8">
            <TrialForm />
          </div>
        </div>
      </div>
    </NightSection>
  );
}
