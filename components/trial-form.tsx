"use client";

import { Loader2, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE, whatsappLink } from "@/lib/site";

const DEVICES = [
  "Smart TV Samsung",
  "Smart TV LG",
  "Android TV / Google TV",
  "Fire TV Stick",
  "Telefon lub tablet z Androidem",
  "iPhone lub iPad",
  "MAG",
  "Windows lub Mac",
  "Enigma 2 / Linux",
  "Inne",
];

type Status = "idle" | "sending" | "sent" | "whatsapp" | "error";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

export function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState(DEVICES[0]);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const waMessage = `Cześć! Chcę darmowy test IPTV Polska. Urządzenie: ${device}. E-mail: ${email}`;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, device, consent, website }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { delivered?: boolean };
      setStatus(data.delivered === false ? "whatsapp" : "sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center">
        <p className="text-xl font-bold text-white">Dziękujemy! Zgłoszenie przyjęte.</p>
        <p className="mt-2 text-slate-300">
          Wyślemy dane do testu na adres <strong className="text-white">{email}</strong>. Zwykle w ciągu 5 minut do 6
          godzin. Sprawdź także folder ze spamem.
        </p>
      </div>
    );
  }

  if (status === "whatsapp" || status === "error") {
    return (
      <div role="status" className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-8 text-center">
        <p className="text-xl font-bold text-white">
          {status === "error" ? "Nie udało się wysłać formularza." : "Dokończ zgłoszenie na WhatsApp."}
        </p>
        <p className="mt-2 text-slate-300">
          Napisz do nas bezpośrednio, a przygotujemy dla Ciebie darmowy test. Twoje dane są już wpisane w wiadomość.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent btn-glow mt-6"
        >
          <MessageCircle size={18} aria-hidden="true" /> Napisz na WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div>
        <label htmlFor="trial-email" className="mb-1.5 block text-sm font-semibold text-slate-200">
          Twój adres e-mail
        </label>
        <input
          id="trial-email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="jan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="trial-device" className="mb-1.5 block text-sm font-semibold text-slate-200">
          Na jakim urządzeniu będziesz oglądać?
        </label>
        <select
          id="trial-device"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          {DEVICES.map((d) => (
            <option key={d} value={d} className="bg-[#0b1426] text-white">
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Nie wypełniaj tego pola
          <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-400">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-amber-400"
        />
        <span>
          Zgadzam się na kontakt w sprawie darmowego testu. Administrator danych: {SITE.name}, {SITE.email}. Podany
          adres e-mail i typ urządzenia wykorzystamy wyłącznie do przygotowania testu i odpowiedzi na Twoje zgłoszenie.
          Zgodę możesz wycofać w każdej chwili, pisząc na ten adres.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-accent btn-glow w-full !py-4 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Wysyłanie...
          </>
        ) : (
          "Odbierz darmowy test"
        )}
      </button>
    </form>
  );
}
