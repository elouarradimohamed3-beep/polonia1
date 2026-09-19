import type { ReactNode } from "react";

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "muted" | "dark";
}) {
  const bg =
    tone === "dark" ? "hero-gradient text-white" : tone === "muted" ? "bg-muted" : "bg-background";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  sub,
  align = "center",
}: {
  children: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{children}</h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-base opacity-80">{sub}</p>}
    </div>
  );
}
