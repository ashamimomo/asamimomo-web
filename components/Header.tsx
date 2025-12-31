"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  ShoppingBag,
  X,
  Phone,
  Clock,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Mini-Bar (Enterprise Style) */}
      <div
        className={cn(
          "hidden lg:block bg-primary text-primary-foreground py-2 transition-all duration-300",
          scrolled || !isHome
            ? "opacity-0 -translate-y-full h-0 p-0"
            : "opacity-100 translate-y-0"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-bold tracking-widest uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> (781) 605-1815
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> 236 Bryant St, Malden, MA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" /> Mon-Sun: 11:00 AM - 10:00 PM
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "top-0 bg-background/95 backdrop-blur-xl border-b border-border py-3 shadow-lg"
            : "top-0 lg:top-8 bg-transparent py-5"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-4 flex items-center transition-all duration-500",
            scrolled || !isHome ? "justify-between" : "justify-center"
          )}
        >
          <Link
            href="/"
            className="relative z-10 hover:scale-105 transition-transform"
          >
            <div
              className={cn(
                "absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10 transition-opacity",
                scrolled || !isHome ? "opacity-0" : "opacity-100"
              )}
            />
            <div className="flex items-center gap-2">
              <Image
                src="/ashami-logo.jpg"
                alt="Ashami Momo Logo"
                width={100}
                height={100}
                className={cn(
                  "rounded-full border-2 border-white/20 shadow-xl object-cover transition-all duration-500",
                  scrolled || !isHome
                    ? "h-12 w-12 block"
                    : "h-16 w-16 md:h-20 md:w-20 hidden"
                )}
              />
              {scrolled || !isHome ? (
                <span className="text-lg font-bold tracking-widest uppercase transition-all hover:text-primary relative group">
                  ASHAMI<span className="text-secondary">MOMO</span>
                </span>
              ) : (
                <></>
              )}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold tracking-widest uppercase transition-all hover:text-primary focus:text-primary relative group",
                  scrolled || !isHome ? "text-foreground" : "text-background"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}

            <Link href="/menu">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                Order Online
              </button>
            </Link>
            <div
              className={cn(
                "flex gap-4 text-sm font-bold tracking-widest uppercase transition-all relative group",
                scrolled || !isHome ? "text-foreground" : "text-background"
              )}
            >
              <a
                href="https://www.facebook.com/ashami.momo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ashamimomo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@ashamimomo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:text-primary transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="w-5 h-5 fill-current"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/menu">
              <button className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-foreground"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 bg-background w-full sm:w-80 h-screen z-[60] flex flex-col p-10 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-3xl font-heading font-black text-primary tracking-tighter">
                  ASHAMI<span className="text-secondary">MOMO</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-muted"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mb-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-bold hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {link.label}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Menu className="w-4 h-4 rotate-90" />
                    </motion.div>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <Link href="/menu" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20">
                    Order Now
                  </button>
                </Link>

                <div className="pt-8 border-t border-border flex flex-col gap-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" /> (781) 605-1815
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" /> 236 Bryant St,
                    Malden, MA
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
