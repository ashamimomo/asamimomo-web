import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  278 Pearl St,
                  <br />
                  Malden, MA 02148
                </span>
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
                <span>11:00 AM - 10:00 PM</span>
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
