"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MENU_ITEMS } from "@/lib/data";

export default function FeaturedSection() {
  const featuredItems = MENU_ITEMS.filter((item) => item.popular).slice(0, 3);
  return (
    <>
      <section className="py-24 bg-white relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
              Customer Favorites
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Loved by locals, crafted for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opactiy-60" />
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-muted-foreground/30 font-bold text-2xl">
                        {item.name}
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    {item.popular && (
                      <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full ml-2">
                        Popular
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="bg-green-500 text-green-50 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        Veg
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="bg-green-500 text-green-50 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        Vegan
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="bg-red-500 text-red-50 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        Spicy
                      </span>
                    )}
                    {!item.isVegetarian && (
                      <span className="bg-red-500 text-red-50 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        Non-Veg
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="bg-yellow-500 text-yellow-50 text-xs font-bold px-2 py-1 rounded-full ml-2">
                        GF
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  {/* Add to cart button commented out */}
                  {/* <button
                    onClick={() => addItem(item)}
                    className="w-full py-3 rounded-lg border border-border font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2 group-hover:bg-muted"
                  >
                    Add to Order
                  </button> */}
                  <Link href="/menu">
                    <button className="w-full py-3 rounded-lg border border-border font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2 group-hover:bg-muted">
                      View Menu <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 mx-auto border-b border-primary/20 pb-0.5 hover:border-primary">
                Explore Full Menu <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
