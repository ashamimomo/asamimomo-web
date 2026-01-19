"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Section {
  title: string;
  content: string;
}

interface LegalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPopup({
  isOpen,
  onClose,
  title,
  lastUpdated,
  sections,
}: LegalPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-background border border-border rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col relative z-50 px-1"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-black text-primary uppercase tracking-tight">
                  {title}
                </h2>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              {sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-black text-foreground flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border bg-muted/30">
              <button
                onClick={onClose}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
