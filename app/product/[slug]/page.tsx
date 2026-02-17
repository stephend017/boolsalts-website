import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductClient from "@/components/ProductClient";
import { products, getProduct } from "@/lib/products";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product Not Found | bool" };
  return {
    title: `${product.name} | bool Hydration Salts`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} — ${product.tagline}`,
      description: product.shortDesc,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const otherProduct = products.find((p) => p.slug !== params.slug);

  return (
    <main>
      <Navbar />
      <ProductClient product={product} otherProduct={otherProduct} />
      <Footer />
    </main>
  );
}
