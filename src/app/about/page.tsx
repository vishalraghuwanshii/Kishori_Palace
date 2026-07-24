"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Uncompromising Quality",
      description: "From our architecture to our culinary offerings, we settle for nothing less than absolute perfection."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Heartfelt Hospitality",
      description: "We treat every guest like family, ensuring a warm, welcoming, and seamless experience."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Trust & Reliability",
      description: "Your special day is safe in our hands. We deliver on our promises with absolute professionalism."
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 md:py-32 relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/media/HotelDroneDay1.JPG')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm tracking-[0.08em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6">
              About Kishori Palace
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ashoknagar's benchmark for luxury hospitality and grand celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
              A Vision of <span className="text-primary italic">Elegance</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kishori Palace was born out of a simple yet profound vision: to provide Ashoknagar with a world-class destination for grand celebrations. Before our inception, hosting a truly luxurious event meant compromising on space or traveling to distant cities.
              </p>
              <p>
                We changed that by creating a sprawling property that combines modern architectural brilliance with timeless Indian hospitality. Whether it's a wedding of 1,000 guests or an intimate corporate retreat, our venue was designed from the ground up to adapt, impress, and deliver.
              </p>
              <p>
                Today, Kishori Palace stands not just as a banquet hall or a resort, but as a landmark of joy—a place where the most important moments of your life are transformed into beautiful, enduring memories.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <Image
              src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneCloseupshotoflogo2.webp"
              alt="Kishori Palace Exterior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-background border border-border text-primary shadow-lg mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
