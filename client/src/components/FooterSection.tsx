import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function FooterSection() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer
      id="contact"
      data-testid="section-footer"
      className="relative py-32 md:py-40"
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
              <div className="flex gap-6">
                <a
                  href="https://twitter.com/pala_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.15em] uppercase text-foreground/25 hover:text-foreground/60 transition-colors duration-500"
                  data-testid="link-twitter"
                >
                  X / Twitter
                </a>
                <a
                  href="https://github.com/palalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.15em] uppercase text-foreground/25 hover:text-foreground/60 transition-colors duration-500"
                  data-testid="link-github"
                >
                  GitHub
                </a>
                <a
                  href="https://lu.ma/pala_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.15em] uppercase text-foreground/25 hover:text-foreground/60 transition-colors duration-500"
                  data-testid="link-luma"
                >
                  Luma
                </a>
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
