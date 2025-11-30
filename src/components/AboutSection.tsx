import { MessageCircle, Mail, Instagram, Zap, Shield, Award } from "lucide-react";
import logoIcon from "@/assets/logo-power-icon.png";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            src={logoIcon}
            alt="Power"
            className="h-16 w-16 mx-auto mb-6 opacity-90"
          />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-4">
            SOBRE NOSOTROS
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            En <span className="text-foreground font-semibold">POWER</span> te ayudamos a potenciar tu rendimiento deportivo 
            con suplementos de la más alta calidad. Trabajamos con las mejores marcas del mercado 
            para ofrecerte productos que impulsen tus objetivos de salud y fitness.
          </p>
          {/*<p className="text-lg text-muted-foreground leading-relaxed">
            Nuestra misión es ser tu aliado en el camino hacia una vida más saludable, 
            brindándote energía, fuerza y bienestar con cada producto que ofrecemos.
          </p>*/}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
              <Zap className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">ENERGÍA</h3>
            <p className="text-muted-foreground">Potenciamos tu rendimiento con productos de alta calidad</p>
          </div>
          <div className="text-center p-8 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
              <Award className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">CALIDAD</h3>
            <p className="text-muted-foreground">Solo trabajamos con marcas certificadas y reconocidas en el mercado</p>
          </div>
          <div className="text-center p-8 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary rounded-full">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">CONFIANZA</h3>
            <p className="text-muted-foreground">Atención personalizada y asesoramiento para ayudarte a elegir lo mejor</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <a
            href="https://wa.me/5493492638875?text=Hola!%20Me%20contacto%20desde%20la%20web,%20tengo%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="font-medium">WhatsApp</span>
          </a>
          <a
            href="mailto:powerrrsuplementos@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://www.instagram.com/powerr.arg?igsh=ZzB1dG1sdnB3b3Vm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-3 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
