"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-full flex items-center justify-center overflow-hidden mt-20 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-diamond-subtle opacity-40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-0" />

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
            <img
              src="/ashami-logo.jpg"
              alt="Ashami Momo Logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-8 border-background shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Authentic Himalayan Taste
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-6 tracking-tight text-primary">
              ASHAMI MOMO
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Experience the finest dumplings and authentic Nepalese cuisine.
              <span className="block italic text-secondary mt-1">
                Handcrafted with passion, served with love in Malden.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/menu">
                <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-primary/20">
                  Explore Menu <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 rounded-full font-bold text-xl border-2 border-border hover:bg-muted transition-all text-foreground hover:border-primary/30">
                  Find Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
