"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The venue is absolutely stunning. The grand hall and the lawn provided the perfect backdrop for our wedding. The staff went above and beyond to ensure everything was flawless.",
    name: "Rahul & Neha",
    event: "Wedding, March 2025",
  },
  {
    quote: "We hosted our corporate offsite here, and the facilities were top-notch. The 24x7 power backup and excellent catering made our event a huge success.",
    name: "Amit Sharma",
    event: "Corporate Event, Jan 2025",
  },
  {
    quote: "The 18 AC suites were a lifesaver for our out-of-town guests. Everyone praised the luxury feel of the property and the beautiful nighttime lighting.",
    name: "Priya Singh",
    event: "Reception, Dec 2024",
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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

    // Auto-advance
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-32 bg-secondary border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 text-left w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Words From Our Guests
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-8">
              Enduring <br className="hidden lg:block"/><span className="italic text-primary">Memories</span>
            </h2>
            <div className="w-12 h-px bg-primary/30" />
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:w-2/3 w-full">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 md:px-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-left relative flex flex-col items-start"
                  >
                    <Quote className="w-8 h-8 text-primary/40 mb-8" />
                    
                    <p className="font-heading text-2xl md:text-4xl text-foreground leading-[1.4] mb-12 font-light">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-px bg-primary mb-6" />
                      <div className="font-heading text-xl text-foreground mb-2">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{testimonial.event}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-start gap-4 mt-16 px-4 md:px-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all duration-500 ease-out ${
                  index === selectedIndex 
                    ? "w-12 h-px bg-primary" 
                    : "w-4 h-px bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
