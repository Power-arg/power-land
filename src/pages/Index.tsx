import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSectionMundial } from "@/components/ProductsSectionMundial";
import { ProductsSectionHot } from "@/components/ProductsSectionHotSale";
import { ProductsSection } from "@/components/ProductsSection";
import { FloatingCart } from "@/components/FloatingCart";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProductsSectionMundial />
        <Footer />
        <FloatingCart />
      </main>
    </CartProvider>
  );
};

export default Index;
