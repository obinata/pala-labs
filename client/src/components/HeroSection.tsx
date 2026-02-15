import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative h-screen flex items-end pb-24 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-ambient.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`transition-all duration-[1.2s] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground max-w-2xl">
            {t(
              "Technology for sovereign individuals",
              "自律的な個人のためのテクノロジー"
            )}
          </h1>
        </div>

        <div
          className={`mt-8 transition-all duration-[1.2s] delay-300 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-foreground/40 max-w-md leading-relaxed">
            {t(
              "A sovereign technology lab dedicated to empowering human agency through people's technology.",
              "人々のテクノロジーを通じて人間の主体性を高めることに専念するソブリン・テクノロジー・ラボ。"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
