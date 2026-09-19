import Image from "next/image";
import { CalendarClock, Clapperboard, Newspaper, Trophy, Tv, Users, type LucideIcon } from "lucide-react";
import { NightHeading, NightSection, glass, glassHover } from "@/components/night";

const CATEGORIES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Tv, title: "Telewizja na żywo", text: "Ponad 40 000 kanałów na żywo w jakości do 4K." },
  { icon: Clapperboard, title: "Filmy i seriale VOD", text: "Ponad 130 tys. tytułów dostępnych na żądanie." },
  { icon: Trophy, title: "Sport", text: "Transmisje i wydarzenia sportowe z całego świata." },
  { icon: Newspaper, title: "Wiadomości i kanały lokalne", text: "Kanały lokalne i wiadomości z Twojego regionu." },
  { icon: Users, title: "Rodzina i dzieci", text: "Subskrypcja rodzinna z kontrolą rodzicielską." },
  { icon: CalendarClock, title: "Przewodnik EPG", text: "Program telewizyjny pod ręką, cofanie i nagrywanie w Cloud DVR." },
];

export function Showcase() {
  return (
    <NightSection band>
      <NightHeading
        eyebrow="Co dostajesz"
        title="Wszystko, co lubisz oglądać, w jednym miejscu"
        sub="Kanały, filmy, seriale i sport na każdym urządzeniu."
      />

      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {CATEGORIES.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${glass} ${glassHover} p-6`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 text-blue-300 ring-1 ring-white/10">
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
            </div>
          ))}
        </div>

        <figure className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute inset-6 rounded-full bg-blue-500/25 blur-[80px]" />
          <Image
            src="/images/feature-devices.webp"
            alt="Podgląd biblioteki filmów i seriali IPTV Polska na różnych urządzeniach"
            width={969}
            height={579}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="relative h-auto w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
          />
          <figcaption className="relative mt-3 text-center text-xs text-slate-400">
            Podgląd biblioteki treści na różnych urządzeniach
          </figcaption>
        </figure>
      </div>
    </NightSection>
  );
}
