import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import philosophyImg from "@assets/screenshot-2024-12-18-at-22.00.17-AzG3vK3QEKt3EXJE_1771175866815.avif";
import bookImg from "@assets/IMG_1128_1771395263441.JPG";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1s] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      id="philosophy"
      data-testid="section-about"
      className="relative py-20 md:py-40"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 mb-10 md:mb-16">
            {t("Philosophy", "思想")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-20 md:mb-32">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="font-serif text-2xl md:text-3xl font-light leading-[1.4] text-foreground/80 italic max-w-xl">
                {t(
                  "Pala Labs is dedicated to empowering human agency through contributing to sovereign technology for sovereign individuals.",
                  "Pala Labsは、自律的な個人のためのソブリン・テクノロジーへの貢献を通じて、人間の主体性を高めることに専念しています。"
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-8 md:mt-12 text-sm text-foreground/50 leading-[1.8] max-w-lg">
                {t(
                  "In a time when technology has an unparalleled impact on society, it is crucial to prioritize a philosophy rooted in humanity and a long-term vision. We believe technology should be a tool that empowers individuals to shape their own paths to freedom; it should not be a tool to control personal agency.",
                  "テクノロジーが社会に比類なき影響を与える時代において、人間性に根ざした哲学と長期的なビジョンを優先することが不可欠です。テクノロジーは個人が自由への道を切り開くためのツールであるべきであり、個人の主体性を管理するためのツールであってはなりません。"
                )}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={300}>
              <div
                className="relative aspect-[3/4] overflow-hidden max-w-[220px] md:max-w-[360px] ml-auto"
                style={{ borderRadius: "8% 12% 10% 6% / 6% 10% 12% 8%" }}
              >
                <img
                  src={philosophyImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7 md:col-start-6 order-1 md:order-2">
            <Reveal delay={200}>
              <div className="text-sm text-foreground/50 leading-[1.8] max-w-lg ml-auto space-y-6">
                <p>
                  {t(
                    'The name "Pala" draws inspiration from Aldous Huxley\'s final novel, Island (1962). In the novel, the fictional island of "Pala" is a harmonious world where Eastern philosophy and Western science coexist, a community that values human agency over technological advancement.',
                    '「Pala」という名前は、オルダス・ハクスリーの最後の小説『島』（1962年）に着想を得ています。小説の中で、架空の島「パラ」は東洋哲学と西洋科学が共存する調和的な世界であり、技術的進歩よりも人間の主体性を重んじるコミュニティです。'
                  )}
                </p>
                <p>
                  {t(
                    "In contrast to the dystopia illustrated in his renowned work, Brave New World (1932), Island represents an alternative vision — a perspective that resonates with the philosophy of Pala Labs.",
                    "代表作『すばらしい新世界』（1932年）で描かれたディストピアとは対照的に、『島』はオルタナティブなビジョンを表しています — Pala Labsの哲学と共鳴する視点です。"
                  )}
                </p>
                <p>
                  {t(
                    "Many of the lessons we found in Huxley are consistent with the philosophies of the hippies, hackers and cypherpunks who came after his time. We see technologies like Bitcoin and Web3 in its original vision as extensions of those principles.",
                    "ハクスリーから得た教訓の多くは、彼の時代以降に現れたヒッピー、ハッカー、サイファーパンクの哲学と一致しています。ビットコインやWeb3のオリジナルビジョンは、それらの原則の延長線上にあると考えています。"
                  )}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal delay={100}>
              <div
                className="relative aspect-[3/4] overflow-hidden max-w-[220px] md:max-w-[360px]"
                style={{ borderRadius: "10% 6% 8% 12% / 12% 8% 6% 10%" }}
              >
                <img
                  src={bookImg}
                  alt="Island and Brave New World by Aldous Huxley"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
