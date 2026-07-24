"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Venue", href: "/venue" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b ${
        isScrolled
          ? "bg-white/85 backdrop-blur-2xl border-border/50 py-4 shadow-sm"
          : "bg-white/50 backdrop-blur-md border-border/20 py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/images/logo.png" 
                alt="Kishori Palace Logo" 
                width={180} 
                height={60} 
                className="object-contain h-12 md:h-14 w-auto transition-transform duration-500 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact"
              className="text-xs uppercase tracking-[0.15em] text-foreground border border-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-500 rounded-none"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-foreground p-2 hover:text-primary transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white/90 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/images/logo.png" alt="Kishori Palace Logo" width={150} height={50} className="object-contain h-12 w-auto" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground p-2"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 flex-1 items-center justify-center -mt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-4xl font-light text-foreground hover:text-primary transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 mt-auto"
            >
               <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-xs uppercase tracking-[0.2em] bg-foreground text-background py-5 hover:bg-primary transition-colors"
                >
                  Enquire Now
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
