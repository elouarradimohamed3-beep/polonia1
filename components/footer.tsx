import Link from "next/link";
import { Logo } from "@/components/logo";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-header text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="IPTV Polska – strona główna">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Twoja przepustka do nieograniczonej rozrywki. Subskrypcje od 15 € miesięcznie.
          </p>
        </div>
        <nav aria-label="Stopka">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Informacje</h2>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Kontakt</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li>WhatsApp: {SITE.phoneDisplay}</li>
            <li>Wsparcie 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} IPTV Polska. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
