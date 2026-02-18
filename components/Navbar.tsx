"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CubeTransparentIcon } from "@/components/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bool-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-4xl text-bool-white tracking-wide">
              bool
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "SHOP", href: "/shop" },
              { label: "SCIENCE", href: "/#science" },
              // TODO NOT Implemented
              { label: "ABOUT", href: "/about" },
              // TODO NOT Implemented
              { label: "FAQ", href: "/faq" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="animated-underline hover:italic font-display-normal text-lg tracking-[0.2em] text-bool-white/80 hover:text-bool-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 font-display-normal text-lg tracking-[0.2em] text-bool-white/80 hover:text-bool-white transition-colors"
          >
            <span>CART</span>
            <span className="bg-bool-orange text-white text-lg flex text-center pl-[12px] pr-[9px] rounded-full font-bold ">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100] ">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-bool-dark-gray border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-display text-xl tracking-widest">YOUR CART</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-white/50 hover:text-white text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
              <div className="mb-4 opacity-20">
                <CubeTransparentIcon className="w-16 h-16 text-white" />
              </div>
              <p className="font-display text-xl text-white/40 tracking-widest mb-6">
                YOUR CART IS EMPTY
              </p>
              <p className="font-body text-sm text-white/30 mb-8">
                Let's change that.
              </p>
              <Link
                href="/shop"
                onClick={() => setCartOpen(false)}
                className="bg-bool-orange text-white font-display-normal text-sm tracking-[0.2em] px-8 py-3 hover:bg-orange-600 transition-colors"
              >
                SHOP OUR PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
