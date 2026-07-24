"use client";

import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section className="py-16 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Details Side */}
          <div className="flex flex-col lg:order-1 order-2">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Visit Us
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-8">
              Find <span className="italic text-primary">Kishori Palace</span>
            </h2>
            <div className="w-12 h-px bg-primary/30 mb-10" />
            
            <div className="space-y-12 mb-12">
              <div className="flex gap-6">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-3">Address</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Bhora Kachi, near Amahi Talab,<br />
                    Ashoknagar, Madhya Pradesh 473331
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-3">Business Hours</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Open Daily · 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="w-full sm:w-max h-14 px-10 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none uppercase tracking-[0.15em] text-xs transition-all duration-500">
              <a href="https://maps.google.com/?q=Kishori+Palace+Ashoknagar" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map Side */}
          <div className="h-[500px] w-full bg-muted relative border border-border lg:order-2 order-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.896791696014!2d77.7289945!3d24.5765955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3970b55555555555%3A0x1234567890abcdef!2sAshoknagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale opacity-80 mix-blend-multiply"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
