import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MenuItem } from "@/lib/data";

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...currentItems, { ...item, quantity: 1 }],
            isOpen: true,
          });
        }
      },
      removeItem: (itemId) => {
        set({ items: get().items.filter((i) => i.id !== itemId) });
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      total: () => {
        return get().items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
      },
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "ashami-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
