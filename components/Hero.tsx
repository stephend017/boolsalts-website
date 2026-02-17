"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BeakerIcon } from "@/components/Icons";

const words = ["WORKDAYS", "WORKOUTS", "WEEKENDS"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bool-black via-[#0D0D0D] to-[#111008]" />

      {/* Orange accent light */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-bool-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-bool-orange/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="section-label mb-6">
                Hydration Salts for
              </div>

              {/* Cycling word */}
              <div className="overflow-hidden mb-2">
                <h1
                  className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] transition-all duration-300"
                  style={{
                    opacity: animating ? 0 : 1,
                    transform: animating ? "translateY(20px)" : "translateY(0)",
                  }}
                >
                  {words[currentWord]}
                </h1>
              </div>

              {/* Indicator dots */}
              <div className="flex gap-2 mb-10">
                {words.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentWord(i)}
                    className={`h-1 transition-all duration-300 ${
                      i === currentWord
                        ? "w-8 bg-bool-orange"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <h2 className="font-display text-[clamp(1.5rem,4vw,2.8rem)] leading-tight mb-6 text-white/90">
                THIS IS WHAT{" "}
                <span className="text-bool-orange">'I'M BACK'</span> FEELS LIKE
              </h2>

              <p className="font-body text-sm text-white/50 leading-relaxed max-w-md mb-3">
                Because brain fog, sore muscles and hangovers suck.
              </p>
              <p className="font-body text-xs text-white/30 leading-relaxed max-w-md mb-10">
                Engineered in the Netherlands. Stress-tested in NYC. bool combines
                clinical-strength hydration with natural cognitive enhancers
                (nootropics).
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/shop"
                  className="bg-bool-orange text-white font-display-normal text-sm tracking-[0.25em] px-10 py-4 hover:bg-orange-600 transition-all duration-200 hover:scale-105 active:scale-100 inline-block"
                >
                  BUY NOW
                </Link>
                <a
                  href="#science"
                  className="font-display-normal text-xs tracking-[0.2em] text-white/40 hover:text-bool-orange transition-colors border-b border-white/20 pb-1"
                >
                  THE SCIENCE →
                </a>
              </div>

              {/* Social proof bar */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/5">
                <div>
                  <div className="font-display text-2xl text-bool-orange">9/10</div>
                  <div className="font-body text-[10px] text-white/30 uppercase tracking-widest">
                    Feel difference in 30min
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="font-display text-2xl text-bool-orange">94%</div>
                  <div className="font-body text-[10px] text-white/30 uppercase tracking-widest">
                    Improved next-day recovery
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="font-display text-2xl text-bool-orange">3×</div>
                  <div className="font-body text-[10px] text-white/30 uppercase tracking-widest">
                    Na/K ratio vs market avg
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product can visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow behind product */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 bg-bool-orange/20 rounded-full blur-[80px]" />
                </div>

                {/* Product image */}
                <div className="relative z-10 flex items-center justify-center animate-float">
                  <img
                    src="https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579a_PassionfruitMango.png"
                    alt="bool Passionfruit Mango"
                    className="w-72 h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating tag */}
                <div className="absolute top-8 right-0 bg-bool-orange text-white px-4 py-2 text-xs font-display-normal tracking-widest rotate-2 shadow-lg">
                  ZERO SUGAR
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-16 left-0 bg-bool-black border border-white/10 px-4 py-3 shadow-xl">
                  <div className="text-[10px] text-white/40 font-body uppercase tracking-widest mb-1">
                    Developed with
                  </div>
                  <div className="font-display text-sm text-white tracking-wider flex items-center gap-2">
                    SCIENTISTS
                    <BeakerIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="font-body text-[10px] text-white/20 tracking-widest uppercase">
            Scroll
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
