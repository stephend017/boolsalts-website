"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Elderflower Lime",
    slug: "elderflower-lime",
    type: "Energy | Glucose-powered",
    tagline: "2PM Slump Breaker & Focus Booster",
    desc: "Hydration is speed. We use glucose to force-feed electrolytes into your cells. A sharp, botanical lift that hits faster than water alone. No caffeine jitters — just pure, clean flow state.",
    badges: ["Rapid Uptake", "45 Cals", "Laser Focus"],
    color: "#7FD16E",
    gradient: "from-[#1a2e1a] to-[#0a1a0a]",
    image: "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579f_ElderflowerLime.png",
    bgImage: "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698f2ffad913bbf267d20985_product%20hover%20bg%20-%20lime.png",
    tag: "WORKDAYS / WORKOUTS",
  },
  {
    name: "Passionfruit Mango",
    slug: "passionfruit-mango",
    type: "Recovery | Sugar-free",
    tagline: "No More Hangovers & Brain Fog",
    desc: "Don't let last night ruin today. A clinical stack of electrolytes, liver-aiding DHM and nootropic blend to combat hangovers, silence hangxiety and rehydrate you instantly. Zero sugar, zero regret.",
    badges: ["Nootropics", "0 Cal", "Hangover Support"],
    color: "#FF7B2C",
    gradient: "from-[#2a1a0a] to-[#1a0a00]",
    image: "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579a_PassionfruitMango.png",
    bgImage: "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698f2fc4331ff3b1bd484467_product%20bg%20hover-mango.png",
    tag: "WEEKENDS / RECOVERY",
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-28 md:py-40 bg-bool-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bool-orange/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="section-label mb-4">The Range</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9]">
              PICK YOUR <br />
              <span className="text-bool-orange">FUEL</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="mt-4 md:mt-0 animated-underline font-display-normal text-xs tracking-[0.25em] text-white/40 hover:text-bool-orange transition-colors"
          >
            SEE ALL PRODUCTS →
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
