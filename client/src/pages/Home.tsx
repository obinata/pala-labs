import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { InitiativesSection } from "@/components/InitiativesSection";
import { BlogSection } from "@/components/BlogSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <InitiativesSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
