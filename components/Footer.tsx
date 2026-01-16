import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TiktokIcon from "./icons/TiktokIcon";

export function Footer() {
  return (
    <footer className="bg-amber-50 backdrop-blur-sm text-muted-foreground pt-16 pb-8 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-diamond-subtle opacity-5 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-heading font-black tracking-tighter text-primary mb-4 block"
            >
              <Image
                src="/ashami-logo.jpg"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-24 h-24 object-contain"
              />
            </Link>
            <p className="mb-6 max-w-xs">
              Authentic Himalayan flavors in the heart of Malden. Experience the
              true taste of Momo and Nepalese cuisine.
            </p>
            <div className="flex gap-4">
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/vR5u6HcuCbMbXX1a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  278 Pearl St Malden
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:7819608819"
                  className="hover:text-foreground transition-colors"
                >
                  (781) 960-8819
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span>04:00 PM - 11:00 PM</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/menu" className="text-primary hover:underline">
                View Full Menu &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ashami Momo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
