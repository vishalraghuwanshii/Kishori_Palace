"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutStrip() {
  return (
    <section className="py-16 md:py-48 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
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
            className="font-heading text-3xl md:text-6xl font-light text-foreground mb-8 leading-[1.1]"
          >
            Where Heritage Meets <span className="italic text-primary">Modern Grandeur</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-px h-16 bg-primary/30 mb-8"
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
            className="mt-12"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-8 relative aspect-[16/10] md:aspect-[21/9] overflow-hidden group"
          >
            <Image 
              src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay.JPG" 
              alt="Grand Banquet Hall" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="md:col-span-4 relative aspect-[4/5] overflow-hidden mt-6 md:mt-32 md:-ml-24 z-10 border-4 md:border-8 border-background group shadow-2xl"
          >
            <Image 
              src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Reception desk.JPG" 
              alt="Lush Lawns" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
