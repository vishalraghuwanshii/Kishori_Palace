"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Essential",
    positioning: "Intimate Elegance",
    features: [
      "Access to Grand Banquet Hall",
      "Standard Floral Decor",
      "Essential Catering (Veg)",
      "Standard Lighting & Audio",
    ]
  },
  {
    name: "Signature",
    positioning: "The Royal Standard",
    features: [
      "Banquet Hall & Lawn Access",
      "Premium Floral Decor",
      "Extensive Catering Spread",
      "10 Luxury AC Suites",
      "Dedicated Event Manager",
    ]
  },
  {
    name: "Grand Royal",
    positioning: "Absolute Opulence",
    features: [
      "Full Property Exclusive Access",
      "Bespoke Thematic Decor",
      "Gourmet Multi-Cuisine Catering",
      "All 18 Luxury AC Suites",
      "Premium Sound & Lighting",
    ]
  }
];

export function PackagesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
            Curated Experiences
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
            Bespoke <span className="italic text-primary">Celebrations</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-primary/20 mb-24"
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="py-12 lg:py-0 px-8 flex flex-col"
            >
              <div className="mb-12 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {pkg.positioning}
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
                  {pkg.name}
                </h3>
                <div className="w-12 h-px bg-primary mx-auto" />
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground font-light">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto text-center">
                <Link 
                  href="/packages" 
                  className="text-xs uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 h-14 px-12 text-xs tracking-[0.15em] uppercase rounded-none">
            <Link href="/contact">
              Inquire Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
