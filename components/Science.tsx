"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ingredients = [
  {
    num: "00.",
    title: "5-SALT ELECTROLYTES",
    desc: "Na, K, Ca, Mg, P — the full clinical spectrum.",
    tag: "Base Formula",
    color: "text-white/60",
    border: "border-white/10",
  },
  {
    num: "01.",
    title: "NOOTROPICS",
    desc: "L-Theanine & Glycine for calm focus without the crash.",
    tag: "Brain Support",
    color: "text-bool-orange",
    border: "border-bool-orange/30",
  },
  {
    num: "02.",
    title: "RECOVERY AGENTS",
    desc: "DHM & vitamins for liver support and immune resilience.",
    tag: "Recovery",
    color: "text-bool-orange",
    border: "border-bool-orange/30",
  },
  {
    num: "03.",
    title: "PERFECT FLAVOR",
    desc: "Lightly carbonated, zero sugar, zero crash. Tastes like something you'd actually drink.",
    tag: "Experience",
    color: "text-bool-orange",
    border: "border-bool-orange/30",
  },
];

export default function Science() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ingredients.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="science"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-bool-orange/4 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Label */}
        <div className="section-label mb-4">The Formula</div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-6">
              ELECTROLYTES,{" "}
              <span className="text-stroke">UPGRADED.</span>
            </h2>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-sm mb-10">
              We studied 12 leading hydration brands. Then, we created the
              perfect formula.
            </p>

            {/* Product images side by side */}
            <div className="flex gap-4 items-end">
              <div className="relative flex-1">
                <img
                  src="https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579f_ElderflowerLime.png"
                  alt="Elderflower Lime"
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
              <div className="relative flex-1">
                <img
                  src="https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579a_PassionfruitMango.png"
                  alt="Passionfruit Mango"
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </div>

            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-3 font-display-normal text-xs tracking-[0.25em] text-white/40 hover:text-bool-orange transition-colors border-b border-white/10 pb-2"
            >
              VIEW FULL INGREDIENTS →
            </Link>
          </div>

          {/* Right: Ingredient steps */}
          <div className="space-y-3">
            <div className="font-display-normal text-[10px] tracking-[0.3em] text-white/30 mb-6">
              WE STARTED WITH:
            </div>

            {ingredients.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`group relative p-5 border transition-all duration-500 cursor-pointer ${
                  activeStep === i
                    ? `${item.border} bg-bool-orange/5`
                    : "border-white/5 bg-white/2 hover:border-white/10"
                }`}
              >
                {/* Active indicator */}
                {activeStep === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-bool-orange" />
                )}

                <div className="flex items-start gap-4">
                  <span
                    className={`font-display text-3xl transition-colors duration-300 ${
                      activeStep === i ? "text-bool-orange" : "text-white/15"
                    }`}
                  >
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3
                        className={`font-display-normal text-sm tracking-wider transition-colors duration-300 ${
                          activeStep === i ? item.color : "text-white/60"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="ingredient-pill">{item.tag}</span>
                    </div>
                    <p
                      className={`font-body text-xs leading-relaxed transition-all duration-500 ${
                        activeStep === i
                          ? "text-white/50 max-h-20"
                          : "text-white/20 max-h-0 overflow-hidden md:max-h-20 md:text-white/30"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
