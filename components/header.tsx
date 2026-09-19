"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { NAV, WHATSAPP_TRIAL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-header text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="IPTV Polska – strona główna" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Menu główne" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={WHATSAPP_TRIAL} target="_blank" rel="noopener noreferrer" className="btn btn-accent !py-2">
            Spróbuj teraz
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu mobilne" className="border-t border-white/10 px-4 pb-4 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-white/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP_TRIAL} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-2 w-full">
            Spróbuj teraz
          </a>
        </nav>
      )}
    </header>
  );
}
