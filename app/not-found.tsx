"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, ChevronLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-background">
      <div className="max-w-xl w-full text-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {/* Main Illustration/Icon */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto rotate-12">
              <UtensilsCrossed className="w-16 h-16 text-primary -rotate-12" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-2 -right-2 bg-secondary text-white text-xl font-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform rotate-12"
            >
              404
            </motion.div>
          </div>

          <h1 className="text-5xl font-black text-primary mb-4 tracking-tighter uppercase">
            Order Not Found!
          </h1>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-md mx-auto font-medium">
            It seems the page you're looking for has been tucked away safely.
            Let's get you back to the menu!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
            <Link href="/menu" className="w-full sm:w-auto">
              <button className="w-full bg-secondary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                View Menu
              </button>
            </Link>
          </div>

          {/* Himalayan Pattern Bottom */}
          <div className="mt-16 opacity-20">
            <div className="flex justify-center gap-2 h-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-full bg-primary transform skew-x-[45deg]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
