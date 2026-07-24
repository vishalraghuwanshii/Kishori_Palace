"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Subtle emerald tint as requested in PRD 6.11 */}
      <div className="absolute inset-0 bg-[#1F5E52]/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight">
          Let's Plan Your <span className="text-primary italic">Perfect Celebration</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our team is ready to help you create an unforgettable event. Reach out to check availability and discuss your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button asChild size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(201,162,39,0.2)]">
            <a href="tel:+917880291335">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-emerald-600/30 bg-emerald-600/10 text-foreground hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
            <a href="https://wa.me/917880291335" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
