import { useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import logoImg from "@assets/pala_labs_logo_original__1771175466212.png";

export function Navigation() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#philosophy", label: t("Philosophy", "思想") },
    { href: "#work", label: t("Work", "活動") },
    { href: "#blog", label: t("Blog", "ブログ") },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-14">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="block"
            data-testid="link-home"
          >
            <img
              src={logoImg}
              alt="PALA LABS"
              className="h-6 w-auto"
              style={{ opacity: 0.8 }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[11px] tracking-[0.15em] uppercase text-foreground/40 transition-colors duration-500 hover:text-foreground/80"
                data-testid={`link-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="text-[11px] tracking-[0.15em] uppercase border border-foreground/15 rounded-full px-3 py-1 text-foreground/40 transition-all duration-500 hover:text-foreground/80 hover:border-foreground/30"
              data-testid="button-lang-toggle"
            >
              {lang === "en" ? "JP" : "EN"}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-[11px] tracking-[0.15em] uppercase border border-foreground/15 rounded-full px-3 py-1 text-foreground/40"
              data-testid="button-lang-toggle-mobile"
            >
              {lang === "en" ? "JP" : "EN"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[11px] tracking-[0.15em] uppercase text-foreground/40"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-background/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-[11px] tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground/80 transition-colors"
              data-testid={`link-mobile-${link.href.slice(1)}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
