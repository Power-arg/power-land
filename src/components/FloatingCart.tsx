import { useState } from "react";
import { ShoppingCart, X, Trash2, MessageCircle, Minus, Plus } from "lucide-react";
import { useCart, WHATSAPP_NUMBER } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export function FloatingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
    generateWhatsAppMessage,
  } = useCart();

  const itemCount = getItemCount();
  const total = getTotal();

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
          itemCount > 0 ? "animate-bounce" : ""
        }`}
      >
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-success text-success-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-2xl text-foreground">TU PEDIDO</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center p-6">
              <div>
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Seleccioná productos para agregarlos
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-secondary/50 rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-contain bg-surface-elevated rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase">
                        {item.product.brand}
                      </p>
                      <h4 className="font-medium text-foreground truncate">
                        {item.product.name}
                      </h4>
                      {item.product.flavor && (
                        <p className="text-sm text-muted-foreground">
                          {item.product.flavor}
                        </p>
                      )}
                      <p className="font-display text-lg text-foreground mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1 bg-secondary hover:bg-secondary/80 rounded transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 bg-secondary hover:bg-secondary/80 rounded transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 ml-auto text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-display text-3xl text-foreground">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 bg-success text-success-foreground py-4 font-display text-lg tracking-wide hover:bg-success/90 transition-colors rounded-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  PEDIR POR WHATSAPP
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
