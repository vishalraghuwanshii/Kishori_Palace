"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SignatureImage() {
  return (
    <section className="relative w-full h-[40vh] md:h-[80vh]">
      <div className="absolute inset-0">
        <Image 
          src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet%20Hall.webp"
          alt="The Grand Banquet Hall"
          fill
          className="object-cover"
        />
        {/* Subtle scrim just enough to make the small text legible if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100D]/80 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#F2ECE1]/70 text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans"
        >
          The Grand Banquet Hall — Setting the standard for luxury celebrations.
        </motion.p>
      </div>
    </section>
  );
}
