import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Ashami Momo - Authentic Nepalese Cuisine",
  description:
    "Explore our diverse menu featuring Momos, Chow Mein, Chili, and more. Authentic flavors made fresh.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
