"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Balcony", "Banquet", "Gallery", "Hotel", "Lawn", "Other", "Pool", "Reception", "Rooms"];

const images = [
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Balcony.JPG", category: "Balcony", alt: "Balcony" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet Hall.JPG", category: "Banquet", alt: "Banquet Hall" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet Hall2.JPG", category: "Banquet", alt: "Banquet Hall2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet_DSC01255.JPG", category: "Banquet", alt: "Banquet_DSC01255" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet_DSC01256.JPG", category: "Banquet", alt: "Banquet_DSC01256" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Banquet_DSC01257.JPG", category: "Banquet", alt: "Banquet_DSC01257" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/DSC01281.JPG", category: "Other", alt: "DSC01281" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/DSC01282.JPG", category: "Other", alt: "DSC01282" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Gallery-2.JPG", category: "Gallery", alt: "Gallery-2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Gallery-3.JPG", category: "Gallery", alt: "Gallery-3" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Gallery-4.JPG", category: "Gallery", alt: "Gallery-4" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Gallery-sitting.JPG", category: "Gallery", alt: "Gallery-sitting" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Gallery.JPG", category: "Gallery", alt: "Gallery" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Garden.JPG", category: "Lawn", alt: "Garden" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Hotel-night.JPG", category: "Hotel", alt: "Hotel-night" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneCloseupshotoflogo2.JPG", category: "Hotel", alt: "HotelDroneCloseupshotoflogo2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay.JPG", category: "Hotel", alt: "HotelDroneDay" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay1.JPG", category: "Hotel", alt: "HotelDroneDay1" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay10.JPG", category: "Hotel", alt: "HotelDroneDay10" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay3.JPG", category: "Hotel", alt: "HotelDroneDay3" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay5.JPG", category: "Hotel", alt: "HotelDroneDay5" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay6.JPG", category: "Hotel", alt: "HotelDroneDay6" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay7.JPG", category: "Hotel", alt: "HotelDroneDay7" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDay8.JPG", category: "Hotel", alt: "HotelDroneDay8" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDayFarAway.JPG", category: "Hotel", alt: "HotelDroneDayFarAway" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelDroneDayHovering onLogo.JPG", category: "Hotel", alt: "HotelDroneDayHovering onLogo" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/HotelNight-2.JPG", category: "Hotel", alt: "HotelNight-2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Hotelnight-4.JPG", category: "Hotel", alt: "Hotelnight-4" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Hotelnight-5.JPG", category: "Hotel", alt: "Hotelnight-5" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Pool.JPG", category: "Pool", alt: "Pool" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Pool2.JPG", category: "Pool", alt: "Pool2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Reception desk-2.JPG", category: "Reception", alt: "Reception desk-2" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Reception desk.JPG", category: "Reception", alt: "Reception desk" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Room-11.JPG", category: "Rooms", alt: "Room-11" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Room-6.JPG", category: "Rooms", alt: "Room-6" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01260.JPG", category: "Rooms", alt: "Rooms_DSC01260" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01261.JPG", category: "Rooms", alt: "Rooms_DSC01261" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01262.JPG", category: "Rooms", alt: "Rooms_DSC01262" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01263.JPG", category: "Rooms", alt: "Rooms_DSC01263" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01264.JPG", category: "Rooms", alt: "Rooms_DSC01264" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01265.JPG", category: "Rooms", alt: "Rooms_DSC01265" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01266.JPG", category: "Rooms", alt: "Rooms_DSC01266" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01267.JPG", category: "Rooms", alt: "Rooms_DSC01267" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01271.JPG", category: "Rooms", alt: "Rooms_DSC01271" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/Rooms_DSC01272.JPG", category: "Rooms", alt: "Rooms_DSC01272" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/balcony-night.JPG", category: "Balcony", alt: "balcony-night" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/gallery painting.JPG", category: "Gallery", alt: "gallery painting" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/pool-wateerfall photo.JPG", category: "Pool", alt: "pool-wateerfall photo" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-8.JPG", category: "Rooms", alt: "room-8" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-9.JPG", category: "Rooms", alt: "room-9" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-bathroom.JPG", category: "Rooms", alt: "room-bathroom" },
  { src: "https://pub-d85a0963552a45eaa4638691f287aaaa.r2.dev/media/room-photo.JPG", category: "Rooms", alt: "room-photo" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const filteredImages = images.filter(
    img => activeFilter === "All" || img.category === activeFilter
  );

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-secondary border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through Kishori Palace. Discover the elegance, the scale, and the memories we create.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(201,162,39,0.3)]"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                key={img.src + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium tracking-wide uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
