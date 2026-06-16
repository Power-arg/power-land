import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSectionHot } from "@/components/ProductsSectionHot";
import { FloatingCart } from "@/components/FloatingCart";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProductsSectionHot />
        <Footer />
        <FloatingCart />
      </main>
    </CartProvider>
  );
};

export default Index;
