import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";

const footerLinks = [
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

export function FooterSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer
      id="contact"
      data-testid="section-footer"
      className="relative py-16 md:py-40"
    >
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 md:px-12 transition-all duration-[1s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="border-t border-foreground/[0.06] pt-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-6">
                PALA LABS
              </p>
              <p className="text-[13px] text-foreground/30 leading-relaxed max-w-xs">
                {t(
                  "Sovereign Technology Lab for Sovereign Individuals.",
                  "自律的な個人のためのソブリン・テクノロジー・ラボ。"
                )}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-[13px] text-foreground/30">
                contact [at] palalabs.org
              </p>
              <div className="flex items-center gap-5">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-foreground/30 underline underline-offset-4 decoration-foreground/10 hover:text-foreground/60 hover:decoration-foreground/25 transition-colors duration-500"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/[\s\/@]/g, "-")}`}
                  >
                    {link.icon && <link.icon className="w-3 h-3" />}
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24">
            <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/15">
              &copy; {new Date().getFullYear()} Pala Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
