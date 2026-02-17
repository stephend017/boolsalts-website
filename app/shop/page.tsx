import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Shop | bool Hydration Salts",
  description: "Choose your fuel. Clinical-strength hydration with nootropics.",
};

export default function ShopPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-bool-black pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="py-16 border-b border-white/5 mb-16">
            <div className="section-label mb-4">The Range</div>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">
              PICK YOUR{" "}
              <span className="text-bool-orange">FUEL</span>
            </h1>
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
      </div>
      <Footer />
    </main>
  );
}
