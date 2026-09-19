import { ImageResponse } from "next/og";

export const alt = "IPTV Polska – Twoja przepustka do nieograniczonej rozrywki";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #07101f 0%, #0a1c3a 55%, #0f2a55 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="84" height="84" viewBox="0 0 52 52" style={{ marginRight: 24 }}>
            <defs>
              <linearGradient id="g" x1="2" y1="10" x2="42" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <rect x="2" y="10" width="40" height="40" rx="12" fill="url(#g)" />
            <path d="M17 21 L32 30 L17 39 Z" fill="#fff" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="40" cy="12" r="2.6" fill="#d9ac4f" />
            <path d="M40 6.4 A5.6 5.6 0 0 1 45.6 12" fill="none" stroke="#d9ac4f" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M40 2 A10 10 0 0 1 50 12" fill="none" stroke="#d9ac4f" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#ffffff", letterSpacing: 1 }}>
            IPTV <span style={{ color: "#d9ac4f", marginLeft: 14 }}>POLSKA</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 24 }}>
          Twoja przepustka do nieograniczonej rozrywki
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 36, color: "#b8c7e0" }}>
          40 000+ kanałów • VOD • 4K / FHD / HD • od 15 € / miesiąc
        </div>
      </div>
    ),
    size,
  );
}
