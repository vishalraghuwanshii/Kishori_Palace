"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  { image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Room-11.webp", title: "Luxury Suite", desc: "Our most spacious offering with a private lounge." },
  { image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-8.webp", title: "Deluxe AC Room", desc: "Elegant comfort with modern amenities." },
  { image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-9.webp", title: "Premium Suite", desc: "Designed for the couple, offering unmatched privacy." },
  { image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-photo.webp", title: "Family Room", desc: "Spacious quarters for your closest guests." },
];

export function RoomPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Rest & Rejuvenate
            </p>
            <h2 className="font-heading text-3xl md:text-6xl font-light text-foreground mb-6">
              Resort <span className="italic text-primary">Living</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              18 fully air-conditioned luxury rooms designed for unparalleled comfort, ensuring your guests rest as well as they celebrate.
            </p>
          </div>
          
          <div className="flex items-center gap-6 hidden md:flex">
            <button 
              onClick={() => emblaApi?.scrollPrev()} 
              disabled={!canScrollPrev}
              className="p-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()} 
              disabled={!canScrollNext}
              className="p-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4 md:gap-12 ml-0">
              {rooms.map((room, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_40%] min-w-0"
                >
                  <Link href="/venue#rooms" className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-8">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-heading text-2xl font-light text-foreground mb-3">{room.title}</h3>
                      <div className="w-8 h-px bg-primary mb-4" />
                      <p className="text-muted-foreground font-light text-sm">{room.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
