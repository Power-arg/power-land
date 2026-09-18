import React, { createContext, useContext, useState, useCallback } from "react";
import { Product, formatPrice } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  hasItemsWithPriceOnRequest: () => boolean;
  getItemCount: () => number;
  isInCart: (productId: string) => boolean;
  generateWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const WHATSAPP_NUMBER = "5493492638875"; 

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce(
      (total, item) =>
        item.product.priceOnRequest
          ? total
          : total + item.product.price * item.quantity,
      0
    );
  }, [items]);

  const hasItemsWithPriceOnRequest = useCallback(() => {
    return items.some((item) => item.product.priceOnRequest);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const isInCart = useCallback(
    (productId: string) => {
      return items.some((item) => item.product.id === productId);
    },
    [items]
  );

  const generateWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return "";

    const productList = items
      .map((item) => {
        const flavorText = item.product.flavor ? ` - ${item.product.flavor}` : "";
        const priceText = item.product.priceOnRequest
          ? "precio a consultar"
          : formatPrice(item.product.price * item.quantity);
        return `• ${item.product.name} (${item.product.brand}${flavorText}) x${item.quantity} - ${priceText}`;
      })
      .join("\n");

    const total = formatPrice(getTotal());

    const pendingPriceNote = hasItemsWithPriceOnRequest()
      ? "\n\nNota: algunos productos tienen el precio pendiente de confirmar."
      : "";
    const message = `Hola, quisiera realizar el siguiente pedido:\n\n${productList}\n\n*Total parcial: ${total}*${pendingPriceNote}\n\nMuchas gracias.`;

    return encodeURIComponent(message);
  }, [items, getTotal, hasItemsWithPriceOnRequest]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        hasItemsWithPriceOnRequest,
        getItemCount,
        isInCart,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { WHATSAPP_NUMBER };
