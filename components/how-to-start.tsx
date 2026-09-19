import { CreditCard, Download, ListChecks, Mail, type LucideIcon } from "lucide-react";
import { NightHeading, NightSection, glass } from "@/components/night";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ListChecks, title: "Wybierz plan", text: "Wybierz okres abonamentu w cenniku, od 1 dnia do 2 lat." },
  { icon: CreditCard, title: "Zapłać", text: "Zapłać przez PayPal lub kartą Visa/Mastercard albo napisz do nas na WhatsApp." },
  {
    icon: Mail,
    title: "Odbierz dane logowania",
    text: "Po weryfikacji płatności dostaniesz e-mail z danymi, zwykle w ciągu 5 minut do 6 godzin.",
  },
  { icon: Download, title: "Zainstaluj aplikację", text: "Skonfiguruj usługę według przewodnika instalacji dla swojego urządzenia." },
];

export function HowToStart() {
  return (
    <NightSection band>
      <NightHeading eyebrow="Start" title="Jak zacząć oglądać IPTV Polska w 4 krokach" />

      <ol className="relative grid gap-5 md:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className={`${glass} relative p-7`}>
            <span
              aria-hidden="true"
              className="absolute right-5 top-3 select-none text-7xl font-black leading-none text-white/[0.05]"
            >
              {i + 1}
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-header shadow-lg shadow-amber-500/20">
              <Icon size={26} strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-accent">Krok {i + 1}</p>
            <h3 className="mt-1.5 text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
            {i < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-[1.15rem] top-1/2 z-10 hidden h-px w-4 bg-gradient-to-r from-accent/60 to-transparent md:block"
              />
            )}
          </li>
        ))}
      </ol>
    </NightSection>
  );
}
