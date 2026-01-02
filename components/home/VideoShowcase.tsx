"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { SHOWCASE_VIDEOS } from "@/lib/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

export default function VideoShowcase() {
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    // Pause all videos
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play active slide video
    const currentRealIndex = swiper.realIndex;
    setActiveIndex(currentRealIndex);
    setProgress(0);

    const activeVideoId = SHOWCASE_VIDEOS[currentRealIndex]?.id;
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      videoRefs.current[activeVideoId]?.play().catch(() => {
        // Handle autoplay blocked
      });
    }
  };

  const handleTimeUpdate = (id: number) => {
    const video = videoRefs.current[id];
    if (video && id === SHOWCASE_VIDEOS[activeIndex]?.id) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      id="showcase"
      className="section-padding bg-[#FAF9F6] relative overflow-hidden border-y border-border/50"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-diamond opacity-5 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Behind the Scenes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-black mb-6 text-primary"
          >
            Momo Stories
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl italic font-serif max-w-2xl mx-auto"
          >
            Experience the artistry and passion that goes into every single
            dumpling.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto relative group-swiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={handleSlideChange}
            modules={[
              EffectCoverflow,
              Pagination,
              Navigation,
              Autoplay,
              Mousewheel,
            ]}
            className="video-swiper py-12"
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 60 },
            }}
          >
            {SHOWCASE_VIDEOS.map((video, idx) => (
              <SwiperSlide
                key={video.id}
                className="w-[300px] md:w-[350px] aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl relative group bg-black border-[6px] border-white/80 backdrop-blur-sm"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.url}
                  poster={video.poster}
                  onTimeUpdate={() => handleTimeUpdate(video.id)}
                  onEnded={handleVideoEnd}
                  muted={muted}
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end">
                  <h3 className="text-3xl font-heading font-black text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {video.title}
                  </h3>
                  <p className="text-white/80 text-base font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {video.description}
                  </p>
                </div>

                {/* Progress Bar (Functional) */}
                <div className="absolute top-4 inset-x-4 flex gap-1.5 z-20">
                  {SHOWCASE_VIDEOS.map((_, sIdx) => (
                    <div
                      key={sIdx}
                      className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md"
                    >
                      <div
                        className="h-full bg-primary transition-all duration-100 ease-linear"
                        style={{
                          width:
                            sIdx < activeIndex
                              ? "100%"
                              : sIdx === activeIndex
                              ? `${progress}%`
                              : "0%",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="mt-4 flex justify-center gap-4 relative z-20">
            <button
              onClick={() => setMuted(!muted)}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Custom Styles for Swiper Bullets */}
        <style jsx global>{`
          .video-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: var(--secondary);
            opacity: 0.3;
          }
          .video-swiper .swiper-pagination-bullet-active {
            background: var(--primary);
            width: 25px;
            border-radius: 5px;
            opacity: 1;
          }
          .video-swiper .swiper-slide-active {
            transform: scale(1.05);
            z-index: 2;
          }
        `}</style>
      </div>
    </section>
  );
}
