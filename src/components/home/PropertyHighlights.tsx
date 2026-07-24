"use client";

import { useEffect, useState, useRef } from "react";
import { Bed, Users, Car, MapPin, Tent, Zap, Utensils } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="mb-4 p-3 rounded-full bg-background/50 border border-border shadow-[0_0_15px_rgba(201,162,39,0.05)] text-primary">
        {icon}
      </div>
      <div className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

export function PropertyHighlights() {
  const stats = [
    { icon: <Bed className="w-6 h-6" strokeWidth={1.5} />, value: "18", label: "Luxury AC Rooms" },
    { icon: <Users className="w-6 h-6" strokeWidth={1.5} />, value: "1,000+", label: "Guest Capacity" },
    { icon: <Tent className="w-6 h-6" strokeWidth={1.5} />, value: "1", label: "Grand Banquet Hall" },
    { icon: <Utensils className="w-6 h-6" strokeWidth={1.5} />, value: "1", label: "Catering Service" },
    { icon: <Car className="w-6 h-6" strokeWidth={1.5} />, value: "150+", label: "Parking Capacity" },
    { icon: <Zap className="w-6 h-6" strokeWidth={1.5} />, value: "24×7", label: "Power Backup" },
  ];

  return (
    <section className="w-full bg-secondary py-16 md:py-24 border-b border-border relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
