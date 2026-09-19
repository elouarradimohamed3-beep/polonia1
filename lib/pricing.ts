import { CONNECTION_OPTIONS, PLAN_DEFS, PRICES, type Connections, type PlanId } from "@/lib/site";

export type PricedPlan = {
  id: PlanId;
  name: string;
  months: number | null;
  /** EUR, or null when the price is on request. */
  price: number | null;
};

/** Formats euro amounts the Polish way: "15 €", "10,67 €". */
export const eur = (n: number) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
  }).format(n);

export function getPlans(connections: Connections): PricedPlan[] {
  return PLAN_DEFS.map((def) => ({ ...def, price: PRICES[connections][def.id] }));
}

export function planMeta(plan: PricedPlan, connections: Connections) {
  const monthly = PRICES[connections]["1-miesiac"];
  const perMonth = plan.price != null && plan.months ? plan.price / plan.months : null;
  const saving =
    plan.price != null && monthly != null && plan.months && plan.months > 1
      ? Math.round((1 - plan.price / (monthly * plan.months)) * 100)
      : null;
  return { perMonth, saving };
}

/** The plan with the lowest price per month for a device count (a factual "best value" marker). */
export function cheapestPerMonthId(connections: Connections): PlanId | null {
  const ranked = getPlans(connections)
    .filter((p) => p.price != null && p.months)
    .map((p) => ({ id: p.id, v: (p.price as number) / (p.months as number) }))
    .sort((a, b) => a.v - b.v);
  return ranked[0]?.id ?? null;
}

/** Every published price, used for structured data. */
export const ALL_PRICES = CONNECTION_OPTIONS.flatMap((c) =>
  PLAN_DEFS.flatMap((def) => {
    const price = PRICES[c][def.id];
    return price == null ? [] : [{ connections: c, plan: def, price }];
  }),
);

/** Approximate number of days covered by a plan (used for the "per day" price). */
export function planDays(months: number | null) {
  if (!months) return 1;
  if (months === 12) return 365;
  if (months === 24) return 730;
  return months * 30;
}
