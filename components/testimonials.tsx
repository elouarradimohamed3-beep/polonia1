import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { NightHeading, NightSection, glass } from "@/components/night";
import { REVIEW_BADGE, TESTIMONIALS } from "@/lib/reviews";
import { TESTIMONIAL_IMAGES, WHATSAPP_TRIAL } from "@/lib/site";

export function Testimonials() {
  return (
    <NightSection>
      <NightHeading eyebrow="Opinie" title="Nasi zadowoleni klienci" />

      {/* Verified rating badge: shown only when real data is set in lib/reviews.ts */}
      {REVIEW_BADGE && (
        <div className="-mt-6 mb-12 flex justify-center">
          <a
            href={REVIEW_BADGE.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${glass} inline-flex items-center gap-3 px-5 py-3 transition-colors hover:border-amber-400/40`}
          >
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </span>
            <span className="text-white">
              <strong>{REVIEW_BADGE.rating.toFixed(1)}</strong> / 5 · {REVIEW_BADGE.count} opinii w {REVIEW_BADGE.platform}
            </span>
          </a>
        </div>
      )}

      {/* Written testimonials: shown only when real entries exist in lib/reviews.ts */}
      {TESTIMONIALS.length > 0 && (
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name + t.place} className={`${glass} p-6`}>
              <Quote size={22} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-3 leading-relaxed text-slate-200">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm">
                <strong className="text-white">{t.name}</strong>
                <span className="block text-slate-400">
                  {t.place} · {t.plan}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
        {TESTIMONIAL_IMAGES.map((src, i) => (
          <div
            key={src}
            className="relative w-[70%] shrink-0 snap-center sm:w-[45%] md:w-auto"
            style={{ transform: `translateY(${i % 2 ? "1.25rem" : "0"})` }}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-4 rounded-full blur-[50px] ${i % 2 ? "bg-amber-400/20" : "bg-blue-500/25"}`}
            />
            <Image
              src={src}
              alt={`Opinia zadowolonego klienta IPTV Polska ${i + 1}`}
              width={569}
              height={1011}
              sizes="(min-width: 768px) 25vw, 70vw"
              className="relative h-auto w-full rounded-2xl border border-white/10 shadow-xl shadow-black/40"
            />
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <a href={WHATSAPP_TRIAL} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-glow">
          Spróbuj teraz
        </a>
      </div>
    </NightSection>
  );
}
