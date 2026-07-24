import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 md:pt-32 pb-8 md:pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <Link href="/" className="inline-block mb-12">
            <Image src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/images/logo.png" alt="Kishori Palace Logo" width={240} height={100} className="object-contain w-auto h-24" />
          </Link>
          <div className="w-px h-16 bg-primary/30 mb-12" />
          <p className="text-sm font-heading tracking-[0.2em] uppercase text-primary mb-6">
            A Heritage of Grandeur
          </p>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Ashoknagar's premier destination for weddings, receptions, and celebrations of every kind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left mb-12 md:mb-24 border-t border-b border-border py-12">
          {/* Column 1: Visit */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 font-medium">The Palace</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Bhora Kachi, near Amahi Talab<br />
              Ashoknagar, Madhya Pradesh 473331<br />
              Open Daily · 9:00 AM – 9:00 PM
            </p>
            <a 
              href="https://maps.google.com/?q=Kishori+Palace+Ashoknagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 text-xs uppercase tracking-[0.1em] border-b border-primary text-primary pb-1 inline-block"
            >
              Get Directions
            </a>
          </div>

          {/* Column 2: Inquiries */}
          <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-12">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 font-medium">Inquiries</h4>
            <a href="tel:+919999999999" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors mb-2 block">+91 99999 99999</a>
            <a href="mailto:info@kishoripalace.com" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors mb-8 block">info@kishoripalace.com</a>
            
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-xs h-12 px-8">
              <Link href="/contact">Plan Your Event</Link>
            </Button>
          </div>

          {/* Column 3: Explore */}
          <div className="flex flex-col items-center md:items-start md:border-l md:border-border md:pl-12">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-6 font-medium">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/venue" className="hover:text-primary transition-colors">The Venues</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-[0.1em]">
          <p>© {currentYear} Kishori Palace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
