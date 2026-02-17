"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "9/10", label: "bool users feel the difference in under 30 minutes." },
  { value: "94%", label: "said bool significantly improved next-day recovery." },
  { value: "3×", label: "more optimized Na-to-K ratio than the market average." },
  { value: "∞", label: "Developed with scientists. Perfected in the party scene." },
];

const marqueeItems = [
  "IMMUNITY BOOSTER",
  "TASTE-TEST WINNER",
  "CALMING AGENTS",
  "SILENCE HANGXIETY",
  "SLUMP BREAKER",
];

export default function BuiltDifferent() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-bool-orange overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px",
        }}
      />

      <div className="relative z-10 py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Logo + CTA */}
          <div>
            {/* bool logo in white box */}
            <div className="bg-white/15 inline-flex items-center justify-center w-20 h-20 mb-8">
              <span className="font-display text-4xl text-white">b</span>
            </div>

            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.85] text-white mb-8">
              BUILT<br />DIFFERENT
            </h2>

            <Link
              href="/shop"
              className="inline-block bg-white text-bool-orange font-display-normal text-sm tracking-[0.25em] px-10 py-4 hover:bg-bool-black hover:text-white transition-all duration-300"
            >
              BUY
            </Link>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="font-display text-4xl text-white/80 flex-shrink-0 w-16">
                  {stat.value}
                </span>
                <div className="border-l border-white/30 pl-5 pt-1">
                  <p className="font-body text-sm text-white/80 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee banner */}
      <div className="border-t border-white/15 py-4 overflow-hidden">
        <div className="marquee-content whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6">
                <span className="font-display-normal text-xs tracking-[0.3em] text-white/70">
                  {item}
                </span>
                <span className="text-white/30">◆</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
