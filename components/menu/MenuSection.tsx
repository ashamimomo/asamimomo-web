"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MenuItemModal } from "@/components/MenuItemModal";

// Add "All" to categories for the UI only
const UI_CATEGORIES = ["All", ...MENU_CATEGORIES];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = MENU_ITEMS.filter((item) => {
    // 1. Filter by Category
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    // 2. Filter by Search (within the active category context)
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-diamond-subtle opacity-5 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Culinary Offerings
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-xl italic font-serif">
            Fresh, Authentic, Delicious Himalayan Cuisine.
          </p>
        </div>

        {/* Search & Filter Bar - Sticky */}
        <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-border mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search current category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto w-full md:w-auto gap-2 pb-2 md:pb-0 no-scrollbar">
              {UI_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
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
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b-2 border-primary/10 pb-4">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-3 text-primary">
              <span className="w-2 h-10 bg-secondary rounded-full"></span>
              {activeCategory === "All"
                ? "All Culinary Delights"
                : activeCategory}
            </h2>
            <span className="text-muted-foreground font-serif italic">
              {filteredItems.length} delicacies found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
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
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider">
                      Bestseller
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold whitespace-nowrap ml-2">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
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
                      onClick={() => {
                        setSelectedItem(item);
                        setIsModalOpen(true);
                      }}
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 hover:underline"
                    >
                      View & Order <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Menu Item Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        onItemChange={(item) => {
          setSelectedItem(item);
        }}
      />
    </div>
  );
}
