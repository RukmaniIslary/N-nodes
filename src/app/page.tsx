import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductGrid />
    </>
  );
}