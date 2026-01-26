export const dynamic = "force-static";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ChefSection } from "@/components/sections/ChefSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapSection } from "@/components/sections/MapSection";
import { Gallery } from "@/components/sections/Gallery";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { About } from "@/components/sections/About";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-secondary">
      <SiteHeader />
      <main>
        <HeroSection />
        <Gallery />
        <About />
        <ChefSection />
        <TestimonialsSection />
        <MapSection
          embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434510563!2d-122.41941568468034!3d37.774929779759454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7f0e5f43%3A0x4f6a0f0f0f0f0f0f!2sHarbor%20%26%20Hearth%20Kitchen!5e0!3m2!1sen!2sus!4v1700000000000"
          address="128 Harbor Street, Seaside Town, CA 93900"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
