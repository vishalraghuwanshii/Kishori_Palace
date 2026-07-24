"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutStrip() {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-xs uppercase tracking-[0.2em] text-primary mb-6"
          >
            A Legacy of Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1]"
          >
            Where Heritage Meets <br className="hidden md:block" /><span className="italic text-primary">Modern Grandeur</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-px h-12 bg-primary/30 mb-8 ml-2"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
          >
            Kishori Palace stands as Ashoknagar's premier destination for exquisite celebrations. From intimate gatherings to royal weddings, our spaces are meticulously crafted to provide unparalleled luxury and five-star hospitality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10"
          >
            <Link 
              href="/about" 
              className="inline-block border-b border-primary pb-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Imagery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6 mt-16 lg:mt-0 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] overflow-hidden group border border-[#C8A968]/20 mt-12 md:mt-24"
          >
            <div className="absolute inset-0 bg-lantern-glow mix-blend-screen opacity-20 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
            <Image 
              src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay.webp" 
              alt="Kishori Palace Aerial View" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-full aspect-[4/5] overflow-hidden group border border-[#C8A968]/20 mb-12 md:mb-24"
          >
            <div className="absolute inset-0 bg-lantern-glow mix-blend-screen opacity-20 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
            <Image 
              src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay5.webp" 
              alt="Kishori Palace Grand Exterior" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  );
}
