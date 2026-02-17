import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";
import Osmosis from "@/components/Osmosis";
import Products from "@/components/Products";
import BuiltDifferent from "@/components/BuiltDifferent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Science />
      <Testimonials />
      <Osmosis />
      <Products />
      <BuiltDifferent />
      <Footer />
    </main>
  );
}
