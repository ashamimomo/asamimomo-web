import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { CartSidebar } from "@/components/cart/CartSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          playfair.variable,
          "antialiased bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground flex flex-col min-h-screen"
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <CartSidebar /> */}
      </body>
    </html>
  );
}
