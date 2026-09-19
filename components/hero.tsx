import Image from "next/image";
import { Headset, RotateCcw, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { HeroMedia } from "@/components/hero-media";
import { glass } from "@/components/night";

const TRUST = [
  { icon: Zap, text: "Aktywacja po płatności" },
  { icon: RotateCcw, text: "Zwrot w ciągu 7 dni" },
  { icon: Headset, text: "Wsparcie 24/7" },
];

const STATS = [
  { value: "40 000+", label: "kanałów premium na żywo" },
  { value: "130 tys.", label: "filmów i seriali VOD" },
  { value: "4K", label: "jakość do Ultra HD" },
  { value: "24/7", label: "wsparcie techniczne" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: glows + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[130px]" />
        <div className="absolute -right-40 top-32 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-[130px]" />
        <div className="absolute -left-40 top-64 h-[26rem] w-[26rem] rounded-full bg-indigo-500/15 blur-[130px]" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-16 md:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Natychmiastowa aktywacja · Wsparcie 24/7
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.25rem] xl:text-[3.5rem]">
            IPTV Polska
            <span className="text-gold-gradient mt-2 block">Twoja przepustka do Nieograniczonej Rozrywki</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Subskrypcje zaczynają się już od <strong className="text-white">15 € miesięcznie</strong>. Możesz
            zrezygnować w dowolnym momencie.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#pricing" className="btn btn-accent btn-glow !px-8 !py-4">
              Subskrybuj teraz
            </a>
            <a href="#trial" className="btn btn-outline !px-8 !py-4">
              Wypróbuj za darmo
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            {TRUST.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-accent" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <div aria-hidden="true" className="absolute inset-6 rounded-full bg-blue-500/30 blur-[90px]" />
          <HeroMedia videoId={process.env.NEXT_PUBLIC_DEMO_VIDEO_ID} />
          <span
            className={`${glass} absolute -left-2 top-4 flex items-center gap-2 !bg-[#0b1426]/80 px-4 py-2 text-sm font-semibold text-white shadow-xl md:-left-6`}
          >
            <Sparkles size={16} className="text-accent" aria-hidden="true" /> 4K Ultra HD
          </span>
          <span
            className={`${glass} absolute -right-2 bottom-4 flex items-center gap-2 !bg-[#0b1426]/80 px-4 py-2 text-sm font-semibold text-white shadow-xl md:-right-4`}
          >
            <ShieldCheck size={16} className="text-emerald-400" aria-hidden="true" /> Anti-Freeze™ 9.8
          </span>
        </div>
      </div>

      {/* Devices + stats */}
      <div className="relative mx-auto max-w-6xl px-4 pb-6">
        <div className={`${glass} flex flex-col items-center gap-4 px-6 py-5 md:flex-row md:justify-between`}>
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Wsparcie dla wszystkich urządzeń:
          </p>
          <Image
            src="/images/devices-strip.webp"
            alt="Obsługiwane urządzenia: Smart TV, Android, iOS, Fire Stick, MAG, Windows"
            width={946}
            height={142}
            className="h-auto w-full max-w-md"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#08101f] px-6 py-6 text-center">
              <p className="text-gold-gradient text-3xl font-extrabold tracking-tight md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
