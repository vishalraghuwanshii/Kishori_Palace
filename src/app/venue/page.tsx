"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize, Users, Snowflake, Sparkles } from "lucide-react";

export default function VenuePage() {
  const sections = [
    {
      id: "hall",
      title: "Grand Banquet Hall",
      description: "Our crown jewel. A sprawling, pillar-less architectural marvel designed to host majestic events. High ceilings, intricate chandeliers, and state-of-the-art acoustics make this the perfect canvas for your grandest celebrations.",
      specs: [
        { label: "Area", value: "15,000 sq ft", icon: <Maximize className="w-5 h-5" /> },
        { label: "Capacity", value: "800 - 1,000 Guests", icon: <Users className="w-5 h-5" /> },
        { label: "Climate Control", value: "Fully Air Conditioned", icon: <Snowflake className="w-5 h-5" /> },
      ],
      image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet Hall.JPG",
      reverse: false,
    },
    {
      id: "lawn",
      title: "Landscaped Lawn",
      description: "Step out into nature's embrace. Our expansive, meticulously manicured lawn offers a breathtaking open-air setting for evening receptions, winter weddings, and large-scale social gatherings under the stars.",
      specs: [
        { label: "Area", value: "12,000 sq ft", icon: <Maximize className="w-5 h-5" /> },
        { label: "Capacity", value: "1,000+ Guests", icon: <Users className="w-5 h-5" /> },
        { label: "Vibe", value: "Open-air Elegance", icon: <Sparkles className="w-5 h-5" /> },
      ],
      image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Garden.JPG",
      reverse: true,
    },
    {
      id: "rooms",
      title: "Luxury Rooms",
      description: "18 exquisitely designed, fully air-conditioned rooms featuring premium bedding, modern attached bathrooms, and 24x7 room service. Your guests will experience true five-star hospitality throughout their stay.",
      specs: [
        { label: "Inventory", value: "18 AC Rooms", icon: <Maximize className="w-5 h-5" /> },
        { label: "Amenities", value: "En-suite Bath, WiFi, TV", icon: <Sparkles className="w-5 h-5" /> },
      ],
      image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Room-11.JPG",
      reverse: false,
    },
    {
      id: "pool",
      title: "Swimming Pool",
      description: "A pristine pool area perfect for intimate pre-wedding functions like Haldi or Mehendi, or simply for your guests to relax and unwind before the main event.",
      specs: [
        { label: "Access", value: "Exclusive for Guests", icon: <Users className="w-5 h-5" /> },
        { label: "Ideal For", value: "Haldi, Pool Parties", icon: <Sparkles className="w-5 h-5" /> },
      ],
      image: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Pool.JPG",
      reverse: true,
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 md:py-32 relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/media/HotelNight-2.JPG')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6">
              The Venue
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our diverse spaces designed to bring your dream celebrations to life. From grand indoor halls to starlit lawns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation (Desktop) */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8 py-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Sections */}
      <div className="py-12 md:py-24 space-y-24 md:space-y-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border ${section.reverse ? 'lg:order-last' : ''}`}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {section.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-secondary border border-border">
                      <div className="text-primary">{spec.icon}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{spec.label}</div>
                      <div className="font-medium text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
