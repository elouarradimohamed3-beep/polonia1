import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a1628" }}>
        <svg width="140" height="140" viewBox="0 0 52 52">
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
      </div>
    ),
    size,
  );
}
