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
      className={`transition-all duration-[1s] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
    descJa: "厳選されたデータと専門家の分析を通じて徹底的な透明性を実現。Polkadotガバナンスの進化を理解し、ナビゲートするための必要不可欠なコンテクストを提供します。",
    tagEn: "Tool",
    tagJa: "ツール",
    link: "https://openshore.io/",
    image: null as string | null,
  },
  {
    titleEn: "JAM Tour",
    titleJa: "JAMツアー",
    subtitleEn: null,
    subtitleJa: null,
    descEn: "Global educational tour featuring the JAM protocol by Dr. Gavin Wood. Spanning 9 locations at world-renowned universities; including Cambridge, India, Taiwan, Hong Kong, and China. The series engaged 1,300+ in-person attendees and generated over 500,000 views to date.",
    descJa: "Dr. Gavin WoodによるJAMプロトコルをフィーチャーしたグローバル教育ツアー。ケンブリッジ、インド、台湾、香港、中国を含む世界的に有名な大学9カ所で開催。1,300人以上の参加者を集め、これまでに50万回以上の視聴を記録しています。",
    tagEn: "Education",
    tagJa: "教育",
    link: null as string | null,
    image: jamTourImg as string | null,
  },
  {
    titleEn: "Gray Paper Lectures",
    titleJa: "グレイペーパー講義",
    subtitleEn: null,
    subtitleJa: null,
    descEn: "An academic lecture series delivered at prestigious institutions including Stanford, Singapore's NUS, UTokyo, ETH Zurich, and Seoul National University. This initiative successfully attracted 15+ independent implementer teams dedicated to bringing the JAM specifications to life.",
    descJa: "スタンフォード、シンガポールNUS、東大、ETHチューリッヒ、ソウル大学を含む名門機関で行われた学術講義シリーズ。このイニシアチブは、JAM仕様の実現に取り組む15以上の独立した実装チームを惹きつけることに成功しました。",
    tagEn: "Education",
    tagJa: "教育",
    link: null as string | null,
    image: grayPaperImg as string | null,
  },
];

const links = [
  { titleEn: "Safeguard Against Post-Truth Age", titleJa: "ポスト真実時代への防衛", descEn: "Short documentary", descJa: "ショートドキュメンタリー", url: "https://youtube.com/watch?si=s7TyA-dDdvasehmO&v=-GdWXtwvWtQ&feature=youtu.be" },
  { titleEn: "JAM Tour Recap", titleJa: "JAMツアー総集編", descEn: "Video recap", descJa: "動画まとめ", url: "https://www.youtube.com/watch?si=BYCWE_I5ENItRaZn&v=FgxNRMtcpCM&feature=youtu.be" },
  { titleEn: "Gray Paper Lectures", titleJa: "講義アーカイブ", descEn: "Lecture archive", descJa: "講義アーカイブ", url: "https://graypaper.com/lectures/?section=1.1-Nomenclature" },
  { titleEn: "ETHPrague — JAM", titleJa: "ETHPrague — JAM", descEn: "Conference talk", descJa: "カンファレンストーク", url: "https://live.ethprague.com/ethprague/watch?session=665833c8036a981493b0bf19" },
  { titleEn: "Event Calendar", titleJa: "イベントカレンダー", descEn: "Upcoming events", descJa: "今後のイベント", url: "https://lu.ma/pala_labs" },
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
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 mb-10 md:mb-16">
            {t("Work", "活動")}
          </p>
        </Reveal>

        <div className="space-y-0">
          {works.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group py-8 md:py-10 border-t border-foreground/[0.06]">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  {item.image && (
                    <div className="w-full md:w-48 shrink-0 aspect-[16/10] overflow-hidden rounded-sm">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground/80 italic">
                        {lang === "en" ? item.titleEn : item.titleJa}
                      </h3>
                      {item.subtitleEn && (
                        <p className="mt-1 text-[12px] tracking-[0.1em] uppercase text-foreground/40">
                          {lang === "en" ? item.subtitleEn : item.subtitleJa}
                        </p>
                      )}
                      <p className="mt-4 text-sm text-foreground/50 max-w-lg leading-[1.8]">
                        {lang === "en" ? item.descEn : item.descJa}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-[12px] tracking-[0.1em] text-foreground/40 underline underline-offset-4 decoration-foreground/15 hover:text-foreground/70 hover:decoration-foreground/30 transition-colors duration-500"
                          data-testid={`link-work-${i}`}
                        >
                          <span>{item.link.replace(/^https?:\/\//, "")}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/25 md:mt-2 shrink-0">
                      {lang === "en" ? item.tagEn : item.tagJa}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-foreground/[0.06]" />
        </div>

        <Reveal delay={200} className="mt-12 md:mt-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 mb-8 md:mb-10">
            {t("Content Archive", "コンテンツアーカイブ")}
          </p>
          <div className="space-y-0">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-t border-foreground/[0.06] transition-colors duration-500 hover:bg-foreground/[0.02]"
                data-testid={`link-archive-${i}`}
              >
                <div>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-500">
                    {lang === "en" ? link.titleEn : link.titleJa}
                  </p>
                  <p className="mt-0.5 text-[11px] text-foreground/25">
                    {lang === "en" ? link.descEn : link.descJa}
                  </p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-foreground/20 group-hover:text-foreground/50 transition-colors duration-500 shrink-0 ml-4" />
              </a>
            ))}
            <div className="border-t border-foreground/[0.06]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
