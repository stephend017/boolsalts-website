"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import {
  BoltIcon, CpuChipIcon, SparklesIcon, GlobeEuropeAfricaIcon, TruckIcon,
  ComputerDesktopIcon, TrophyIcon, PaperAirplaneIcon, MoonIcon, LightBulbIcon, RocketLaunchIcon,
} from "@/components/Icons";
import Pill from "./Pill";

type IconKey = "laptop" | "dumbbell" | "plane" | "bottle" | "brain" | "muscle";

function UseCaseIcon({ name, className }: { name: string; className?: string }) {
  const map: Record<IconKey, React.ReactNode> = {
    laptop:   <ComputerDesktopIcon className={className} />,
    dumbbell: <TrophyIcon className={className} />,
    plane:    <PaperAirplaneIcon className={className} />,
    bottle:   <MoonIcon className={className} />,
    brain:    <LightBulbIcon className={className} />,
    muscle:   <RocketLaunchIcon className={className} />,
  };
  return <>{map[name as IconKey] ?? null}</>;
}

function StarRating({ count = 5, color }: { count?: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" style={{ color }} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductClient({ product, otherProduct }: { product: Product; otherProduct?: Product }) {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"ingredients" | "nutrition" | "science">("ingredients");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: product.bgColor }} />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${product.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 60% 50%, ${product.color}18 0%, transparent 65%)`,
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT: Product image */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-[80px] rounded-full scale-75"
                  style={{ background: `${product.color}30` }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-72 md:w-96 h-auto object-contain animate-float drop-shadow-2xl"
                />
              </div>
            </div>

            {/* RIGHT: Info */}
            <div className="order-1 md:order-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 font-body text-xs text-white/30">
                <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-white/60 transition-colors">Shop</Link>
                <span>/</span>
                <span className="text-white/50">{product.name}</span>
              </div>

              {/* Tag */}
              <Pill color={product.color}>{product.type}</Pill>

              <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.88] mb-3">
                {product.name}
              </h1>
              <p className="font-display-normal text-lg tracking-wide mb-4" style={{ color: product.color }}>
                {product.tagline}
              </p>

              {/* Stars + review count */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating color={product.color} />
                <span className="font-body text-xs text-white/40">
                  {product.reviews.length} reviews
                </span>
              </div>

              <p className="font-body text-sm text-white/50 leading-relaxed mb-6 max-w-md">
                {product.shortDesc}
              </p>

              {/* Use case pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.useCases.map((uc) => (
                  <Pill key={uc.label} color={product.color} icon={uc.icon}>{uc.label}</Pill>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-4xl">
                  {product.currency}{product.price.toFixed(2)}
                </span>
                <span className="font-body text-xs text-white/30">/ sachet</span>
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex items-center gap-3 mb-4">
                {/* Qty control */}
                <div className="flex items-center border border-white/15">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors font-display text-lg"
                  >
                    −
                  </button>
                  <span className="w-10 h-12 flex items-center justify-center font-display-normal text-lg">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors font-display text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Add to cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 h-12 font-display-normal text-lg tracking-[0.25em] transition-all duration-300 active:scale-95"
                  style={{
                    background: added ? "#22c55e" : product.color,
                    color: "#000",
                  }}
                >
                  {added ? "✓ ADDED TO CART" : `ADD TO CART — ${product.currency}${(product.price * qty).toFixed(2)}`}
                </button>
              </div>

              {/* Free shipping note */}
              <p className="font-body text-[11px] text-white/25 tracking-wide flex items-center gap-2">
                <TruckIcon className="w-3.5 h-3.5 opacity-50" />
                Free shipping on orders over €30 · Ships in 1–3 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BADGES BAR ── */}
      <div className="border-y border-white/5 bg-[#0A0A0A] py-5 overflow-hidden">
        <div className="marquee-content whitespace-nowrap">
          {[...product.badges, ...product.badges, ...product.badges, ...product.badges, ...product.badges].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8">
              <span className="font-display-normal text-[11px] tracking-[0.3em]" style={{ color: product.color }}>
                {b}
              </span>
              <span className="text-white/15">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── TABS: INGREDIENTS / NUTRITION / SCIENCE ── */}
      <section id="ingredient" className="py-20 md:py-28 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* Tab switcher */}
          <div className="flex gap-0 border border-white/8 mb-12 w-fit">
            {(["ingredients", "nutrition", "science"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-3 font-display-normal text-xs tracking-[0.2em] transition-all duration-200"
                style={
                  activeTab === tab
                    ? { background: product.color, color: "#000" }
                    : { background: "transparent", color: "rgba(255,255,255,0.35)" }
                }
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* INGREDIENTS TAB */}
          {activeTab === "ingredients" && (
            <div>
              <div className="section-label mb-6">Full Ingredient Breakdown</div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-10">
                NOTHING TO HIDE.
              </h2>
              <div className="space-y-3">
                {product.ingredients.map((ing, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_120px_1fr] gap-4 items-center p-4 border border-white/5 hover:border-white/10 bg-white/[0.02] transition-colors group"
                  >
                    <div>
                      <div className="font-display-normal text-sm tracking-wider group-hover:text-white transition-colors">
                        {ing.name}
                      </div>
                      <div className="font-body text-xs text-white/35 mt-0.5 hidden md:block">
                        {ing.purpose}
                      </div>
                    </div>
                    <div
                      className="font-display text-xl text-right md:text-center"
                      style={{ color: product.color }}
                    >
                      {ing.amount}
                    </div>
                    <div className="font-body text-xs text-white/35 hidden md:block">
                      {ing.purpose}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NUTRITION TAB */}
          {activeTab === "nutrition" && (
            <div>
              <div className="section-label mb-6">Nutrition Facts</div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-10">
                WHAT'S INSIDE.
              </h2>
              <div className="border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-3 bg-white/5 px-5 py-3">
                  <span className="font-display-normal text-[10px] tracking-widest text-white/40">
                    NUTRIENT
                  </span>
                  <span className="font-display-normal text-[10px] tracking-widest text-white/40 text-right">
                    PER 100ML
                  </span>
                  <span className="font-display-normal text-[10px] tracking-widest text-right" style={{ color: product.color }}>
                    PER SERVING
                  </span>
                </div>
                {product.nutritionFacts.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 px-5 py-3.5 border-t border-white/5 hover:bg-white/2 transition-colors"
                  >
                    <span className={`font-body text-sm ${row.label.startsWith("of which") ? "pl-4 text-white/40" : "text-white/70"}`}>
                      {row.label}
                    </span>
                    <span className="font-body text-sm text-white/40 text-right">
                      {row.per100ml}
                    </span>
                    <span className="font-display-normal text-sm text-right" style={{ color: product.color }}>
                      {row.perServing}
                    </span>
                  </div>
                ))}
                <div className="px-5 py-3 bg-white/2 border-t border-white/5">
                  <p className="font-body text-[10px] text-white/25">
                    Serving size: 235ml (1 sachet dissolved in water). Reference intake values based on a 2000 kcal diet.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SCIENCE TAB */}
          {activeTab === "science" && (
            <div>
              <div className="section-label mb-6">The Science</div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
                WHY IT WORKS.
              </h2>
              <p className="font-body text-sm text-white/50 leading-relaxed mb-10 max-w-2xl">
                {product.longDesc}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 border border-white/8 bg-white/2">
                  <BoltIcon className="w-9 h-9 mb-3" style={{ color: product.color }} />
                  <h3 className="font-display-normal text-sm tracking-widest mb-2">OSMOSIS</h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">
                    Our hypotonic formula creates a concentration gradient that pulls water and minerals directly into your cells — bypassing normal digestion.
                  </p>
                </div>
                <div className="p-6 border border-white/8 bg-white/2">
                  <CpuChipIcon className="w-9 h-9 mb-3" style={{ color: product.color }} />
                  <h3 className="font-display-normal text-sm tracking-widest mb-2">NOOTROPICS</h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">
                    L-Theanine & Glycine modulate neurotransmitters for calm focus, reduced anxiety, and better cognitive performance — without stimulants.
                  </p>
                </div>
                <div className="p-6 border border-white/8 bg-white/2">
                  <SparklesIcon className="w-9 h-9 mb-3" style={{ color: product.color }} />
                  <h3 className="font-display-normal text-sm tracking-widest mb-2">5-SALT FORMULA</h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">
                    Na, K, Ca, Mg, P — the complete electrolyte spectrum with a 3:1 sodium-to-potassium ratio optimised for rapid rehydration.
                  </p>
                </div>
                <div className="p-6 border border-white/8 bg-white/2">
                  <GlobeEuropeAfricaIcon className="w-9 h-9 mb-3" style={{ color: product.color }} />
                  <h3 className="font-display-normal text-sm tracking-widest mb-2">DUTCH ENGINEERING</h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">
                    Formulated with Dutch food scientists. Every ingredient dosed at clinically-relevant levels. Not the homeopathic amounts you'll find in other brands.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 md:py-28 bg-bool-black">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="section-label mb-4">Reviews</div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-12">
            REAL HUMANS.<br />REAL RESULTS.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {product.reviews.map((review, i) => (
              <div key={i} className="p-6 border border-white/5 bg-[#0D0D0D] flex flex-col gap-4">
                <StarRating color={product.color} />
                <p className="font-body text-sm text-white/60 leading-relaxed flex-1 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-9 h-9 rounded-full object-cover grayscale"
                  />
                  <div>
                    <div className="font-display-normal text-xs tracking-wider">{review.name}</div>
                    <div className="font-body text-[10px] text-white/30 italic">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-[#080808] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="section-label mb-4">FAQ</div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-12">
            QUESTIONS?<br />
            <span style={{ color: product.color }}>WE GOT YOU.</span>
          </h2>

          <div className="space-y-2">
            {product.faqs.map((faq, i) => (
              <div key={i} className="border border-white/8 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="font-display-normal text-sm tracking-wider pr-4">{faq.q}</span>
                  <span
                    className="text-xl flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: product.color,
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: openFaq === i ? "300px" : "0" }}
                >
                  <p className="px-6 pb-5 font-body text-sm text-white/50 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOU MIGHT ALSO LIKE ── */}
      {otherProduct && (
        <section className="py-20 md:py-28 bg-bool-black border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="section-label mb-4">Also in the Range</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight mb-10">
              YOU MIGHT ALSO LIKE
            </h2>

            <Link
              href={`/product/${otherProduct.slug}`}
              className="group flex flex-col md:flex-row gap-8 items-center p-8 border border-white/5 bg-[#0D0D0D] hover:border-white/12 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative w-40 flex-shrink-0">
                <div
                  className="absolute inset-0 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `${otherProduct.color}25` }}
                />
                <img
                  src={otherProduct.image}
                  alt={otherProduct.name}
                  className="relative z-10 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <span className="font-body text-[10px] text-white/30 uppercase tracking-widest block mb-2">
                  {otherProduct.type}
                </span>
                <h3 className="font-display text-3xl mb-1">{otherProduct.name}</h3>
                <p className="font-display-normal text-sm tracking-wide mb-3" style={{ color: otherProduct.color }}>
                  {otherProduct.tagline}
                </p>
                <p className="font-body text-xs text-white/40 max-w-md leading-relaxed">
                  {otherProduct.shortDesc}
                </p>
              </div>
              <div
                className="flex-shrink-0 font-display-normal text-xs tracking-[0.25em] px-8 py-3 transition-all duration-300"
                style={{ background: otherProduct.color, color: "#000" }}
              >
                VIEW →
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
