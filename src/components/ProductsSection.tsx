import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Category = "todos" | "proteina" | "creatina" | "barritas" | "otros";

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
    { key: "otros", label: "Otros" },
  ];

  return (
    <section id="productos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-4">
            NUESTROS PRODUCTOS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Seleccioná los productos que quieras y hacé tu pedido por WhatsApp
          </p>
          <div className="w-20 h-1 bg-foreground mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 font-display text-lg tracking-wide transition-all duration-200 rounded-lg ${
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
