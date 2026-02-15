import { useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { href: "#about", label: t("About", "思想") },
    { href: "#initiatives", label: t("Initiatives", "活動") },
    { href: "#blog", label: t("Blog", "ブログ") },
    { href: "#contact", label: t("Contact", "連絡先") },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-sm font-medium tracking-widest uppercase text-foreground"
            data-testid="link-home"
          >
            PALA LABS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                data-testid={`link-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLang}
              className="text-xs tracking-wider border border-border/60 rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/30"
              data-testid="button-lang-toggle"
            >
              {lang === "en" ? "日本語" : "EN"}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-xs tracking-wider border border-border/60 rounded-md px-3 py-1.5 text-muted-foreground"
              data-testid="button-lang-toggle-mobile"
            >
              {lang === "en" ? "日本語" : "EN"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground"
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-mobile-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
