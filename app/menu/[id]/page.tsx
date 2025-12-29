"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MoveLeft,
  Minus,
  Plus,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const item = MENU_ITEMS.find((i) => i.id === resolvedParams.id);
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    notFound();
  }

  // Get "You May Also Like" items (same category, excluding current)
  const relatedItems = MENU_ITEMS.filter(
    (i) => i.category === item.category && i.id !== item.id
  )
    .sort(() => 0.5 - Math.random()) // Simple shuffle
    .slice(0, 3);

  const handleAddToCart = () => {
    // We add 'quantity' times
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link
            href="/menu"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MoveLeft className="w-4 h-4 mr-2" /> All Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-muted rounded-2xl overflow-hidden relative border border-border flex items-center justify-center group"
          >
            <div className="text-muted-foreground/30 text-5xl font-bold font-heading group-hover:scale-110 transition-transform duration-500">
              {item.name}
            </div>
            {item.popular && (
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase rounded-full tracking-wider">
                Bestseller
              </div>
            )}
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            {item.popular && (
              <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                Bestseller
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              {item.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-bold text-primary">
                ${item.price}
              </span>
              {/* Fake discount for enterprise feel if wanted, or just cleaner price. 
                        Let's keep it clean as per standard unless item has discount prop (which it currently doesn't) */}
            </div>

            <div className="mb-8">
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center w-32 border border-input rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-transparent border border-primary text-primary hover:bg-primary/5 py-4 rounded-lg font-bold uppercase tracking-wide transition-all"
              >
                Add to Cart
              </button>
              <button className="w-full bg-black text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all border border-gray-800">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">P</span>
                <span className="text-[#FBBC05]">a</span>
                <span className="text-[#34A853]">y</span>
                <span className="ml-1 text-white">Buy with GPay</span>
              </button>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>Share:</span>
                <button className="hover:text-foreground">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="hover:text-foreground">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="hover:text-foreground">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-6">
              <p>{item.description}</p>
              <p className="mt-4 text-sm italic">
                Expertly crafted with tender fillings and a delightful blend of
                Ashami special spices. A must-try culinary experience!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Use May Also Like */}
        {relatedItems.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((related) => (
                <Link
                  href={`/menu/${related.id}`}
                  key={related.id}
                  className="group"
                >
                  <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-4 border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center">
                    <span className="text-muted-foreground/30 font-bold text-xl">
                      {related.name}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <span className="text-muted-foreground">
                    ${related.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
