import { PageLayout } from "@/components/PageLayout";
import { AboutSection } from "@/components/AboutSection";
import { useScrollReveal } from "@/lib/useScrollReveal";

function AboutIntroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative pt-20 md:pt-40 pb-0">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 md:px-12 transition-all duration-[1s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
          About
        </p>
        <p className="text-2xl md:text-3xl font-normal leading-[1.4]" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
          Pala Labs is a curator and guide for Sovereign Technology.
        </p>
        <p className="mt-8 md:mt-12 text-sm leading-[1.8]" style={{ color: "#666666" }}>
          Sovereign Technology - technology designed to protect the autonomy of its users; open-source, verifiable, and built to serve whether for individuals, communities, and nations. We select what matters in this movement and deliver it to the world through governance tools, education, and community.
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
