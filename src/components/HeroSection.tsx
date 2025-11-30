import logoPower from "@/assets/logo-power.png";

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            hsl(var(--primary-foreground)) 35px,
            hsl(var(--primary-foreground)) 36px
          )`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          <img
            src={logoPower}
            alt="Power Suplementos"
            className="h-24 sm:h-32 md:h-40 lg:h-48 mx-auto mb-8 invert"
          />
        </div>

        <p 
          className="text-primary-foreground/90 text-xl sm:text-2xl md:text-3xl font-display tracking-wider mb-4 animate-fade-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          IMPULSA TU RENDIMIENTO
        </p>
        
        <p 
          className="text-primary-foreground/70 text-lg sm:text-xl md:text-2xl font-display tracking-wider mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          ELEVA TU BIENESTAR
        </p>

        <button
          onClick={scrollToProducts}
          className="animate-fade-up opacity-0 bg-primary-foreground text-primary px-10 py-4 text-lg font-display tracking-widest hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          VER SUPLEMENTOS
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
