"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";

// Note: I haven't created UI components yet, I will use standard HTML elements with Tailwind classes for speed, then refactor if needed.
// Actually, I should stick to standard HTML for now to avoid dependency on uncreated files.

export function CartSidebar() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total } =
    useCartStore();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeCart();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card text-card-foreground shadow-2xl z-[70] flex flex-col border-l border-border"
          >
            <div className="p-6 flex items-center justify-between border-b border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Your Order
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button
                    onClick={closeCart}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image placeholder or small image */}
                    <div className="w-20 h-20 bg-muted rounded-md shrink-0 border border-border flex items-center justify-center text-xs text-muted-foreground">
                      Img
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium line-clamp-2">
                          {item.name}
                        </h4>
                        <span className="font-bold text-sm ml-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
                        {item.category}
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 border border-input rounded-md max-w-min">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 ml-auto"
                        >
                          <Trash2 className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-card">
                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-all active:scale-[0.98]">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
