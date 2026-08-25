import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export function CountUp({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center flex flex-col items-center justify-center"
          : "max-w-3xl text-left"
      }
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase ring-1 shadow-sm ${
          dark ? "bg-gold/20 text-gold ring-gold/40" : "bg-primary/10 text-primary ring-primary/20"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-[1.12] ${
          dark ? "text-white" : "text-foreground"
        } ${align === "center" ? "text-center" : "text-left"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed font-medium max-w-2xl ${
            dark ? "text-zinc-300" : "text-muted-foreground"
          } ${align === "center" ? "mx-auto text-center" : "mr-auto ml-0 text-left"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
