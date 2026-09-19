"use client";

import { useEffect, useState } from "react";

/** Mobile-only order bar. Appears after the hero, hides while pricing, trial or footer are on screen. */
export function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setBlocked(visible.size > 0);
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("#pricing, #trial, footer").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = pastHero && !blocked;

  return (
    <div
      id="sticky-cta"
      data-visible={show}
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#08101f]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <p className="text-sm leading-tight text-slate-300">
          od <strong className="text-lg text-white">15 €</strong>
          <span className="block text-xs text-slate-400">miesięcznie</span>
        </p>
        <div className="flex gap-2">
          <a href="#trial" className="btn btn-outline !px-4 !py-2.5">
            Test
          </a>
          <a href="#pricing" className="btn btn-accent btn-glow !px-5 !py-2.5">
            Zamów
          </a>
        </div>
      </div>
    </div>
  );
}
