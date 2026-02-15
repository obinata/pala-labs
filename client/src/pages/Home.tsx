import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { InitiativesSection } from "@/components/InitiativesSection";
import { BlogSection } from "@/components/BlogSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none grain-overlay z-[1]" />
      <div className="relative z-[2]">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <InitiativesSection />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
}
