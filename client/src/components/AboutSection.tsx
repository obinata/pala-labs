import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";

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
      id="about"
      data-testid="section-about"
      className="relative py-40 md:py-56"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/30 mb-16">
            {t("About", "思想")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
                {t(
                  "Technology should be a tool that empowers individuals to shape their own paths to freedom — it should not be a tool to control personal agency.",
                  "テクノロジーは個人が自由への道を切り開くためのツールであるべきであり、個人の主体性を管理するためのツールであってはなりません。"
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-12 text-sm text-foreground/35 leading-[1.8] max-w-lg">
                {t(
                  'The name "Pala" draws from Aldous Huxley\'s final novel Island (1962) — a harmonious world where Eastern philosophy and Western science coexist. In contrast to the dystopia of Brave New World, Island represents an alternative vision that resonates with the philosophies of hippies, hackers and cypherpunks.',
                  "「Pala」という名前はオルダス・ハクスリーの最後の小説『島』（1962年）に由来します。東洋哲学と西洋科学が共存する調和的な世界です。『すばらしい新世界』のディストピアとは対照的に、ヒッピー、ハッカー、サイファーパンクの哲学と共鳴するオルタナティブなビジョンを表しています。"
                )}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={300}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/images/about-ambient.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.7 }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
