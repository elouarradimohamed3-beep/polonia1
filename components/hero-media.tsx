"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Hero visual. Shows the static image; when NEXT_PUBLIC_DEMO_VIDEO_ID is set it
 * becomes a click-to-play YouTube video. The player loads only after the click,
 * so page speed is not affected.
 */
export function HeroMedia({ videoId }: { videoId?: string }) {
  const [playing, setPlaying] = useState(false);

  if (videoId && playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`}
          title="Jak działa IPTV Polska: krótki film"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src="/images/hero.webp"
        alt="IPTV Polska – telewizja internetowa na wielu urządzeniach"
        width={1400}
        height={812}
        priority
        quality={70}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
      />
      {videoId && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Obejrzyj krótki film o IPTV Polska"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-bold text-header shadow-2xl shadow-black/50 transition-transform hover:scale-105"
        >
          <Play size={20} fill="currentColor" aria-hidden="true" /> Obejrzyj film
        </button>
      )}
    </div>
  );
}
