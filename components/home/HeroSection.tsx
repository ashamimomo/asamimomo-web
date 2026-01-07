"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/hero/hero-1.jpg",
    subtitle: "Authentic Himalayan Taste",
    title: "HANDCRAFTED MOMOS",
    description:
      "Experience the finest dumplings, steamed to perfection with traditional spices of Nepal.",
  },
  {
    id: 2,
    image: "/hero/hero-2.png",
    subtitle: "Newari Spices & Heritage",
    title: "SPICY CHOILA",
    description:
      "Grilled to smoky perfection and tossed in a vibrant blend of Himalayan herbs.",
  },
  {
    id: 3,
    image: "/hero/hero-3.jpg",
    subtitle: "The King of Flavors",
    title: "PORK CHILLI",
    description:
      "A fragrant symphony of long-grain basmati rice, tender meat, and royal spices.",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        direction="horizontal"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.div style={{ y }} className="relative h-[120%] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
              <Image
                src="/ashami-logo.jpg"
                alt="Logo"
                width={1000}
                height={1000}
                className="relative z-10 h-50 w-50 object-contain rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 mb-6"
              />
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-3 py-2 rounded-full bg-primary/70 border border-secondary/30 backdrop-blur-md mb-6"
                >
                  <span className="text-white font-black tracking-widest uppercase text-xs">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold mb-6 tracking-tight text-white drop-shadow-2xl"
                >
                  <span className="block text-secondary">{slide.title}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 text-center font-sans"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-center flex-col sm:flex-row gap-6"
                >
                  <Link href="/menu">
                    <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-2xl shadow-primary/30 group">
                      Explore Menu{" "}
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="px-10 py-5 rounded-full font-bold text-xl border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95">
                      Visit Us
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-6">
          <div className="hero-pagination flex gap-2 !static !w-auto" />
          <div className="flex gap-3">
            <button className="hero-prev w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="hero-next w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Swiper>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 border-[16px] border-white/5 opacity-20" />

      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: var(--primary);
          width: 60px;
        }
      `}</style>
    </section>
  );
}
