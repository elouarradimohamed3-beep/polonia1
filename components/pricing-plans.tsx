"use client";

import { Compass, MonitorSmartphone } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { cheapestPerMonthId, eur, getPlans, planDays, planMeta, type PricedPlan } from "@/lib/pricing";
import { CONNECTION_OPTIONS, PRICES, deviceLabel, whatsappLink, type Connections, type PlanId } from "@/lib/site";

function priceSubtitle(plan: PricedPlan, perMonth: number | null) {
  if (plan.price == null) return "Przygotujemy dla Ciebie ofertę";
  if (!plan.months || perMonth == null) return "Dostęp na 1 dzień";
  const perDay = `ok. ${eur(plan.price / planDays(plan.months))} dziennie`;
  if (plan.months === 1) return `Rozliczenie miesięczne · ${perDay}`;
  return `${eur(perMonth)} / miesiąc · ${perDay}`;
}

function PlanCard({
  plan,
  connections,
  recommended,
}: {
  plan: PricedPlan;
  connections: Connections;
  recommended: boolean;
}) {
  const { perMonth, saving } = planMeta(plan, connections);
  const featured = plan.id === cheapestPerMonthId(connections);
  const onRequest = plan.price == null;

  const message = onRequest
    ? `Cześć! Chcę zamówić plan IPTV Polska: ${plan.name}, ${deviceLabel(connections)}. Proszę o wycenę.`
    : `Cześć! Chcę zamówić plan IPTV Polska: ${plan.name}, ${deviceLabel(connections)} (€${plan.price}).`;

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border border-amber-400/60 bg-gradient-to-b from-amber-400/[0.12] to-white/[0.03] shadow-[0_0_70px_-18px_rgba(217,172,79,0.55)]"
          : "border border-white/10 bg-white/[0.04] hover:border-blue-400/40 hover:bg-white/[0.07]"
      } ${recommended ? "ring-2 ring-emerald-400/70" : ""}`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-header">
          Najniższa cena / miesiąc
        </span>
      )}
      {recommended && !featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-950">
          Polecany dla Ciebie
        </span>
      )}

      <div className="flex min-h-7 items-center justify-between gap-3">
        <h3 className={`text-sm font-bold uppercase tracking-[0.16em] ${featured ? "text-accent" : "text-blue-300"}`}>
          {plan.name}
        </h3>
        {saving ? (
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/30">
            −{saving}%
          </span>
        ) : null}
      </div>

      <p className="mt-7 flex min-h-[3.75rem] items-baseline gap-1.5">
        {onRequest ? (
          <span className="self-center text-2xl font-extrabold tracking-tight text-white">Cena na zapytanie</span>
        ) : (
          <>
            <span className="text-6xl font-extrabold leading-none tracking-tight text-white">{plan.price}</span>
            <span className="text-2xl font-bold text-accent">€</span>
          </>
        )}
      </p>
      <p className="mt-2 min-h-10 text-sm leading-snug text-slate-400">{priceSubtitle(plan, perMonth)}</p>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-6 w-full ${featured ? "btn-accent btn-glow" : "btn-primary btn-blue-glow"}`}
      >
        {onRequest ? "Zapytaj o cenę" : "Zamów teraz"}
      </a>
    </article>
  );
}

type Suggestion = { title: string; connections: Connections; plan: PlanId; text: (price: number, perMonth: number) => string };

const SUGGESTIONS: Suggestion[] = [
  {
    title: "Chcę sprawdzić usługę",
    connections: 1,
    plan: "1-dzien",
    text: (price) => `Najtańszy start: 1 dzień na jednym urządzeniu za ${eur(price)}.`,
  },
  {
    title: "Oglądam sam lub sama",
    connections: 1,
    plan: "1-rok",
    text: (price, perMonth) => `Rok oglądania za ${eur(price)}, czyli ${eur(perMonth)} miesięcznie.`,
  },
  {
    title: "Oglądamy całą rodziną",
    connections: 3,
    plan: "1-rok",
    text: (price, perMonth) => `3 urządzenia naraz. Rok za ${eur(price)}, czyli ${eur(perMonth)} miesięcznie.`,
  },
];

export function PricingPlans() {
  const [selected, setSelected] = useState<Connections>(1);
  const [recommended, setRecommended] = useState<PlanId | null>(null);
  const tablist = useRef<HTMLDivElement>(null);

  function choose(n: Connections) {
    setSelected(n);
    setRecommended(null);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % CONNECTION_OPTIONS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + CONNECTION_OPTIONS.length) % CONNECTION_OPTIONS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = CONNECTION_OPTIONS.length - 1;
    else return;
    e.preventDefault();
    choose(CONNECTION_OPTIONS[next]);
    tablist.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  function applySuggestion(s: Suggestion) {
    setSelected(s.connections);
    setRecommended(s.plan);
    document.getElementById("plan-cards")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Plan helper */}
      <div className="mb-12">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
          <Compass size={16} className="text-accent" aria-hidden="true" /> Który plan wybrać?
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {SUGGESTIONS.map((s) => {
            const price = PRICES[s.connections][s.plan] as number;
            const months = getPlans(s.connections).find((p) => p.id === s.plan)!.months as number;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => applySuggestion(s)}
                className="group flex h-full flex-col items-start justify-start rounded-xl border border-white/10 bg-white/[0.04] p-5 text-left transition-colors hover:border-emerald-400/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <span className="block font-bold text-white">{s.title}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-slate-400">{s.text(price, price / months)}</span>
                <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:underline">
                  Pokaż ten plan
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="plan-cards" className="mb-12 flex scroll-mt-28 flex-col items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Liczba urządzeń</p>
        <div
          ref={tablist}
          role="tablist"
          aria-label="Liczba urządzeń w abonamencie"
          className="flex max-w-full flex-wrap justify-center gap-1.5 rounded-3xl border border-white/10 bg-white/[0.04] p-1.5 sm:rounded-full"
        >
          {CONNECTION_OPTIONS.map((n, i) => {
            const active = n === selected;
            return (
              <button
                key={n}
                type="button"
                role="tab"
                id={`devices-tab-${n}`}
                aria-selected={active}
                aria-controls={`devices-panel-${n}`}
                tabIndex={active ? 0 : -1}
                onClick={() => choose(n)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                  active
                    ? "bg-accent text-header shadow-lg shadow-amber-500/20"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <MonitorSmartphone size={16} aria-hidden="true" />
                {deviceLabel(n)}
              </button>
            );
          })}
        </div>
      </div>

      {CONNECTION_OPTIONS.map((n) => (
        <div
          key={n}
          role="tabpanel"
          id={`devices-panel-${n}`}
          aria-labelledby={`devices-tab-${n}`}
          hidden={n !== selected}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {getPlans(n).map((plan) => (
            <PlanCard key={plan.id} plan={plan} connections={n} recommended={n === selected && plan.id === recommended} />
          ))}
        </div>
      ))}
    </>
  );
}
