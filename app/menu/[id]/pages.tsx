// Individual menu item page is disabled - using modal instead
// This file is kept for reference but the route is not used

/*
import { notFound } from "next/navigation";
import { MENU_ITEMS } from "@/lib/data";
import ProductClient from "./ProductClient";

// Generate static params for all menu items at build time
export async function generateStaticParams() {
  return MENU_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const item = MENU_ITEMS.find((i) => i.id === resolvedParams.id);

  if (!item) {
    notFound();
  }

  // Get "You May Also Like" items (same category, excluding current)
  // For static generation, we'll use a deterministic approach instead of random
  const relatedItems = MENU_ITEMS.filter(
    (i) => i.category === item.category && i.id !== item.id
  ).slice(0, 3);

  return <ProductClient item={item} relatedItems={relatedItems} />;
}
*/

// Placeholder to prevent Next.js errors
export default function DisabledPage() {
  return null;
}
