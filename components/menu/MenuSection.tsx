"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MenuItemModal } from "@/components/MenuItemModal";
import { OrderIcon } from "../icons/OrderIcon";
import Link from "next/link";

// Add "All" to categories for the UI only
const UI_CATEGORIES = ["All", ...MENU_CATEGORIES];

const CATEGORY_HEROS: Record<string, string> = {
  All: "/hero/hero-1.jpg",
  Appetizers: "/menu/appetizers/french-fries.jpg",
  "Chow Mein": "/menu/chowmein/ashami-chow-mein.jpg",
  Chili: "/menu/chili/chicken-chili.jpg",
  Wings: "/menu/wings/chicken-lollipop.jpg",
  Momo: "/menu/momo/steam-momo.jpg",
  Biryani: "/menu/biryani/house-special-biryani.jpg",
  Curry: "/menu/curry/chicken-tikka-masala.jpg",
  Rice: "/menu/rice/fried-rice.jpg",
  Breads: "/menu/breads/garlic-naan.jpg",
  Dessert: "/menu/dessert/tres-leches.jpg",
  Beverages: "/menu/beverages/mango-lassi.jpg",
};

const CATEGORY_TAGLINES: Record<string, string> = {
  All: "A Symphony of Himalayan Flavors",
  Appetizers: "Perfect Starters for a Grand Meal",
  "Chow Mein": "Wok-Tossed Perfection",
  Chili: "Spicy, Bold, and Surprising",
  Wings: "Crispy, Saucy, and Addictive",
  Momo: "Our Signature Himalayan Dumplings",
  Biryani: "Fragrant Rice and Royal Spices",
  Curry: "Hearty and Traditional Classics",
  Rice: "The Perfect Side for Every Dish",
  Breads: "Freshly Baked Tandoori Delights",
  Dessert: "Sweet Endings to Your Journey",
  Beverages: "Refreshing Traditional Drinks",
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function MenuSection() {
  const [[categoryPage, direction], setCategoryPage] = useState([0, 0]);
  const activeCategory = UI_CATEGORIES[categoryPage];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuGridRef = useRef<HTMLDivElement>(null);

  const paginate = (newPageIndex: number) => {
    const newDirection = newPageIndex > categoryPage ? 1 : -1;
    setCategoryPage([newPageIndex, newDirection]);

    // Smooth scroll to menu grid without offseting
    // requestAnimationFrame(() => {
    //   menuGridRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // });
    requestAnimationFrame(() => {
      if (!menuGridRef.current) return;

      const yOffset = -120; //offset
      const y =
        menuGridRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

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
    <div className="min-h-screen bg-background">
      {/* Dynamic Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={categoryPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.6 },
            }}
            className="absolute inset-0 z-0"
          >
            <motion.div style={{ y }} className="relative h-[120%] w-full">
              <Image
                src={CATEGORY_HEROS[activeCategory] || CATEGORY_HEROS["All"]}
                alt={activeCategory}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container flex flex-col items-center justify-center relative z-10 px-4 text-center">
          <Image
            src="/ashami-logo.jpg"
            alt="Logo"
            width={1000}
            height={1000}
            className="relative z-10 h-30 w-30 object-contain rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 mb-6"
          />
          <motion.div
            key={`tagline-badge-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-2 rounded-full bg-primary/70 border border-secondary/30 backdrop-blur-md mb-6"
          >
            <span className="text-white font-black tracking-widest uppercase text-xs">
              {activeCategory === "All" ? "Our Full Menu" : activeCategory}
            </span>
          </motion.div>
          <motion.h1
            key={`title-${activeCategory}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-syncopate font-bold text-white mb-6 uppercase tracking-widest leading-tight"
          >
            <span className="block text-secondary">
              {activeCategory === "All" ? "Culinary Delights" : activeCategory}
            </span>
          </motion.h1>
          <motion.p
            key={`desc-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-xl font-sans max-w-2xl mx-auto"
          >
            {CATEGORY_TAGLINES[activeCategory] || CATEGORY_TAGLINES["All"]}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Search & Filter Bar - Enhanced for Laptop */}
        <div className="top-20 z-40 bg-background/95 backdrop-blur-xl py-8 border-b border-border/50 mb-16 shadow-sm">
          <div className="flex flex-col gap-8">
            {/* Categories - Wrapping Layout */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {UI_CATEGORIES.map((category, index) => (
                <button
                  key={category}
                  onClick={() => {
                    paginate(index);
                  }}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 border-2",
                    activeCategory === category
                      ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/20 scale-105"
                      : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search - Centered on large screens */}
            <div className="relative w-full max-w-lg mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search flavors, spices, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-muted/30 border-2 border-border/50 rounded-full pl-14 pr-8 py-4 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground/40"
              />
            </div>
          </div>
        </div>

        {/* Creative Menu Grid - 2 Column for Laptop */}
        <div ref={menuGridRef} className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 px-4">
            <div className="space-y-2">
              <h2 className="block text-4xl md:text-5xl font-heading font-black text-primary tracking-tight">
                {activeCategory === "All" ? "Our Menu" : activeCategory}
              </h2>
              <div className="h-1.5 w-20 bg-secondary rounded-full" />
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-3xl font-heading font-bold text-primary/20 block leading-none">
                {filteredItems.length}
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                Options
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className="group relative flex flex-col sm:flex-row gap-6 p-4 rounded-3xl hover:bg-muted/30 transition-all duration-500 cursor-pointer border border-transparent hover:border-primary/10 shadow-sm hover:shadow-xl hover:shadow-primary/5"
                onClick={() => {
                  setSelectedItem(item);
                  setIsModalOpen(true);
                }}
              >
                {/* Image Section - Elegant Proportions */}
                <div className="w-full sm:w-44 lg:w-52 aspect-square shrink-0 bg-muted relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transform transition-transform duration-700 group-hover:scale-[1.02]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/5">
                      <span className="text-primary/20 font-black text-5xl uppercase select-none">
                        {item.name[0]}
                      </span>
                    </div>
                  )}
                  {/* Category Badge on Image */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {item.popular && (
                      <span className="bg-secondary/90 backdrop-blur-md text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section - Sophisticated Typography */}
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-heading font-black text-foreground group-hover:text-primary transition-colors flex flex-wrap items-center gap-2 leading-tight">
                        {item.name}
                        {item.isVegan && (
                          <span className="text-[9px] uppercase font-black text-green-700 bg-green-100/80 px-2 py-0.5 rounded-full border border-green-200">
                            Vegan
                          </span>
                        )}
                        {item.isVegetarian && !item.isVegan && (
                          <span className="text-[9px] uppercase font-black text-green-700 bg-green-100/80 px-2 py-0.5 rounded-full border border-green-200">
                            Veg
                          </span>
                        )}
                        {!item.isVegan && !item.isVegetarian && (
                          <span className="text-[9px] uppercase font-black text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full border border-red-200">
                            Non-Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="text-[9px] uppercase font-black text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full border border-red-200">
                            Spicy
                          </span>
                        )}
                      </h3>
                      <span className="text-xl font-black text-primary shrink-0 leading-none pt-1">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed font-sans line-clamp-3 group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div className="flex items-center gap-2 group/btn">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                        Discover More
                      </span>
                      <div className="w-8 h-[2px] bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                    </div>
                    <Link href="/contact">
                      <div className="w-8 h-8 hover:w-8.5 hover:h-8.5 text-primary/40 hover:text-red-700 transition-all duration-100">
                        <OrderIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-32 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
              <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No delicacies found</h3>
              <p className="text-muted-foreground">
                Try searching for something else or explore another category.
              </p>
              <button
                onClick={() => {
                  paginate(0); // Index for "All"
                  setSearchQuery("");
                }}
                className="mt-6 text-primary font-bold underline underline-offset-4"
              >
                Clear all filters
              </button>
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
