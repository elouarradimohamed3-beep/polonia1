import { Gem, MonitorSmartphone, Server, Tv, Wrench, Zap, type LucideIcon } from "lucide-react";
import { NightHeading, NightSection, glass, glassHover } from "@/components/night";
import { WHY_US } from "@/lib/site";

// One icon and one grid span per item in WHY_US (same order) - a bento layout.
const ICONS: LucideIcon[] = [Zap, MonitorSmartphone, Tv, Server, Wrench, Gem];
const SPANS = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export function WhyUs() {
  return (
    <NightSection>
      <NightHeading
        eyebrow="Zalety"
        title="Dlaczego warto nas wybrać?"
        sub="Nie masz ochoty na buforowanie i zamrażanie?"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {WHY_US.map((item, i) => {
          const Icon = ICONS[i] ?? Zap;
          const wide = i === WHY_US.length - 1;
          return (
            <div
              key={item.title}
              className={`${glass} ${glassHover} group relative overflow-hidden p-7 ${SPANS[i] ?? ""} ${
                wide ? "sm:col-span-2 lg:flex lg:items-center lg:gap-8" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/0 blur-[70px] transition-colors duration-500 group-hover:bg-blue-500/25"
              />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 text-white shadow-lg shadow-blue-900/40 ring-1 ring-white/20">
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className={wide ? "mt-5 lg:mt-0" : ""}>
                <h3 className={`relative font-bold leading-snug text-white ${wide ? "text-xl" : "mt-5 text-lg"}`}>
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-blue-700/40 via-blue-900/30 to-amber-500/20 p-8 md:p-12">
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Gotowy na nieograniczoną rozrywkę?
            </h3>
            <p className="mt-2 text-slate-300">Wybierz plan i zacznij oglądać jeszcze dziś.</p>
          </div>
          <a href="#pricing" className="btn btn-accent btn-glow shrink-0 !px-8 !py-4">
            Subskrybuj teraz
          </a>
        </div>
      </div>
    </NightSection>
  );
}
