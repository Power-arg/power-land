import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Flame } from "lucide-react";
import copaMundo from "@/assets/copa-del-mundo.png";

type Category =
  | "todos"
  | "proteinas"
  | "creatinas"
  | "pre entrenos"
  | "barritas"
  | "granolas"
  | "pancakes"
  | "geles"
  | "colagenos"
  | "otros";

const CELESTE = "#74ACDF";
const GOLD = "#F6B40E";

function ArgentinaFlag({ width = 72 }: { width?: number }) {
  const h = Math.round(width * 0.6);
  const stripeH = h / 3;
  const cx = width / 2;
  const cy = h / 2;
  return (
    <svg
      width={width}
      height={h}
      viewBox={`0 0 ${width} ${h}`}
      className="mt-4 rounded shadow-lg"
      style={{ border: "1px solid rgba(255,255,255,0.3)" }}
    >
      <rect x="0" y="0" width={width} height={stripeH} fill={CELESTE} />
      <rect x="0" y={stripeH} width={width} height={stripeH} fill="white" />
      <rect x="0" y={stripeH * 2} width={width} height={stripeH} fill={CELESTE} />
      {Array.from({ length: 8 }, (_, i) => {
        const r = ((i * 45 - 90) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={cx + 4.5 * Math.cos(r)}
            y1={cy + 4.5 * Math.sin(r)}
            x2={cx + 8 * Math.cos(r)}
            y2={cy + 8 * Math.sin(r)}
            stroke={GOLD}
            strokeWidth="1.4"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="3.5" fill={GOLD} />
    </svg>
  );
}


export function ProductsSectionMundial() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories: { key: Category; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "proteinas", label: "Proteínas" },
    { key: "creatinas", label: "Creatinas" },
    { key: "pre entrenos", label: "Pre-Entrenos" },
    { key: "barritas", label: "Barritas" },
    { key: "granolas", label: "Granolas" },
    { key: "pancakes", label: "Pancakes" },
    { key: "geles", label: "Geles" },
    { key: "colagenos", label: "Colágenos" },
    { key: "otros", label: "Otros" },
  ];

  return (
    <section id="productos" className="bg-secondary/30">

      {/* ══════════════════════════════════════════
          BANDERA ARGENTINA — HERO MUNDIALISTA
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden">

        {/* Franja celeste superior */}
        <div
          className="flex flex-col items-center justify-center py-10 px-6 text-center"
          style={{ backgroundColor: CELESTE }}
        >
          {/* Tres estrellas — tricampeones */}
          <div className="flex gap-3 mb-5">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="text-5xl leading-none"
                style={{ color: GOLD, textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
              >
                ★
              </span>
            ))}
          </div>

          <h2
            className="text-6xl sm:text-8xl lg:text-[9rem] font-display tracking-widest leading-none"
            style={{ color: "white", textShadow: "0 3px 10px rgba(0,0,80,0.25)" }}
          >
            VAMOS
          </h2>
          <h2
            className="text-6xl sm:text-8xl lg:text-[9rem] font-display tracking-widest leading-none"
            style={{ color: "white", textShadow: "0 3px 10px rgba(0,0,80,0.25)" }}
          >
            ARGENTINA
          </h2>
        </div>

        {/* Franja blanca central — Copa del Mundo */}
        <div className="flex flex-col items-center justify-center py-8 px-6 text-center bg-white">
          <img
            src={copaMundo}
            alt="Copa del Mundo FIFA"
            className="w-36 h-auto drop-shadow-xl"
          />
          <p
            className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase"
            style={{ color: CELESTE }}
          >
            1978 · 1986 · 2022
          </p>
        </div>

        {/* Franja celeste inferior */}
        <div
          className="flex flex-col items-center justify-center py-10 px-6 text-center"
          style={{ backgroundColor: CELESTE }}
        >
          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-display tracking-wider mb-2"
            style={{ color: "white" }}
          >
            ⚽ ARRANCO EL MUNDIAL ⚽
          </p>
          {/*<p
            className="text-base sm:text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Celebramos con descuentos especiales en toda la tienda
          </p>
          <ArgentinaFlag width={80} />*/}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PRODUCTOS
      ══════════════════════════════════════════ */}
      <div className="py-16 lg:py-24">
        <div className="section-container">

          {/* Encabezado */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              {/*<span><Flame className="h-12 w-12 text-sky-500" /></span>*/}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground">
                Nuestros productos
              </h2>
              {/*<span><Flame className="h-12 w-12 text-sky-500" /></span>*/}
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Seleccioná los productos que quieras y hacé tu pedido por WhatsApp
            </p>
            {/* Divider con colores argentinos */}
            <div className="flex justify-center items-center gap-0 mx-auto w-40 h-2 rounded-full overflow-hidden">
              <div className="flex-1 h-full" style={{ backgroundColor: CELESTE }} />
              <div className="flex-1 h-full bg-white border-y border-gray-200" />
              <div className="flex-1 h-full" style={{ backgroundColor: CELESTE }} />
            </div>
          </div>

          {/* Filtro de categorías */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-2 text-sm font-display tracking-wide transition-all duration-200 rounded-lg sm:px-6 sm:py-2.5 sm:text-lg ${
                  activeCategory === cat.key
                    ? "text-white shadow-md scale-105"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                }`}
                style={
                  activeCategory === cat.key ? { backgroundColor: CELESTE } : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grilla de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up opacity-0"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
