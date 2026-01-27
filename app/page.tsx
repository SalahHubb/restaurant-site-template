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
        <MapSection />
      </main>
      <SiteFooter />
    </div>
  );
}
