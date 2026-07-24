"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center">
      {/* Cinematic Background Video */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="relative w-full h-full bg-black">
          <video
            src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </motion.div>

      {/* Subtle Scrim for text legibility */}
      <div className="absolute inset-0 z-10 bg-[#14100D]/50" />
      
      {/* Bottom shadow fade to seamlessly blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 z-10 bg-gradient-to-t from-[#14100D] to-transparent" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-5xl flex flex-col items-center mt-0 md:mt-[10vh] relative"
        >
          {/* Signature Lantern Glow Element */}
          <div className="absolute inset-0 -z-10 bg-lantern-glow mix-blend-screen scale-150 pointer-events-none" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#C8A968]/40" />
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[#F2ECE1]/90">
              Welcome to Ashoknagar's Crown Jewel
            </p>
            <div className="w-12 h-px bg-[#C8A968]/40" />
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F2ECE1] leading-[1.1] mb-6 md:mb-10 drop-shadow-2xl">
            A Timeless <br className="hidden md:block" />
            <span className="italic text-[#F2ECE1]/90">Heritage</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#F2ECE1]/80 leading-relaxed max-w-2xl font-light tracking-[0.05em] mb-8 md:mb-12 drop-shadow-md">
            Discover a sanctuary of unparalleled luxury, where classic elegance meets modern grandeur for your most cherished celebrations.
          </p>
          
          <Link 
            href="/venue"
            className="group flex flex-col items-center gap-2 transition-all duration-500 hover:opacity-70"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A968]">Explore the Palace</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#C8A968] to-transparent mt-2 transition-all duration-500 group-hover:h-16" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
