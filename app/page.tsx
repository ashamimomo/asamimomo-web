"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { MENU_ITEMS } from "@/lib/data";
// import { useCartStore } from "@/store/cartStore";

export default function Home() {
  // const { addItem } = useCartStore();
  const featuredItems = MENU_ITEMS.filter((item) => item.popular).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a0505] z-0" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent z-0" />

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Authentic Himalayan Taste
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              ASHAMI MOMO
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Experience the finest dumplings and authentic Nepalese cuisine in
              Malden. Handcrafted with passion, served with love.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/menu">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/25">
                  View Menu <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full font-bold text-lg border border-border hover:bg-muted transition-all text-foreground">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Customer Favorites
            </h2>
            <p className="text-muted-foreground">
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
                  {/* Placeholder for Item Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                    Coming Soon
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
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

      {/* About / Ambience Teaser */}
      <section
        id="about"
        className="py-24 bg-muted/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border p-8 flex items-center justify-center relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <p className="text-center italic text-muted-foreground">
                "The best Momos I've had outside of Kathmandu. Truly authentic!"
              </p>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl -z-0" />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ashami Momo brings the vibrant street food culture of Nepal to
              Malden. Founded with a passion for authentic spices and
              traditional cooking methods, we serve more than just food — we
              serve memories.
            </p>
            <div className="flex gap-8">
              <div>
                <h4 className="text-3xl font-bold text-primary">15+</h4>
                <p className="text-sm text-muted-foreground">Momo Varieties</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">100%</h4>
                <p className="text-sm text-muted-foreground">Handmade</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
