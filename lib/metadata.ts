import { Metadata } from "next";

const defaultMetadata: Metadata = {
  title: {
    default: "Ashami Momo - Authentic Himalayan Taste",
    template: "%s | Ashami Momo",
  },
  description:
    "Experience the best Momos and Himalayan cuisine at Ashami Momo, Malden. Authentic flavors, handcrafted dumplings, and more.",
  keywords: [
    "Momo",
    "Nepalese Food",
    "Dumplings",
    "Malden",
    "Himalayan Cuisine",
    "Ashami Momo",
    "Curry",
    "Biryani",
  ],
  authors: [{ name: "Ashami Momo" }],
  creator: "Ashami Momo",
  metadataBase: new URL("https://ashamimomo.com"),
  openGraph: {
    title: "Ashami Momo - Authentic Himalayan Taste",
    description:
      "Experience the best Momos and Himalayan cuisine at Ashami Momo, Malden.",
    url: "https://ashamimomo.com",
    siteName: "Ashami Momo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashami Momo",
    description: "Authentic Himalayan Taste in Malden",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default defaultMetadata;
