import { Hero } from "@/components/home/Hero";
import { PropertyHighlights } from "@/components/home/PropertyHighlights";
import { SignatureImage } from "@/components/home/SignatureImage";
import { AboutStrip } from "@/components/home/AboutStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { VenuePreview } from "@/components/home/VenuePreview";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { RoomPreview } from "@/components/home/RoomPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LocationSection } from "@/components/home/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyHighlights />
      <SignatureImage />
      <AboutStrip />
      <WhyChooseUs />
      <VenuePreview />
      <PackagesPreview />
      <RoomPreview />
      <Testimonials />
      <FinalCTA />
      <LocationSection />
    </>
  );
}
