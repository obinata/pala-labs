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
      className="relative pt-10 md:pt-20 pb-20 md:pb-40"
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
              <p className="text-2xl md:text-3xl font-normal leading-[1.4] text-foreground/80 max-w-xl" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
                {t(
                  "From counterculture to decentralized technologies — sovereignty is not given. It's built.",
                  "カウンターカルチャーから分散型テクノロジーへ - 自由は与えられるものではなく、築くもの"
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-8 md:mt-12 text-sm leading-[1.8] max-w-lg" style={{ color: "#666666" }}>
                {t(
                  "Technology has never been neutral. It either serves those who build it or those who use it. We believe technology should be a tool that serves individuals. That vision carries a long lineage; from the hippies, the hackers, and the cypherpunks, to technologies like Bitcoin and the original promise of Web3. Pala Labs sees itself as part of that lineage.",
                  "現代のテクノロジーは、常に誰かの利益のために動いています。それを運営する者か、利用する者か。私たちは、テクノロジーは個人のための道具であるべきだと信じています。本来、そのビジョンには長い系譜がありました。1960年代のヒッピーから、ハッカー、サイファーパンク、ビットコインの誕生とWeb3の本来の精神まで。Pala Labsは、その流れの先に存在しています。"
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
            <Reveal delay={100}>
              <p className="text-2xl md:text-3xl font-normal leading-[1.4] max-w-lg ml-auto mb-8" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
                {t(
                  "Choose technology to build freedom.",
                  "自由を築くために、テクノロジーを選び取る"
                )}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-sm leading-[1.8] max-w-lg ml-auto" style={{ color: "#666666" }}>
                <p>
                  {t(
                    "Pala takes its name from the fictional island in Aldous Huxley's final novel, Island (1962) — a world where human agency comes before technological progress. Not the dystopia of Brave New World, but its alternative: a community that chooses how it lives. That's the vision we're working towards.",
                    "Palaという名前は、オルダス・ハクスリーの最後の小説『島』（1962年）に登場する架空の島に由来します。西洋科学と東洋思想が調和し、テクノロジーの進歩よりも人間の主体性が優先される社会。それは彼のもう一つの名著『すばらしい新世界』が描いたディストピアへのアンチテーゼであり、ひとりひとりがテクノロジーを選び取り、自らの生き方をするビジョンです。それは私たちの目指す姿とも重なる、\"Self-Sovereign\"の本質だと考えます。"
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
