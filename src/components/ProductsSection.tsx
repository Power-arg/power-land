import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Flame } from "lucide-react";

type Category = "todos" | "proteina" | "creatina" | "barritas" | "granolas" | "pancakes" | "geles" | "colagenos" | "otros";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categories: { key: Category; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "proteina", label: "Proteínas" },
    { key: "creatina", label: "Creatinas" },
    { key: "barritas", label: "Barritas" },
    { key: "granolas", label: "Granolas" },
    { key: "pancakes", label: "Pancakes" },
    { key: "geles", label: "Geles" },
    { key: "colagenos", label: "Colágenos" },
    { key: "otros", label: "Otros" }
  ];

  return (
    <section id="productos" className="py-20 lg:py-32 bg-secondary/30">
      {/* Hot Sale Banner */}
      <div className="mb-12 bg-gradient-to-r from-red-500 to-red-600 text-white py-6 px-4 rounded-lg max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Flame className="h-6 w-6" />
          <h3 className="text-2xl sm:text-3xl font-display tracking-wider">HOT SALE EN MARCHA</h3>
          <Flame className="h-6 w-6" />
        </div>
        <p className="text-red-100 text-sm sm:text-base">Descuentos en productos seleccionados</p>
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-4">
            🔥 OFERTAS IMPRESIONANTES 🔥
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Aprovechá nuestro HOT SALE con descuentos especiales. Seleccioná los productos que quieras y hacé tu pedido por WhatsApp
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-2 text-sm font-display tracking-wide transition-all duration-200 rounded-lg sm:px-6 sm:py-2.5 sm:text-lg ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
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
    </section>
  );
}
