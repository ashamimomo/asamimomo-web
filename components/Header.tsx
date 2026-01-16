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
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TiktokIcon from "./icons/TiktokIcon";
import path from "path";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === "/";
  const isOpaque = scrolled || !isTransparentPage;
  const isMenuPage = pathname === "/menu";

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
    { href: "/#showcase", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Mini-Bar (Enterprise Style) */}
      <div
        className={cn(
          "hidden lg:block bg-primary text-primary-foreground py-2 transition-all duration-300",
          isOpaque
            ? "opacity-0 -translate-y-full h-0 p-0"
            : "opacity-100 translate-y-0"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-bold tracking-widest uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> (781) 960-8819
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> 278 Pearl St, Malden
            </span>
          </div>
          <div className="flex">
            <span className="flex items-center gap-2">
              <Package className="w-3 h-3" /> Opening Soon
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" /> Mon-Sun: 04:00 PM - 11:00 PM
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          isOpaque
            ? "top-0 bg-background/95 backdrop-blur-xl border-b border-border py-3 shadow-lg"
            : "top-0 lg:top-8 bg-transparent py-5"
        )}
      >
        <div
          className={cn(
            "container mx-auto px-4 flex items-center transition-all duration-500",
            isOpaque ? "justify-between" : "md:justify-center justify-between"
          )}
        >
          <Link
            href="/"
            className="relative z-10 hover:scale-105 transition-transform"
          >
            <div
              className={cn(
                "absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10 transition-opacity",
                isOpaque ? "opacity-0" : "opacity-100"
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
                  isOpaque ? "h-12 w-12 block" : "h-16 w-16 block hidden"
                )}
              />
              {isOpaque ? (
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
                  isOpaque ? "text-foreground" : "text-background"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}

            <Link href="/contact">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 cursor-pointer">
                Order Online
              </button>
            </Link>
            <div
              className={cn(
                "flex gap-4 text-sm font-bold tracking-widest uppercase transition-all relative group",
                isOpaque ? "text-foreground" : "text-background"
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
                <TiktokIcon />
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex justify-between gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 text-foreground ${
                isOpaque ? "text-foreground" : "text-white"
              }`}
            >
              <Menu className="w-6 h-6" />
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
              className="fixed inset-y-0 right-0 bg-background w-full sm:w-80 h-screen z-[60] flex flex-col p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-2xl font-roboto font-black tracking-tighter">
                  ASHAMI<span className="text-secondary">MOMO</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full bg-muted"
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
                    className="text-2xl font-bold hover:text-primary transition-colors flex items-center justify-between group"
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
                    <Phone className="w-4 h-4 text-primary" /> (781) 960-8819
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" /> 278 Pearl St,
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
