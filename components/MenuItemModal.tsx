"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Facebook, Twitter, Linkedin } from "lucide-react";
import { MenuItem } from "@/lib/data";
import { MENU_ITEMS } from "@/lib/data";
import Link from "next/link";

interface MenuItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onItemChange?: (item: MenuItem) => void;
}

export function MenuItemModal({
  item,
  isOpen,
  onClose,
  onItemChange,
}: MenuItemModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!item) return null;

  // Get "You May Also Like" items (same category, excluding current)
  const relatedItems = MENU_ITEMS.filter(
    (i) => i.category === item.category && i.id !== item.id
  )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[100] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={modalRef}
              className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
            >
              <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between z-20">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left: Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="aspect-square bg-muted rounded-xl overflow-hidden relative border border-border group"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-muted-foreground/30 text-4xl font-bold font-heading group-hover:scale-110 transition-transform duration-500">
                          {item.name}
                        </div>
                      </div>
                    )}
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase rounded-full tracking-wider z-10">
                        Bestseller
                      </div>
                    )}
                  </motion.div>

                  {/* Right: Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                  >
                    {item.popular && (
                      <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Bestseller
                      </span>
                    )}

                    <div className="flex items-baseline gap-3 mb-8">
                      <span className="text-3xl font-bold text-primary">
                        ${item.price}
                      </span>
                    </div>

                    <Link href={"/contact"} className="mb-8">
                      <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-primary/90 transition-all">
                        Order Now
                      </button>
                    </Link>

                    <div className="mb-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>Share:</span>
                        <button className="hover:text-foreground">
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button className="hover:text-foreground">
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button className="hover:text-foreground">
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-muted-foreground border-t border-border pt-6">
                      <p>{item.description}</p>
                      <p className="mt-4 text-sm italic">
                        Expertly crafted with tender fillings and a delightful
                        blend of Ashami special spices. A must-try culinary
                        experience!
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* You May Also Like */}
                {relatedItems.length > 0 && (
                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl font-bold mb-6">
                      You May Also Like
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedItems.map((related) => (
                        <button
                          key={related.id}
                          onClick={() => {
                            if (onItemChange) {
                              onItemChange(related);
                            }
                          }}
                          className="group text-left"
                        >
                          <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-4 border border-border group-hover:border-primary/50 transition-colors relative">
                            {related.image ? (
                              <Image
                                src={related.image}
                                alt={related.name}
                                fill
                                className="object-cover rounded-xl"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-muted-foreground/30 font-bold text-lg">
                                  {related.name}
                                </span>
                              </div>
                            )}
                          </div>
                          <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                            {related.name}
                          </h4>
                          <span className="text-muted-foreground">
                            ${related.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
