import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";

export function PageLayout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none z-[0] ambient-glow" />
      <div className="fixed inset-0 pointer-events-none grain-overlay z-[1]" />
      <div className="relative z-[2]">
        <Navigation />
        {children}
        {showFooter && <FooterSection />}
      </div>
    </div>
  );
}
