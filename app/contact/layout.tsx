import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ashami Momo - Malden, MA",
  description:
    "Get in touch with Ashami Momo. Visit us at 278 Pearl St, Malden, or call (781) 960-8819.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
