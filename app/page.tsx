import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import AboutSection from "@/components/home/AboutSection";
// import { useCartStore } from "@/store/cartStore";

export default function Home() {
  // const { addItem } = useCartStore();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
    </div>
  );
}
