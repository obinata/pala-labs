import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-ambient.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            {t("Sovereign Technology Lab", "ソブリン・テクノロジー・ラボ")}
          </p>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground transition-all duration-1000 delay-200 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t(
            "Technology for Sovereign Individuals",
            "自律的な個人のためのテクノロジー"
          )}
        </h1>

        <p
          className={`mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t(
            "Empowering human agency through people's technology — tools that liberate, not control.",
            "人々のテクノロジーを通じて人間の主体性を高める — 支配ではなく解放するツールを。"
          )}
        </p>

        <div
          className={`mt-12 transition-all duration-1000 delay-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            data-testid="button-scroll-down"
          >
            <span>{t("Explore", "探索する")}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
