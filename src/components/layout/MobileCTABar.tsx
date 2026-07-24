"use client";

import { Phone, MessageCircle } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      <a 
        href="tel:+917880291335" 
        className="flex-1 flex items-center justify-center gap-2 bg-card text-foreground font-medium text-sm border-t border-r border-border hover:bg-muted transition-colors active:bg-muted"
      >
        <Phone className="h-5 w-5 text-primary" />
        Call Now
      </a>
      <a 
        href="https://wa.me/917880291335?text=Hello%20Kishori%20Palace,%20I%20would%20like%20to%20inquire%20about%20your%20venue." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-emerald-700 text-white font-medium text-sm border-t border-emerald-600 hover:bg-emerald-600 transition-colors active:bg-emerald-800"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
