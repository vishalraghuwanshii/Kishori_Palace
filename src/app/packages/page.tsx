"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Grand Banquet Hall Access",
  "Landscaped Lawn Access",
  "Standard Decor Setup",
  "Premium Thematic Decor",
  "Essential Catering (Veg)",
  "Gourmet Multi-Cuisine Catering",
  "Standard Lighting & Audio",
  "Premium Sound, Lighting & DJ",
  "10 Luxury AC Rooms",
  "All 18 Luxury AC Rooms",
  "Dedicated Event Manager",
  "Valet Parking Service"
];

const packages = [
  {
    name: "Essential",
    description: "Perfect for intimate celebrations and one-day events.",
    price: "Custom Pricing",
    highlight: false,
    inclusions: [
      true, false, true, false, true, false, true, false, false, false, false, false
    ]
  },
  {
    name: "Signature",
    description: "Our most popular offering for traditional grand weddings.",
    price: "Custom Pricing",
    highlight: true,
    inclusions: [
      true, true, true, true, false, true, true, false, true, false, true, false
    ]
  },
  {
    name: "Royal",
    description: "The ultimate luxury experience with exclusive property access.",
    price: "Custom Pricing",
    highlight: false,
    inclusions: [
      true, true, true, true, false, true, true, true, false, true, true, true
    ]
  }
];

export default function PackagesPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-medium text-foreground mb-6">
            Wedding Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully curated experiences to make your special day seamless, spectacular, and entirely yours.
          </p>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View (Cards) */}
        <div className="lg:hidden space-y-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-card rounded-2xl p-8 border ${
                pkg.highlight ? "border-primary shadow-[0_8px_30px_rgba(201,162,39,0.15)] relative" : "border-border shadow-lg"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h2 className="font-heading text-3xl font-medium text-foreground mb-2">{pkg.name}</h2>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>
              <div className="text-2xl font-semibold mb-8 pb-8 border-b border-border">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, fIdx) => {
                  const included = pkg.inclusions[fIdx];
                  if (!included) return null; // Only show included in mobile to save space
                  return (
                    <li key={fIdx} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <Button asChild className={`w-full h-12 text-base ${pkg.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}>
                <Link href={`/contact?package=${pkg.name.toLowerCase()}`}>
                  Enquire Now
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Desktop View (Table Matrix) */}
        <div className="hidden lg:block overflow-x-auto pb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 p-6 border-b border-border bg-background/50 backdrop-blur-sm sticky top-20 z-10">
                  <span className="sr-only">Features</span>
                </th>
                {packages.map((pkg, idx) => (
                  <th key={idx} className={`w-1/4 p-6 border-b border-border bg-background/50 backdrop-blur-sm sticky top-20 z-10 align-top ${
                    pkg.highlight ? "bg-primary/5 rounded-t-2xl relative" : ""
                  }`}>
                    {pkg.highlight && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                        Most Popular
                      </div>
                    )}
                    <h2 className="font-heading text-3xl font-medium text-foreground mb-2">{pkg.name}</h2>
                    <p className="text-sm text-muted-foreground mb-6 font-normal min-h-[40px]">{pkg.description}</p>
                    <div className="text-xl font-semibold mb-6">{pkg.price}</div>
                    <Button asChild className={`w-full h-12 text-base ${pkg.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                      <Link href={`/contact?package=${pkg.name.toLowerCase()}`}>
                        Enquire Now
                      </Link>
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fIdx) => (
                <tr key={fIdx} className="hover:bg-muted/50 transition-colors">
                  <td className="p-6 border-b border-border text-foreground font-medium">
                    {feature}
                  </td>
                  {packages.map((pkg, pIdx) => (
                    <td key={pIdx} className={`p-6 border-b border-border text-center ${
                      pkg.highlight ? "bg-primary/5" : ""
                    }`}>
                      {pkg.inclusions[fIdx] ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Bottom rounded corners for highlight column */}
              <tr>
                <td></td>
                {packages.map((pkg, idx) => (
                  <td key={idx} className={pkg.highlight ? "bg-primary/5 rounded-b-2xl h-4" : ""}></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom & A La Carte */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Info className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
            Custom A La Carte Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Every wedding is unique. If our standard packages don't fit your exact vision, we offer fully customizable à la carte services. From specialized thematic decor to personalized culinary experiences, our team will work with you to tailor everything to your requirements.
          </p>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <Link href="/contact?subject=Custom Package Inquiry">
              Request a Custom Quote
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
