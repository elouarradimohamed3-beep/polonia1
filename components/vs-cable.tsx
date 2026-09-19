import { Check, Minus } from "lucide-react";
import { NightHeading, NightSection, glass } from "@/components/night";

const ROWS = [
  {
    label: "Umowa",
    iptv: "Bez zobowiązań. Możesz zrezygnować w dowolnym momencie.",
    cable: "Zwykle umowa na 12 do 24 miesięcy.",
  },
  {
    label: "Cena",
    iptv: "Od 15 € miesięcznie. Płacisz tylko za wybrany okres.",
    cable: "Zwykle stały abonament i dopłaty za pakiety dodatkowe.",
  },
  {
    label: "Instalacja",
    iptv: "Bez technika. Aplikacja i bezpłatny przewodnik krok po kroku.",
    cable: "Często wizyta technika i dekoder na miejscu.",
  },
  {
    label: "Urządzenia",
    iptv: "Smart TV, telefon, tablet, komputer, Fire TV Stick i MAG.",
    cable: "Zwykle telewizor z dekoderem.",
  },
  {
    label: "Poza domem",
    iptv: "Oglądasz wszędzie tam, gdzie masz internet.",
    cable: "Zwykle tylko w miejscu instalacji.",
  },
  {
    label: "Start",
    iptv: "Dane logowania e-mailem, zwykle w ciągu 5 minut do 6 godzin.",
    cable: "Zwykle kilka dni do terminu instalacji.",
  },
];

export function VsCable() {
  return (
    <NightSection>
      <NightHeading
        eyebrow="Dlaczego IPTV"
        title="IPTV Polska a telewizja kablowa i satelitarna"
        sub="Sprawdź, czym różni się telewizja przez internet od tradycyjnej."
      />

      <div className={`${glass} mx-auto max-w-5xl overflow-x-auto !bg-white/[0.03]`}>
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">Porównanie IPTV Polska z telewizją kablową i satelitarną</caption>
          <thead>
            <tr className="bg-white/[0.06] text-xs uppercase tracking-wider">
              <th scope="col" className="px-5 py-4 font-semibold text-slate-300">Kryterium</th>
              <th scope="col" className="px-5 py-4 font-semibold text-accent">IPTV Polska</th>
              <th scope="col" className="px-5 py-4 font-semibold text-slate-400">Kablówka i satelita</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.label} className="border-t border-white/10 align-top">
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-bold text-white">{r.label}</th>
                <td className="bg-amber-400/[0.05] px-5 py-4 text-slate-100">
                  <span className="flex items-start gap-2.5">
                    <Check size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                    {r.iptv}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-400">
                  <span className="flex items-start gap-2.5">
                    <Minus size={18} className="mt-0.5 shrink-0 text-slate-600" aria-hidden="true" />
                    {r.cable}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-slate-400">
        Porównanie ma charakter ogólny. Warunki tradycyjnych operatorów różnią się w zależności od oferty.
      </p>
    </NightSection>
  );
}
