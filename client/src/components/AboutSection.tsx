import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import philosophyImg from "@assets/San_Francisco_One_Line_Skyline_Poster_(396_x_666_px)_1771611133543.png";
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
          <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
            {t("Philosophy", "思想")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-20 md:mb-32">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-2xl md:text-3xl font-normal leading-[1.4] text-foreground/80 max-w-xl" style={{ fontFamily: "'Radley', serif", color: "#494949" }}>
                {t(
                  "Pala Labs is a research and advocacy lab advancing sovereign technology — because who controls your tools controls your life.",
                  "Pala Labsは、ソブリン・テクノロジーを推進するリサーチ＆アドボカシー・ラボです — ツールを支配する者が、あなたの人生を支配するからです。"
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-8 md:mt-12 text-sm leading-[1.8] max-w-lg" style={{ color: "#666666" }}>
                {t(
                  "Technology has never been neutral. It either serves those who build it or those who use it. We believe technology should be a tool that serves individuals. That vision carries a long lineage; from the hippies, the hackers, and the cypherpunks, to technologies like Bitcoin and the original promise of Web3. Pala Labs sees itself as part of that lineage.",
                  "テクノロジーは中立であったことはありません。それを作る者か、使う者のどちらかに奉仕します。私たちはテクノロジーが個人に奉仕するツールであるべきだと信じています。そのビジョンには長い系譜があります — ヒッピー、ハッカー、サイファーパンクから、ビットコインやWeb3の原初の約束まで。Pala Labsはその系譜の一部であると考えています。"
                )}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={300}>
              <div
                className="relative aspect-[3/4] overflow-hidden max-w-[220px] md:max-w-[360px] ml-auto"
                style={{ borderRadius: "50% 45% 48% 50% / 25% 30% 28% 22%" }}
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
              <div className="text-sm leading-[1.8] max-w-lg ml-auto" style={{ color: "#666666" }}>
                <p>
                  {t(
                    "Pala takes its name from the fictional island in Aldous Huxley's final novel, Island (1962) — a world where human agency comes before technological progress. Not the dystopia of Brave New World, but its alternative: a community that chooses how it lives. That's the vision we're working towards.",
                    "Palaという名前は、オルダス・ハクスリーの最後の小説『島』（1962年）に登場する架空の島に由来します — テクノロジーの進歩よりも人間の主体性が優先される世界。『すばらしい新世界』のディストピアではなく、そのオルタナティブ：自らの生き方を選ぶコミュニティ。それが私たちが目指すビジョンです。"
                  )}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal delay={100}>
              <div
                className="relative aspect-[3/4] overflow-hidden max-w-[220px] md:max-w-[360px]"
                style={{ borderRadius: "48% 50% 45% 50% / 28% 22% 25% 30%" }}
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
