import {
  BadgeEuro,
  Clapperboard,
  CreditCard,
  Headset,
  MonitorPlay,
  MonitorSmartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { NightSection, glass, glassHover } from "@/components/night";

type Card = {
  icon: LucideIcon;
  term: string;
  value?: string;
  desc: string;
  span?: string;
};

// Answer-first facts (kept as visible text for search snippets and AI answers).
const CARDS: Card[] = [
  { icon: BadgeEuro, term: "Cena", value: "od 15 €", desc: "miesięcznie (plan 1-dniowy: 3 €)" },
  { icon: MonitorPlay, term: "Jakość", value: "4K", desc: "UHD / FHD / HD" },
  { icon: Clapperboard, term: "Treści", desc: "kanały na żywo, filmy i seriale VOD, EPG" },
  { icon: Zap, term: "Aktywacja", desc: "dane logowania e-mailem, zwykle w ciągu 5 minut do 6 godzin" },
  {
    icon: MonitorSmartphone,
    term: "Urządzenia",
    desc: "Smart TV, Fire TV Stick, Android, iOS, MAG, Windows, Enigma 2",
    span: "lg:col-span-2",
  },
  { icon: CreditCard, term: "Płatności", desc: "PayPal oraz karty Visa/Mastercard przez PayPal" },
  { icon: Headset, term: "Wsparcie", desc: "24/7 przez WhatsApp i e-mail" },
];

export function IntroSection() {
  return (
    <NightSection>
      <div className="grid gap-4 lg:grid-cols-4">
        {/* Definition */}
        <div className={`${glass} relative overflow-hidden p-8 md:p-10 lg:col-span-2 lg:row-span-2`}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[90px]"
          />
          <p className="eyebrow relative">Poznaj usługę</p>
          <h2 className="text-gradient relative mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Czym jest IPTV Polska?
          </h2>
          <p className="relative mt-6 text-lg leading-relaxed text-slate-300">
            <strong className="text-white">IPTV Polska</strong> to abonament telewizji internetowej (IPTV), który
            dostarcza kanały na żywo oraz filmy i seriale VOD przez internet, bez kabla i anteny satelitarnej.
            Oglądasz na Smart TV, telefonie, tablecie, komputerze, Fire TV Stick lub dekoderze MAG w jakości do 4K.
            Plany zaczynają się od <strong className="text-white">15 € miesięcznie</strong>, a dane logowania
            dostajesz e-mailem po zweryfikowaniu płatności.
          </p>
          <a href="#pricing" className="btn btn-primary btn-blue-glow relative mt-8">
            Zobacz cennik
          </a>
        </div>

        {/* Fact cards */}
        {CARDS.map(({ icon: Icon, term, value, desc, span }) => (
          <div key={term} className={`${glass} ${glassHover} flex flex-col justify-between gap-6 p-6 ${span ?? ""}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 text-blue-300 ring-1 ring-white/10">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{term}</p>
              {value && <p className="text-gold-gradient mt-1 text-4xl font-extrabold tracking-tight">{value}</p>}
              <p className={`leading-snug text-slate-300 ${value ? "mt-1 text-sm" : "mt-2"}`}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </NightSection>
  );
}
