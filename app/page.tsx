import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import AboutSection from "@/components/home/AboutSection";
import VideoShowcase from "@/components/home/VideoShowcase";
// import { useCartStore } from "@/store/cartStore";

export default function Home() {
  // const { addItem } = useCartStore();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <VideoShowcase />
      <AboutSection />
    </div>
  );
}
