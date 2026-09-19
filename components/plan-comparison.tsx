import { NightHeading, NightSection, glass } from "@/components/night";
import { cheapestPerMonthId, eur, getPlans } from "@/lib/pricing";
import { CONNECTION_OPTIONS, PLAN_DEFS, PRICES, deviceLabel } from "@/lib/site";

export function PlanComparison() {
  const bestId = cheapestPerMonthId(1);

  return (
    <NightSection>
      <NightHeading
        eyebrow="Porównanie"
        title="Porównanie planów IPTV Polska"
        sub="Ceny w euro (EUR) w zależności od liczby urządzeń. Im dłuższy abonament, tym niższy koszt za miesiąc."
      />

      <div className={`${glass} mx-auto max-w-5xl overflow-x-auto !bg-white/[0.03]`}>
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">Porównanie cen abonamentów IPTV Polska według okresu i liczby urządzeń</caption>
          <thead>
            <tr className="bg-white/[0.06] text-xs uppercase tracking-wider text-slate-300">
              <th scope="col" className="px-5 py-4 font-semibold">Plan</th>
              {CONNECTION_OPTIONS.map((n) => (
                <th key={n} scope="col" className="px-5 py-4 text-right font-semibold">
                  {deviceLabel(n)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAN_DEFS.map((def) => {
              const best = def.id === bestId;
              return (
                <tr
                  key={def.id}
                  className={`border-t border-white/10 transition-colors hover:bg-white/[0.05] ${
                    best ? "bg-amber-400/[0.08]" : ""
                  }`}
                >
                  <th scope="row" className="whitespace-nowrap px-5 py-4 font-bold text-white">
                    {def.name}
                    {best && (
                      <span className="ml-2 rounded-full bg-accent px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-wide text-header">
                        Najlepsza cena
                      </span>
                    )}
                  </th>
                  {CONNECTION_OPTIONS.map((n) => {
                    const price = PRICES[n][def.id];
                    const plan = getPlans(n).find((p) => p.id === def.id)!;
                    const perMonth = price != null && plan.months && plan.months > 1 ? price / plan.months : null;
                    return (
                      <td key={n} className="px-5 py-4 text-right tabular-nums">
                        {price != null ? (
                          <>
                            <span className="font-semibold text-white">{eur(price)}</span>
                            {perMonth != null && (
                              <span className="mt-0.5 block text-xs text-slate-400">{eur(perMonth)} / mies.</span>
                            )}
                          </>
                        ) : (
                          <span className="text-sm text-slate-500">na zapytanie</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </NightSection>
  );
}
