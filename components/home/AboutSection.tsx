"use client";

import { Star } from "lucide-react";
import NextImage from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="section-padding bg-muted/30 relative overflow-hidden border-y border-border/50"
      >
        <div className="absolute inset-0 bg-diamond opacity-5 z-0" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] bg-white border border-border overflow-hidden flex flex-col items-center justify-center relative z-10 -rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl glass-card">
              {/* Subtle background image */}
              <div className="absolute inset-0 opacity-20 z-0">
                <NextImage
                  src="/testimonial-bg.png"
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-transparent z-1" />

              <div className="relative z-10 flex flex-col items-center justify-center p-12">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-secondary mb-6 fill-secondary"
                    />
                  ))}
                </div>
                <p className="text-center text-2xl italic text-foreground font-serif leading-relaxed">
                  "The most authentic Himalayan flavors I've found outside of
                  Nepal. Simply exceptional."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-secondary" />
                  <span className="font-bold text-secondary uppercase tracking-widest text-xs">
                    - Pra Bin Du Adhikari
                  </span>
                  <div className="w-12 h-[1px] bg-secondary" />
                </div>
              </div>
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-secondary/20 rounded-[2rem] -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Heritage
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 text-primary leading-tight">
              Our Story
            </h2>
            <p className="text-muted-foreground text-xl mb-10 leading-relaxed font-sans max-w-xl">
              Ashami Momo brings the vibrant street food culture of Nepal to
              Malden. Founded with a passion for authentic spices and
              traditional cooking methods, we serve more than just food — we
              serve memories of the Himalayas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm glass-card">
                <h4 className="text-5xl font-heading font-black text-primary mb-2">
                  8+
                </h4>
                <p className="text-xs text-secondary font-black uppercase tracking-widest">
                  Momo Varieties
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm glass-card">
                <h4 className="text-5xl font-heading font-black text-primary mb-2">
                  100%
                </h4>
                <p className="text-xs text-secondary font-black uppercase tracking-widest">
                  Handmade
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
