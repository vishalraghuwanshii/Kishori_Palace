"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Maximize, Zap, HeartHandshake, MapPin, Building2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

const reasons = [
  {
    title: "Luxury Ambience",
    description: "Elegant architecture and refined interiors throughout the property.",
    icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Spacious & Elegant Venue",
    description: "Generous banquet hall and lawn designed for grand celebrations.",
    icon: <Maximize className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Modern Infrastructure",
    description: "Fully air-conditioned rooms, 24×7 power backup, CCTV surveillance.",
    icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Professional Hospitality",
    description: "Dedicated staff ensuring a seamless experience for every guest.",
    icon: <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "Convenient Location",
    description: "Centrally located in Ashoknagar with ample secure parking.",
    icon: <MapPin className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    title: "One-Stop Destination",
    description: "Every occasion, from weddings to corporate events, hosted under one roof.",
    icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
  }
];

export function WhyChooseUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    breakpoints: {
      '(min-width: 768px)': { active: false } // Disable carousel on tablet/desktop
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-heading text-sm tracking-[0.08em] uppercase text-primary mb-4">
            The Kishori Palace Difference
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
            Why Choose Us
          </h2>
        </div>

        {/* Carousel / Grid Container */}
        <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex-[0_0_85%] min-w-0 md:flex-none p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(201,162,39,0.1)] group"
              >
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                  {reason.icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? "bg-primary w-6" : "bg-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
