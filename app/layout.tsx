import type { Metadata } from "next";
import {
  Inter,
  Outfit,
  Playfair_Display,
  Roboto,
  Google_Sans,
  Syne,
  Syncopate,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
// import { CartSidebar } from "@/components/cart/CartSidebar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "auto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "auto",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-google",
  display: "swap",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate-google",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashami Momo - Authentic Himalayan Taste",
  description:
    "Experience the best Momos and Himalayan cuisine at Ashami Momo, Malden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={cn(
          outfit.variable,
          playfair.variable,
          roboto.variable,
          syne.variable,
          syncopate.variable,
          "antialiased bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col min-h-screen"
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <ScrollToTopButton />
        <Footer />
        {/* <CartSidebar /> */}
      </body>
    </html>
  );
}
