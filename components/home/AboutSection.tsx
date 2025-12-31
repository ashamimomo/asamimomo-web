"use client";

import { Star } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="py-24 bg-muted/50 relative overflow-hidden border-y border-border/50"
      >
        <div className="absolute inset-0 bg-diamond opacity-5 z-0" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white border border-border p-12 flex flex-col items-center justify-center relative z-10 -rotate-2 hover:rotate-0 transition-transform duration-700 shadow-xl">
              <Star className="w-12 h-12 text-secondary mb-6 fill-secondary" />
              <p className="text-center text-xl italic text-foreground font-serif leading-relaxed">
                "The best Momos I've had outside of Kathmandu. Truly authentic
                taste and atmosphere!"
              </p>
              <span className="mt-4 font-bold text-secondary uppercase tracking-widest text-xs">
                - Regular Customer
              </span>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-secondary/20 rounded-2xl -z-0" />
          </div>

          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 text-primary">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-sans">
              Ashami Momo brings the vibrant street food culture of Nepal to
              Malden. Founded with a passion for authentic spices and
              traditional cooking methods, we serve more than just food — we
              serve memories of the Himalayas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h4 className="text-4xl font-heading font-bold text-primary mb-1">
                  8+
                </h4>
                <p className="text-sm text-secondary font-bold uppercase tracking-wider">
                  Momo Varieties
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h4 className="text-4xl font-heading font-bold text-primary mb-1">
                  100%
                </h4>
                <p className="text-sm text-secondary font-bold uppercase tracking-wider">
                  Handmade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
