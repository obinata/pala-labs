import { PageLayout } from "@/components/PageLayout";
import { AboutSection } from "@/components/AboutSection";
import { useScrollReveal } from "@/lib/useScrollReveal";

function AboutIntroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-20 md:py-40">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 md:px-12 transition-all duration-[1s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
          About
        </p>
        <p className="text-2xl md:text-3xl font-normal leading-[1.4] max-w-xl" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
          Pala Labs is the xxxxxxxxxxxxxxxxxxx
        </p>
      </div>
    </section>
  );
}

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <div className="pt-14">
        <AboutIntroSection />
        <AboutSection />
      </div>
    </PageLayout>
  );
}
