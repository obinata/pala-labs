import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import philosophyImg from "@assets/screenshot-2024-12-18-at-22.00.17-AzG3vK3QEKt3EXJE_1771175866815.avif";

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

const socialLinks = [
  {
    label: "@pala_labs",
    url: "https://twitter.com/pala_labs",
    icon: SiX,
  },
  {
    label: "GitHub",
    url: "https://github.com/palalabs",
    icon: SiGithub,
  },
  {
    label: "Events",
    url: "https://lu.ma/pala_labs",
    icon: null,
  },
];

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

        <div className="grid md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="font-serif text-2xl md:text-3xl font-light leading-[1.4] text-foreground/80 italic">
                {t(
                  "Technology should be a tool that empowers individuals to shape their own paths to freedom — it should not be a tool to control personal agency.",
                  "テクノロジーは個人が自由への道を切り開くためのツールであるべきであり、個人の主体性を管理するためのツールであってはなりません。"
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-8 md:mt-12 text-sm text-foreground/35 leading-[1.8] max-w-lg">
                {t(
                  'The name "Pala" draws from Aldous Huxley\'s final novel Island (1962) — a harmonious world where Eastern philosophy and Western science coexist. In contrast to the dystopia of Brave New World, Island represents an alternative vision that resonates with the philosophies of hippies, hackers and cypherpunks.',
                  "「Pala」という名前はオルダス・ハクスリーの最後の小説『島』（1962年）に由来します。東洋哲学と西洋科学が共存する調和的な世界です。『すばらしい新世界』のディストピアとは対照的に、ヒッピー、ハッカー、サイファーパンクの哲学と共鳴するオルタナティブなビジョンを表しています。"
                )}
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-8 md:mt-12 flex items-center gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-foreground/30 underline underline-offset-4 decoration-foreground/10 hover:text-foreground/60 hover:decoration-foreground/25 transition-colors duration-500"
                    data-testid={`link-social-${link.label.toLowerCase().replace(/[\s\/]/g, "-")}`}
                  >
                    {link.icon && <link.icon className="w-3 h-3" />}
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={300}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={philosophyImg}
                  alt=""
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
