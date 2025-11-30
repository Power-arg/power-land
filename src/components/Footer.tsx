import logoIcon from "@/assets/logo-power-icon.png";

export function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <img
            src={logoIcon}
            alt="Power"
            className="h-12 w-12 mb-4 invert"
          />
          <p className="text-primary-foreground/70 mb-4">
            Suplementos de calidad para potenciar tu rendimiento
          </p>
          <div className="w-12 h-px bg-primary-foreground/30 mb-4" />
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Power Suplementos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
