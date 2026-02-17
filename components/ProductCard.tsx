"use client";


import Link from "next/link";
import { useState } from "react";
import Pill from "./Pill";

export default function ProductCard({ product, i }: { product: any; i: number }) {
    const [hovered, setHovered] = useState<number | null>(null);
    return (<Link
              key={i}
              href={`/product/${product.slug}`}
              className="product-card group relative overflow-hidden bg-[#0D0D0D] border border-white/5 hover:border-white/10 transition-all duration-500"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${product.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Color glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 100%, ${product.color}15 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 p-8 md:p-10">
                {/* Top labels */}
                <div className="flex items-center justify-between mb-6">
                  {/* <span className="font-body text-[12px] text-white/30 uppercase tracking-widest">
                    {product.type}
                  </span> */}
                  {/* <Pill color={product.color}>{product.tag}</Pill> */}
                </div>

                {/* Product image */}
                <div className="flex justify-center mb-6 h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-3 h-3 fill-current"
                      style={{ color: product.color }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Name */}
                <h3 className="font-display text-5xl mb-1">{product.name}</h3>
                <p
                  className="font-display-normal text-lg tracking-wider mb-4"
                  style={{ color: product.color }}
                >
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-xs text-white/40 leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.badges.map((badge: any) => (
                    <Pill key={badge} color={product.color}>{badge}</Pill>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-3 font-display-normal text-lg tracking-[0.25em] px-8 py-3 transition-all duration-300 text-black"
                  style={{
                    background: hovered === i ? product.color : "rgba(255,255,255,0.1)",
                    color: hovered === i ? "#000" : "#fff",
                  }}
                >
                  BUY NOW →
                </div>
              </div>
            </Link>)
}