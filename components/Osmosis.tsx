"use client";

import { useEffect, useRef, useState } from "react";
import { BoltIcon } from "@/components/Icons";

export default function Osmosis() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 overflow-hidden bg-[#060606]"
    >
      {/* Giant word BG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="font-display text-[20vw] text-white/[0.012] select-none whitespace-nowrap">
          OSMOSIS OSMOSIS
        </div>
      </div>

      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-bool-orange/6 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Globe image */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/68cce1f7405e389390e50935/68f3e5ba9ee5b6187584409c_half%20globe.avif"
                alt="Globe"
                className="w-full h-auto max-w-md mx-auto object-contain opacity-70"
              />
              {/* Overlaid can */}
              <img
                src="https://cdn.prod.website-files.com/68cce1f7405e389390e50935/68f3e5ae30349f49cf0cedac_17-2%27.avif"
                alt="bool can"
                className="absolute bottom-0 right-8 w-48 h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="section-label mb-4">How it works</div>

            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.85] mb-4">
              OSMOSIS
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <span className="font-body text-xs text-white/30 italic">noun</span>
              <span className="font-body text-xs text-bool-orange">/oz-moh-sis/</span>
            </div>

            <p className="font-body text-sm text-white/30 mb-4 italic">
              It's not just a science word. It's our business model.
            </p>

            <div className="border-l-2 border-bool-orange pl-6 mb-8">
              <p className="font-body text-base text-white/70 leading-relaxed">
                Your cells have borders. While water waits in line, bool creates a{" "}
                <strong className="text-white">cellular vacuum</strong>. Using a
                precise{" "}
                <strong className="text-bool-orange">hypotonic ratio</strong>, our
                formula pulls water and minerals directly into your bloodstream —
                skipping digestion entirely.
              </p>
            </div>

            <div className="bg-bool-orange/8 border border-bool-orange/20 p-5 inline-block">
              <div className="flex items-center gap-4">
                <BoltIcon className="w-7 h-7 text-bool-orange" />
                <div>
                  <div className="font-display-normal text-sm tracking-widest text-bool-orange">
                    THINK:
                  </div>
                  <div className="font-body text-sm text-white/60">
                    An IV drip for your pocket.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
