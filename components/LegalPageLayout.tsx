"use client";

import { motion } from "framer-motion";

interface Section {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPageLayout({
  title,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-amber-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-diamond-subtle opacity-5 pointer-events-none" />

            <div className="p-8 md:p-12 border-b border-border relative z-10">
              <h1 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-12 relative z-10">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl font-black text-foreground flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed pl-14 text-lg">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-12 border-t border-border bg-muted/30">
              <p className="text-center text-sm text-muted-foreground italic">
                If you have any questions regarding these {title.toLowerCase()},
                please contact us through our contact page.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
