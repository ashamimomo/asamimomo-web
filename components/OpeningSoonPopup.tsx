"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, UtensilsCrossed, ChefHat } from "lucide-react";
import Link from "next/link";

export function OpeningSoonPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup on mount with a slight delay
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[200] backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40, rotate: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 260 }}
              className="bg-background border-2 border-primary/20 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(161,27,30,0.3)] max-w-md w-full pointer-events-auto relative group"
            >
              {/* Premium Header Decoration */}
              <div className="h-40 bg-primary relative overflow-hidden flex items-center justify-center">
                {/* Diamond Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 bg-diamond scale-110 rotate-12" />

                {/* Decorative Blobs */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-background/20 rounded-full blur-3xl" />

                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", bounce: 0.6 }}
                  className="bg-background p-6 rounded-[2rem] shadow-2xl z-10 border-4 border-secondary/20"
                >
                  <ChefHat className="w-12 h-12 text-primary" />
                </motion.div>

                {/* Animated Elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-12 text-secondary"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-6 left-12 text-background"
                >
                  <UtensilsCrossed className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Content Area */}
              <div className="p-10 text-center relative bg-diamond-subtle">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest rounded-full mb-4 border border-secondary/20">
                    Exciting News
                  </span>
                  <h2 className="text-4xl font-black mb-4 tracking-tight leading-none text-primary">
                    OPENING <br />
                    <span className="text-foreground relative">
                      SOON
                      <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-secondary/30 -rotate-1 rounded-full" />
                    </span>
                  </h2>

                  <p className="text-muted-foreground text-base mb-10 leading-relaxed font-medium">
                    Crafting authentic Himalayan momos with a modern twist. Get
                    ready for a flavor revolution in Malden!
                  </p>

                  <div className="space-y-6">
                    <Link href="/menu">
                      <button
                        onClick={closePopup}
                        className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-[0_10px_20px_-5px_rgba(161,27,30,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(161,27,30,0.5)] active:scale-[0.97] flex items-center justify-center gap-3 group/btn"
                      >
                        Explore Menu
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </button>
                    </Link>
                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground/60 font-bold uppercase tracking-[0.2em]">
                      <div className="w-8 h-[1px] bg-border" />
                      <span>Taste The Tradition</span>
                      <div className="w-8 h-[1px] bg-border" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-5 right-5 p-2.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all z-20 backdrop-blur-md border border-white/10 hover:scale-110 active:scale-90"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
