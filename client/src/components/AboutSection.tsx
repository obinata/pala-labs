import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      data-testid="section-about"
      className="relative py-32 md:py-40"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <RevealBlock>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t("Philosophy", "思想哲学")}
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-foreground max-w-3xl">
            {t(
              "Dedicated to empowering human agency through sovereign technology.",
              "ソブリンテクノロジーを通じて人間の主体性を高めることに専念しています。"
            )}
          </h2>
        </RevealBlock>

        <div className="mt-20 grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-12">
            <RevealBlock delay={100}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t(
                  "In a time when technology has an unparalleled impact on society, we believe it is crucial to prioritize a philosophy rooted in humanity and a long-term vision. We need people's technology.",
                  "テクノロジーが社会に計り知れない影響を与える現代において、人間性に根ざした哲学と長期的なビジョンを優先することが極めて重要だと私たちは信じています。私たちが必要としているのは、人々のテクノロジーです。"
                )}
              </p>
            </RevealBlock>

            <RevealBlock delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Technology should be a tool that empowers individuals to shape their own paths to freedom — it should not be a tool to control personal agency.",
                  "テクノロジーは個人が自由への道を切り開くためのツールであるべきであり、個人の主体性を管理するためのツールであってはなりません。"
                )}
              </p>
            </RevealBlock>

            <RevealBlock delay={300}>
              <div className="border-l-2 border-foreground/10 pl-6">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {t(
                    "Many of the lessons we found in Huxley are consistent with the philosophies of the hippies, hackers and cypherpunks who came after Huxley's time. We see technologies like Bitcoin and Web3 in its original vision as extensions of those principles.",
                    "ハクスリーから学んだ教訓の多くは、ハクスリー以降に登場したヒッピー、ハッカー、サイファーパンクの哲学と一致しています。私たちはビットコインや本来のWeb3のビジョンを、それらの原則の延長として捉えています。"
                  )}
                </p>
              </div>
            </RevealBlock>
          </div>

          <RevealBlock delay={200} className="flex flex-col justify-center">
            <div className="relative">
              <img
                src="/images/about-ambient.png"
                alt="Pala Labs visual"
                className="w-full rounded-md opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-md" />
            </div>

            <div className="mt-8 space-y-4">
              <RevealBlock delay={400}>
                <h3 className="text-lg font-medium text-foreground">
                  {t("The Name", "名前の由来")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {t(
                    '"Pala" draws inspiration from Aldous Huxley\'s final novel, Island (1962). The fictional island of Pala is a harmonious world where Eastern philosophy and Western science coexist — valuing human happiness over technological advancement without ethics.',
                    "「Pala」はオルダス・ハクスリーの最後の小説『島』（1962年）からインスピレーションを得ています。架空の島パラは、東洋の哲学と西洋の科学が共存する調和的な世界であり、倫理なきテクノロジーの進歩よりも人間の幸福を重んじる場所です。"
                  )}
                </p>
              </RevealBlock>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
