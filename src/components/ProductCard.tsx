import { Plus, Minus, Check } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, removeItem, isInCart, items, updateQuantity } = useCart();
  const inCart = isInCart(product.id);
  const cartItem = items.find((item) => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleToggle = () => {
    if (inCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <div
      className={`group relative bg-card border-2 transition-all duration-300 rounded-lg overflow-hidden ${
        inCart
          ? "border-foreground shadow-lg"
          : "border-border hover:border-foreground/30 hover:shadow-md"
      }`}
    >
      {/* Selection Badge */}
      {inCart && (
        <div className="absolute top-3 right-3 z-10 bg-foreground text-background p-1.5 rounded-full">
          <Check className="h-4 w-4" />
        </div>
      )}

      {/* Image */}
      <div
        className="relative aspect-square bg-surface-elevated p-6 cursor-pointer overflow-hidden"
        onClick={handleToggle}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {product.brand}
          </span>
        </div>
        
        <h3 className="font-display text-lg text-foreground leading-tight mb-1">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>{product.size}</span>
          {product.flavor && (
            <>
              <span>•</span>
              <span>{product.flavor}</span>
            </>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-foreground">
            {formatPrice(product.price)}
          </span>

          {inCart ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="p-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleToggle}
              className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200"
            >
              <Plus className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
