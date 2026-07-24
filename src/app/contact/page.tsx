"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-medium text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start planning your perfect event? Reach out to our team to check availability, schedule a tour, or request a custom quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-medium text-foreground mb-8">
              Send us an Inquiry
            </h2>

            {isSubmitted ? (
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your inquiry has been received. Our events team will get back to you within 24 hours to discuss your celebration.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="John Doe" className="bg-secondary/50 border-border h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="+91 99999 99999" className="bg-secondary/50 border-border h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-secondary/50 border-border h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Expected Event Date</Label>
                    <Input id="eventDate" type="date" className="bg-secondary/50 border-border h-12 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <select id="eventType" className="flex h-12 w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground">
                    <option value="" disabled selected>Select event type...</option>
                    <option value="wedding">Wedding / Reception</option>
                    <option value="pre-wedding">Pre-Wedding (Haldi, Mehendi)</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday / Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Specific Requirements</Label>
                  <Textarea id="message" placeholder="Tell us about your estimated guest count, preferred package, etc." className="bg-secondary/50 border-border min-h-[120px] resize-y" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(201,162,39,0.2)] transition-all">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Details & Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-lg">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-foreground">
                      Bhora Kachi, near Amahi Talab,<br />
                      Ashoknagar, Madhya Pradesh 473331
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</h4>
                    <a href="tel:+919999999999" className="text-foreground hover:text-primary transition-colors">+91 99999 99999</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:info@kishoripalace.com" className="text-foreground hover:text-primary transition-colors">info@kishoripalace.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</h4>
                    <p className="text-foreground">Everyday: 9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-grow rounded-2xl overflow-hidden border border-border shadow-lg min-h-[300px] relative bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.896791696014!2d77.7289945!3d24.5765955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3970b55555555555%3A0x1234567890abcdef!2sAshoknagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
