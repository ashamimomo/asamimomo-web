"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const { addItem } = useCartStore();
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory; // Logic below changes to grouping
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Group items by category for the list view
  const groupedItems = MENU_CATEGORIES.map((category) => ({
    name: category,
    items: filteredItems.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      const headerOffset = 140; // Approx header + nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy to update active category
  useEffect(() => {
    const handleScroll = () => {
      // Simple logic: find whichever section is closest to top
      // Optimization: could use IntersectionObserver but manual is fine for manageable list
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground">Fresh, Authentic, Delicious.</p>
        </div>

        {/* Search & Filter Bar - Sticky */}
        <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-border mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto w-full md:w-auto gap-2 pb-2 md:pb-0 no-scrollbar">
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-16">
          {groupedItems.map((group) => (
            <div key={group.name} id={group.name} className="scroll-mt-40">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {group.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="text-primary font-bold">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {item.isVegetarian && (
                          <span className="text-[10px] uppercase font-bold text-green-500 border border-green-500/20 bg-green-500/10 px-2 py-0.5 rounded">
                            Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="text-[10px] uppercase font-bold text-red-500 border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded">
                            Spicy
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => addItem(item)}
                        className="bg-muted hover:bg-primary hover:text-primary-foreground text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {groupedItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>No items found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
