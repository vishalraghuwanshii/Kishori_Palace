"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const leftColumnSpaces = [
  {
    name: "The Grand Banquet",
    desc: "A pillarless hall designed for royal celebrations.",
    image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet Hall.JPG",
    aspect: "aspect-[16/10] md:aspect-[4/3]",
  },
  {
    name: "Luxury Suites",
    desc: "Rest and prepare in absolute opulence.",
    image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-photo.JPG",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
  }
];

const rightColumnSpaces = [
  {
    name: "The Royal Lawn",
    desc: "Lush, open skies for majestic evening receptions.",
    image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Garden.JPG",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
  },
  {
    name: "The Oasis Pool",
    desc: "A tranquil setting for intimate gatherings.",
    image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/pool-wateerfall photo.JPG",
    aspect: "aspect-[16/10] md:aspect-[4/3]",
  }
];

export function VenuePreview() {
  return (
    <section className="py-16 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Our <span className="italic text-primary">Sanctuaries</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Every corner of Kishori Palace is designed to elevate your celebration. Discover our curated collection of indoor and outdoor venues.
            </p>
          </div>
          <Link 
            href="/venue" 
            className="inline-block border-b border-primary pb-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            Explore All Venues
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-24">
            {leftColumnSpaces.map((space, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="group cursor-pointer flex flex-col"
              >
                <div className={`relative overflow-hidden mb-6 ${space.aspect}`}>
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-2">
                  {space.name}
                </h3>
                <p className="text-muted-foreground font-light">
                  {space.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Staggered) */}
          <div className="flex flex-col gap-8 md:gap-24 mt-8 md:mt-32">
            {rightColumnSpaces.map((space, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="group cursor-pointer flex flex-col"
              >
                <div className={`relative overflow-hidden mb-6 ${space.aspect}`}>
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-2">
                  {space.name}
                </h3>
                <p className="text-muted-foreground font-light">
                  {space.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
