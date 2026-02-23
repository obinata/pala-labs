import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import jamTourImg from "@assets/photo_2025-03-18_19-24-50-A85e30GQZ8U8KJGX_1771355653589.avif";
import grayPaperImg from "@assets/img_5761-AGBn1PJVoaSLZob8_1771355767555.avif";

function Reveal({
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
      className={`transition-all duration-[3s] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const works = [
  {
    titleEn: "OpenShore",
    titleJa: "OpenShore",
    subtitleEn: "The OS for Polkadot OpenGov",
    subtitleJa: "Polkadot OpenGovのためのOS",
    descEn: "Delivering radical transparency through curated data and expert analysis. We provide the essential context for navigating and understanding the evolution of Polkadot governance.",
    descJa: "オンチェーンデータの分析を通じて徹底的な透明性を実現。広範囲に広がったPolkadotガバナンスの現在地を可視化し、ナビゲートするために必要不可欠なコンテクストを提供。",
    tagEn: "Tool",
    tagJa: "ツール",
    link: "https://openshore.io/",
    archive: null as string | null,
    image: null as string | null,
  },
  {
    titleEn: "JAM Tour",
    titleJa: "JAM Tour",
    subtitleEn: null,
    subtitleJa: null,
    descEn: "Global educational tour featuring the JAM protocol by Dr. Gavin Wood. Spanning 9 locations at world-renowned universities; including Cambridge, India, Taiwan, Hong Kong, and China. The series engaged 1,300+ in-person attendees and generated over 500,000 views to date.",
    descJa: "イーサリアムおよびポルカドットの共同創設者Dr. Gavin Woodによる、技術者や学生向けのグローバル教育ツアー。ケンブリッジ、インド、台湾、香港、中国複数都市を含む世界的に著名な大学研究機関9カ所で開催。1,300人以上のイベント参加者を集め、アーカイブはこれまでに50万回以上視聴されました。",
    tagEn: "Education",
    tagJa: "教育",
    link: null as string | null,
    archive: "https://www.youtube.com/playlist?list=PLgtNWWhTQLkOEdR-Co_ssraTka5_2qKtu",
    image: jamTourImg as string | null,
  },
  {
    titleEn: "Gray Paper Lectures",
    titleJa: "グレイペーパー講義",
    subtitleEn: null,
    subtitleJa: null,
    descEn: "An academic lecture series delivered at prestigious institutions including Stanford, Singapore's NUS, UTokyo, ETH Zurich, and Seoul National University. This initiative successfully attracted 15+ independent implementer teams dedicated to bringing the JAM specifications to life.",
    descJa: "スタンフォード、シンガポール国立大学、東京大学、ETHチューリッヒ、ソウル国立大学を含む名門教育機関で行われた学術講義シリーズ。このイニシアチブは、イーサリアムイエローペーパーに続くグレイペーパー（JAM仕様）の実現に取り組む15以上の独立した実装チームを惹きつけることに成功しました。",
    tagEn: "Education",
    tagJa: "教育",
    link: null as string | null,
    archive: "https://www.youtube.com/playlist?list=PLwcnAOKMj-Ab7sDej2P4peqGxu2mTGYNy",
    image: grayPaperImg as string | null,
  },
];

const links = [
  { titleEn: "Safeguard Against Post-Truth Age", titleJa: "ポスト真実時代への防衛", descEn: "Short documentary", descJa: "ショートドキュメンタリー", url: "https://youtube.com/watch?si=s7TyA-dDdvasehmO&v=-GdWXtwvWtQ&feature=youtu.be" },
  { titleEn: "JAM Tour Recap", titleJa: "JAMツアー総集編", descEn: "Video recap", descJa: "動画まとめ", url: "https://www.youtube.com/watch?si=BYCWE_I5ENItRaZn&v=FgxNRMtcpCM&feature=youtu.be" },
  { titleEn: "Gray Paper Lectures", titleJa: "講義アーカイブ", descEn: "Lecture archive", descJa: "講義アーカイブ", url: "https://graypaper.com/lectures/?section=1.1-Nomenclature" },
  { titleEn: "ETHPrague — JAM", titleJa: "ETHPrague — JAM", descEn: "Conference talk", descJa: "カンファレンストーク", url: "https://www.forbes.com/sites/nimrodlehavi/2024/06/09/analyzing-vitalik-buterin-and-gavin-woods-ethprague-fireside-chat/" },
  { titleEn: "Gavin Wood: A Path For Human-Centric Technology", titleJa: "Gavin Wood: A Path For Human-Centric Technology", descEn: "Interview", descJa: "インタビュー", url: "https://www.youtube.com/watch?v=ltA-3snv0fw" },
];

export function InitiativesSection() {
  const { lang, t } = useLang();

  return (
    <section
      id="work"
      data-testid="section-initiatives"
      className="relative py-20 md:py-40"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-2xl md:text-3xl font-normal leading-[1.4] max-w-2xl mb-16 md:mb-24" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
            {t(
              "Every initiative we run, every community we contribute, every idea we publish — all in service of sovereign individuals.",
              "自律した個人と未来のために行うイニシアチブ、貢献するコミュニティ、発信するアイデア"
            )}
          </p>
        </Reveal>

        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase mb-8 md:mb-10" style={{ color: "#666666" }}>
            {t("Library", "ライブラリ")}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-0">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 px-4 -mx-4 border-t border-foreground/[0.08] transition-all duration-500 hover:bg-foreground/[0.03] rounded-md cursor-pointer"
                data-testid={`link-archive-${i}`}
              >
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="w-4 h-4 text-foreground/25 group-hover:text-foreground/60 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-500">
                      {link.titleEn}
                    </p>
                    <p className="mt-0.5 text-[11px] text-foreground/30">
                      {link.descEn}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            <div className="border-t border-foreground/[0.06]" />
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-16 md:mt-28">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
            {t("Initiatives", "イニシアチブ")}
          </p>
        </Reveal>

        <div className="space-y-0">
          {works.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group py-8 md:py-10 border-t border-foreground/[0.06]">
                <div className="flex items-start gap-6 md:gap-10">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl md:text-4xl font-normal text-foreground/80" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
                      {lang === "en" ? item.titleEn : item.titleJa}
                    </h3>
                    {item.subtitleEn && (
                      <p className="mt-1 text-[12px] tracking-[0.1em] uppercase" style={{ color: "#666666" }}>
                        {lang === "en" ? item.subtitleEn : item.subtitleJa}
                      </p>
                    )}
                    <p className="mt-4 text-sm max-w-lg leading-[1.8]" style={{ color: "#666666" }}>
                      {lang === "en" ? item.descEn : item.descJa}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-5">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-[12px] tracking-[0.1em] text-foreground/50 border border-foreground/10 rounded-full hover:text-foreground/80 hover:border-foreground/25 hover:bg-foreground/[0.02] transition-all duration-500"
                          data-testid={`link-work-${i}`}
                        >
                          <span>{item.link.replace(/^https?:\/\//, "")}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {item.archive && (
                        <a
                          href={item.archive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-[12px] tracking-[0.1em] text-foreground/50 border border-foreground/10 rounded-full hover:text-foreground/80 hover:border-foreground/25 hover:bg-foreground/[0.02] transition-all duration-500"
                          data-testid={`link-archive-work-${i}`}
                        >
                          <span>{t("Video Archive", "動画アーカイブ")}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-4 shrink-0">
                    <span className="text-[10px] tracking-[0.2em] uppercase mt-2 w-24 text-right" style={{ color: "#666666" }}>
                      {lang === "en" ? item.tagEn : item.tagJa}
                    </span>
                    {item.image && (
                      <div className="w-48 aspect-[16/10] overflow-hidden rounded-sm">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  {item.image && (
                    <div className="md:hidden w-32 aspect-[16/10] overflow-hidden rounded-sm shrink-0">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-foreground/[0.06]" />
        </div>
      </div>
    </section>
  );
}
