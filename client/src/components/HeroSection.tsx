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
      className="relative h-screen flex flex-col justify-end pb-6 md:pb-10 overflow-hidden"
    >
      <div
        className={`absolute right-0 bottom-[35%] sm:bottom-[15%] md:bottom-[10%] w-[50%] sm:w-[60%] md:w-[40%] h-[35%] sm:h-[45%] md:h-[65%] pointer-events-none transition-opacity duration-[18s] delay-200 ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={heroArtwork}
          alt=""
          className="w-full h-full object-contain object-right mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div
          className={`transition-all duration-[1.2s] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-[clamp(1.5rem,3.5vw,3rem)] font-normal leading-[1.1] tracking-[-0.01em] text-foreground max-w-2xl" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949", whiteSpace: "pre-line" }}>
            {t(
              "The lab for sovereign technology and sovereign individuals.",
              "人間のためのテクノロジーを\n自由な個人の手に"
            )}
          </h1>
        </div>

        <div
          className={`mt-8 transition-all duration-[1.2s] delay-300 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm max-w-md leading-relaxed" style={{ color: "#666666", whiteSpace: "pre-line" }}>
            {t(
              "Research, advocacy, and community for a self-sovereign future.",
              "研究・発信・コミュニティを通じて、自律した未来を追求する"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
