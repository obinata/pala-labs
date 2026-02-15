import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ExternalLink } from "lucide-react";

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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const initiatives = [
  {
    titleEn: "JAM Tour",
    titleJa: "JAMツアー",
    descEn:
      "A global tour of educational events for developers and students at prominent universities worldwide featuring the JAM protocol, proposed by Ethereum and Polkadot co-founder Dr. Gavin Wood.",
    descJa:
      "Ethereum・Polkadot共同創設者のDr. Gavin Woodが提唱するJAMプロトコルをフィーチャーした、世界中の著名な大学で開発者や学生向けに行う教育イベントのグローバルツアー。",
    category: "Education",
    categoryJa: "教育",
  },
  {
    titleEn: "Gray Paper Lectures",
    titleJa: "グレイペーパー講義",
    descEn:
      'Lecture series at top universities following the release of the "Gray Paper", a formal specification of the JAM protocol, published 10 years after the Ethereum Yellow Paper.',
    descJa:
      "Ethereumイエローペーパーの10年後に公開されたJAMプロトコルの正式な仕様書「グレイペーパー」のリリースに伴う、トップ大学での講義シリーズ。",
    locationsEn:
      "Stanford University, University of Tokyo, Singapore National University, Seoul National University, ETH Zurich, University of Buenos Aires",
    locationsJa:
      "スタンフォード大学、東京大学、シンガポール国立大学、ソウル大学、ETHチューリッヒ、ブエノスアイレス大学",
    category: "Research",
    categoryJa: "研究",
  },
];

const archiveLinks = [
  {
    titleEn: "Gray Paper Lectures",
    titleJa: "グレイペーパー講義",
    url: "https://graypaper.com/lectures/?section=1.1-Nomenclature",
  },
  {
    titleEn: "ETHPrague — JAM Presentation",
    titleJa: "ETHPrague — JAMプレゼンテーション",
    url: "https://live.ethprague.com/ethprague/watch?session=665833c8036a981493b0bf19",
  },
  {
    titleEn: "The Universal Machine — Documentary",
    titleJa: "ユニバーサルマシン — ドキュメンタリー",
    url: "https://www.youtube.com/watch?v=JGeKdpYEZs4",
  },
];

export function InitiativesSection() {
  const { t, lang } = useLang();

  return (
    <section
      id="initiatives"
      data-testid="section-initiatives"
      className="relative py-32 md:py-40"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/initiatives-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <RevealBlock>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t("Initiatives", "活動")}
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-foreground max-w-3xl">
            {t(
              "We only contribute to people's technology.",
              "私たちは人々のテクノロジーにのみ貢献します。"
            )}
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            {t(
              "Technology that empowers individuals to shape their own path to freedom.",
              "個人が自由への道を自ら切り開くためのテクノロジー。"
            )}
          </p>
        </RevealBlock>

        <div className="mt-20 space-y-16">
          {initiatives.map((item, i) => (
            <RevealBlock key={i} delay={i * 150}>
              <div className="group">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs tracking-wider uppercase text-muted-foreground border border-border/60 rounded-md px-2.5 py-1">
                    {lang === "en" ? item.category : item.categoryJa}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  {lang === "en" ? item.titleEn : item.titleJa}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {lang === "en" ? item.descEn : item.descJa}
                </p>
                {"locationsEn" in item && (
                  <div className="mt-4">
                    <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                      {t("Locations", "開催地")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lang === "en" ? item.locationsEn : item.locationsJa}
                    </p>
                  </div>
                )}
                <div className="mt-4 h-px bg-border/40 group-hover:bg-border transition-colors duration-500" />
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={300} className="mt-20">
          <h3 className="text-lg font-medium text-foreground mb-6">
            {t("From the Archives", "アーカイブ")}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {archiveLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 rounded-md border border-border/40 hover:border-border transition-all duration-300"
                data-testid={`link-archive-${i}`}
              >
                <ExternalLink className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {lang === "en" ? link.titleEn : link.titleJa}
                </span>
              </a>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={400} className="mt-12">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://palalabs.org/events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-border/60 rounded-md px-5 py-2.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              data-testid="link-tour-dates"
            >
              {t("Tour Dates", "ツアー日程")}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://lu.ma/pala_labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-border/60 rounded-md px-5 py-2.5 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              data-testid="link-event-calendar"
            >
              {t("Event Calendar", "イベントカレンダー")}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
