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

export function FooterSection({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer
      id="contact"
      data-testid="section-footer"
      className={compact ? "relative py-4" : "relative py-6 md:py-10"}
    >
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 md:px-12 transition-all duration-[1s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className={`border-t border-foreground/[0.06] ${compact ? "pt-4" : "pt-6"}`}>
          {!compact && (
            <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-3">
                  PALA LABS
                </p>
                <p className="text-[13px] text-foreground/30 leading-relaxed max-w-xs">
                  {t(
                    "Sovereign Technology Lab for Sovereign Individuals.",
                    "自律的な個人のためのソブリン・テクノロジー・ラボ。"
                  )}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
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
          )}

          {compact && (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <p className="text-[11px] text-foreground/25">
                  contact [at] palalabs.org
                </p>
                <div className="flex items-center gap-4">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-foreground/25 hover:text-foreground/50 transition-colors duration-500"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/[\s\/@]/g, "-")}`}
                    >
                      {link.icon && <link.icon className="w-2.5 h-2.5" />}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/15">
                &copy; {new Date().getFullYear()} Pala Labs
              </p>
            </div>
          )}

          {!compact && (
            <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/15">
              &copy; {new Date().getFullYear()} Pala Labs
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
