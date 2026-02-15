import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { SiX } from "react-icons/si";

export function FooterSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer
      id="contact"
      data-testid="section-footer"
      className="relative py-24 md:py-32 border-t border-border/30"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-foreground mb-6">
              PALA LABS
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {t(
                "Sovereign Technology Lab for Sovereign Individuals. Empowering human agency through people's technology.",
                "ソブリン・テクノロジー・ラボ。人々のテクノロジーを通じて人間の主体性を高めます。"
              )}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div>
              <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2 md:text-right">
                {t("Contact", "連絡先")}
              </p>
              <p className="text-sm text-foreground md:text-right">
                contact [at] palalabs.org
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wider uppercase text-muted-foreground mb-3 md:text-right">
                {t("Social", "ソーシャル")}
              </p>
              <div className="flex gap-3 md:justify-end">
                <a
                  href="https://twitter.com/pala_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-md border border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                  data-testid="link-twitter"
                  aria-label="Twitter"
                >
                  <SiX className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Pala Labs.{" "}
            {t("All rights reserved.", "All rights reserved.")}
          </p>
          <div className="flex gap-6">
            <a
              href="https://lu.ma/pala_labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              data-testid="link-luma"
            >
              Luma
            </a>
            <a
              href="https://github.com/palalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              data-testid="link-github"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
