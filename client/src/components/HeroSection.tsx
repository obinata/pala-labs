import { useLang } from "@/lib/i18n";
import { useEffect, useState } from "react";
import heroArtwork from "@assets/Print_-_Edited_1771177001358.png";

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
      className="relative min-h-[80vh] md:min-h-[85vh] flex items-end pb-6 md:pb-10 overflow-hidden"
    >
      <div
        className={`absolute right-0 bottom-[15%] md:bottom-[10%] w-[60%] md:w-[40%] h-[45%] md:h-[65%] pointer-events-none transition-opacity duration-[18s] delay-200 ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={heroArtwork}
          alt=""
          className="w-full h-full object-contain object-right"
          style={{
            filter: "drop-shadow(0 0 40px hsl(40 5% 97%)) drop-shadow(0 0 80px hsl(40 5% 97%))",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`transition-all duration-[1.2s] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-[clamp(1.8rem,4.5vw,4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-foreground max-w-2xl" style={{ fontFamily: "'Radley', serif", color: "#494949" }}>
            {t(
              "Pursuing a self-sovereign future for sovereign individuals",
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
