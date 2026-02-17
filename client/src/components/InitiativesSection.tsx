import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

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
    titleEn: "JAM Tour",
    titleJa: "JAMツアー",
    descEn: "Global educational events featuring the JAM protocol by Dr. Gavin Wood.",
    descJa: "Dr. Gavin WoodによるJAMプロトコルをフィーチャーしたグローバル教育イベント。",
    tagEn: "Education",
    tagJa: "教育",
    image: null as string | null,
  },
  {
    titleEn: "Gray Paper Lectures",
    titleJa: "グレイペーパー講義",
    descEn: "Lecture series at Stanford, UTokyo, ETH Zurich, NUS, SNU, and UBA.",
    descJa: "スタンフォード、東大、ETHチューリッヒ、NUS、SNU、UBAでの講義シリーズ。",
    tagEn: "Research",
    tagJa: "研究",
    image: null as string | null,
  },
  {
    titleEn: "OpenShore",
    titleJa: "OpenShore",
    descEn: "OS for Polkadot OpenGov.",
    descJa: "Polkadot OpenGovのためのOS。",
    tagEn: "Product",
    tagJa: "プロダクト",
    image: null as string | null,
  },
];

const links = [
  { titleEn: "Gray Paper Lectures", titleJa: "講義アーカイブ", url: "https://graypaper.com/lectures/?section=1.1-Nomenclature" },
  { titleEn: "ETHPrague — JAM", titleJa: "ETHPrague — JAM", url: "https://live.ethprague.com/ethprague/watch?session=665833c8036a981493b0bf19" },
  { titleEn: "The Universal Machine", titleJa: "ユニバーサルマシン", url: "https://www.youtube.com/watch?v=JGeKdpYEZs4" },
  { titleEn: "Tour Dates", titleJa: "ツアー日程", url: "https://palalabs.org/events" },
  { titleEn: "Event Calendar", titleJa: "イベントカレンダー", url: "https://lu.ma/pala_labs" },
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
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {item.image && (
                    <div className="w-full md:w-40 shrink-0 aspect-[16/10] overflow-hidden rounded-sm">
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
                      <p className="mt-3 text-sm text-foreground/35 max-w-md leading-relaxed">
                        {lang === "en" ? item.descEn : item.descJa}
                      </p>
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
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 mb-6 md:mb-8">
            {t("Archive", "アーカイブ")}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[12px] text-foreground/40 underline underline-offset-4 decoration-foreground/10 hover:text-foreground/70 hover:decoration-foreground/30 transition-colors duration-500"
                data-testid={`link-archive-${i}`}
              >
                <span>{lang === "en" ? link.titleEn : link.titleJa}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
