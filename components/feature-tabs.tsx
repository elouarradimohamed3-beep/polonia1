"use client";

import Image from "next/image";
import { Check, CloudDownload, History, MonitorSmartphone, Rewind, Server, Sparkles, Tv, type LucideIcon } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { NightHeading, NightSection, glass } from "@/components/night";
import { INFRASTRUCTURE } from "@/lib/site";

type Tab = { id: string; label: string; icon: LucideIcon; content: React.ReactNode };

const P = "leading-relaxed text-slate-300";

function Panel({
  title,
  image,
  imageAlt,
  w,
  h,
  children,
}: {
  title: string;
  image?: string;
  imageAlt?: string;
  w?: number;
  h?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{title}</h3>
        <div className="mt-4 space-y-4">{children}</div>
      </div>
      {image && (
        <div className="relative">
          <div aria-hidden="true" className="absolute inset-6 rounded-full bg-blue-500/25 blur-[70px]" />
          <Image
            src={image}
            alt={imageAlt ?? ""}
            width={w}
            height={h}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="relative h-auto w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
          />
        </div>
      )}
    </div>
  );
}

const CHIPS = ["Full HD", "4K Ultra HD", "HDR", "Dźwięk przestrzenny"];

const TABS: Tab[] = [
  {
    id: "quality",
    label: "Jakość 4K i HD",
    icon: Sparkles,
    content: (
      <Panel
        title="Oszałamiająca jakość przesyłania strumieniowego 4K i HD"
        image="/images/feature-quality.webp"
        imageAlt="IPTV Polska w jakości 4K i HD"
        w={768}
        h={537}
      >
        <ul className="flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <li key={c} className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-sm font-bold text-accent">
              {c}
            </li>
          ))}
        </ul>
        <p className={P}>
          Dzięki IPTV Polska możesz cieszyć się krystalicznie czystą rozdzielczością dzięki obsłudze Full HD, 4K i HDR.
          Niezależnie od tego, czy oglądasz sport, filmy, czy programy telewizyjne, nasze usługi IPTV zapewniają
          najwyższą jakość obrazu, gwarantując wciągające wrażenia. Co więcej, adaptacyjne przesyłanie strumieniowe
          gwarantuje płynne odtwarzanie, nawet przy zmiennej prędkości łącza internetowego.
        </p>
        <p className={P}>
          Najwyższej jakości usługa IPTV Polska nie tylko dostarcza treści, ale także zapewnia ich fantastyczny wygląd i
          dźwięk. Możesz liczyć na: kanały High Definition (HD) zapewniające ostry i wyraźny obraz, opcje Full HD i 4K
          Ultra HD z usług premium oraz dźwięk przestrzenny na kompatybilnych kanałach. Jakość streamingu nadal zależy
          jednak od szybkości łącza internetowego i mocy serwera dostawcy. Najlepsi dostawcy streamingu IPTV
          minimalizują kompresję, zapewniając płynne i pozbawione opóźnień wrażenia, nawet w godzinach szczytu.
        </p>
      </Panel>
    ),
  },
  {
    id: "devices",
    label: "Każde urządzenie",
    icon: MonitorSmartphone,
    content: (
      <Panel
        title="Transmisja strumieniowa na wielu urządzeniach i w podróży"
        image="/images/multi-device.webp"
        imageAlt="IPTV Polska działa na wszystkich urządzeniach"
        w={1024}
        h={304}
      >
        <p className={P}>
          Oglądaj swoje ulubione treści w naszej usłudze IPTV Polska na telewizorach Smart TV, telefonach z systemem
          Android/iOS, Fire Stick, MAG, Windows i innych. Dzięki temu nie jesteś ograniczony do jednego ekranu: ciesz
          się elastycznością niezależnie od tego, czy jesteś w domu, czy w podróży.
        </p>
        <p className={P}>
          Jedną z największych zalet IPTV Polska jest jej mobilność. Wystarczy połączenie internetowe, aby oglądać
          ulubione programy w dowolnym miejscu. Oglądaj bezproblemowo na swoim:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {["Smart TV w salonie", "Laptop biurowy", "Tablet w podróży", "Smartfon w kieszeni"].map((d) => (
            <li key={d} className="flex items-center gap-3 font-medium text-slate-100">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-header">
                <Check size={14} strokeWidth={3.5} aria-hidden="true" />
              </span>
              {d}
            </li>
          ))}
        </ul>
        <p className={P}>
          Co więcej, nasza platforma IPTV Polska umożliwia jednoczesne oglądanie programów wielu użytkownikom w tym
          samym gospodarstwie domowym. Dzięki temu rodziny mogą cieszyć się swoimi treściami bez żadnych konfliktów.
        </p>
      </Panel>
    ),
  },
  {
    id: "live",
    label: "Na żywo i VOD",
    icon: Tv,
    content: (
      <Panel
        title="Dostęp do telewizji na żywo i wideo na żądanie (VOD)"
        image="/images/feature-live-vod.webp"
        imageAlt="Telewizja na żywo i VOD w IPTV Polska"
        w={985}
        h={498}
      >
        <p className={P}>
          Uzyskaj natychmiastowy dostęp do tysięcy kanałów telewizyjnych na żywo z IPTV Polska i Europa – a także do
          ogromnej biblioteki treści VOD. Wszystko jest posegregowane, aby ułatwić i przyspieszyć przeglądanie.
        </p>
      </Panel>
    ),
  },
  {
    id: "dvr",
    label: "DVR i kontrola",
    icon: Rewind,
    content: (
      <Panel
        title="Interaktywność i DVR: Kontroluj, co oglądasz"
        image="/images/interactive.webp"
        imageAlt="IPTV Polska – DVR i interaktywność"
        w={500}
        h={500}
      >
        <p className={P}>
          Dzięki Modern IPTV Polska masz kontrolę nad swoimi nawykami oglądania. Nie jesteś już przywiązany do
          ramówki. Korzystaj z takich funkcji jak:
        </p>
        <ul className="space-y-3">
          {(
            [
              [Rewind, "Wstrzymuj, przewijaj do tyłu lub do przodu podczas transmisji telewizyjnych na żywo"],
              [History, "Oglądaj transmisje telewizyjne na żądanie, aby nigdy nie przegapić ulubionych programów"],
              [CloudDownload, "Cloud DVR umożliwia nagrywanie treści i późniejsze oglądanie"],
            ] as [LucideIcon, string][]
          ).map(([Icon, text]) => (
            <li key={text} className="flex items-start gap-3 text-slate-200">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="pt-1">{text}</span>
            </li>
          ))}
        </ul>
        <p className={P}>Taka elastyczność sprawia, że telewizja staje się w pełni spersonalizowanym centrum rozrywki.</p>
      </Panel>
    ),
  },
  {
    id: "tech",
    label: "Technologia",
    icon: Server,
    content: (
      <Panel title="Wgląd w naszą infrastrukturę IPTV Polska">
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
          {INFRASTRUCTURE.map((item) => (
            <div key={item.title} className={`${glass} p-5`}>
              <h4 className="font-bold text-accent">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </Panel>
    ),
  },
];

export function FeatureTabs() {
  const [selected, setSelected] = useState(TABS[0].id);
  const list = useRef<HTMLDivElement>(null);

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    else return;
    e.preventDefault();
    setSelected(TABS[next].id);
    list.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <NightSection band>
      <NightHeading eyebrow="Możliwości" title="Poznaj IPTV Polska bliżej" sub="Wybierz temat, który Cię interesuje." />

      <div
        ref={list}
        role="tablist"
        aria-label="Możliwości IPTV Polska"
        className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
      >
        {TABS.map((t, i) => {
          const active = t.id === selected;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`feature-tab-${t.id}`}
              aria-selected={active}
              aria-controls={`feature-panel-${t.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setSelected(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                active
                  ? "border-accent bg-accent text-header"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {t.label}
            </button>
          );
        })}
      </div>

      {TABS.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`feature-panel-${t.id}`}
          aria-labelledby={`feature-tab-${t.id}`}
          hidden={t.id !== selected}
        >
          {t.content}
        </div>
      ))}
    </NightSection>
  );
}
