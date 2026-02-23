import { useLang } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/pala_labs_logo_original__1771175466212.png";

export function Navigation() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/philosophy", label: t("About", "概要・哲学") },
    { href: "/work", label: t("Initiatives", "イニシアチブ") },
    { href: "/blog", label: t("Blog", "文") },
  ];

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled && location !== "/"
          ? "bg-background/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="block"
            data-testid="link-home"
          >
            <img
              src={logoImg}
              alt="PALA LABS"
              className="h-6 w-auto"
              style={{ opacity: 0.8 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                  location === link.href
                    ? "text-foreground/80"
                    : "text-foreground/40 hover:text-foreground/80"
                }`}
                data-testid={`link-${link.href.slice(1)}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="text-[11px] tracking-[0.15em] uppercase border border-foreground/15 rounded-full px-3 py-1 text-foreground/40 transition-all duration-500 hover:text-foreground/80 hover:border-foreground/30"
              data-testid="button-lang-toggle"
            >
              {lang === "en" ? "JP" : "EN"}
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleLang}
              className="text-[11px] tracking-[0.15em] uppercase border border-foreground/15 rounded-full px-3 py-1 text-foreground/40"
              data-testid="button-lang-toggle-mobile"
            >
              {lang === "en" ? "JP" : "EN"}
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-end gap-6 pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                location === link.href
                  ? "text-foreground/80"
                  : "text-foreground/50 hover:text-foreground/70"
              }`}
              data-testid={`link-mobile-${link.href.slice(1)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
