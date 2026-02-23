import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

type Lang = "en" | "ja";

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: <T extends ReactNode>(en: T, ja: T) => T;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("pala-lang") : null;
    return (saved === "ja" ? "ja" : "en");
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "ja" : "en";
      localStorage.setItem("pala-lang", next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    <T extends ReactNode>(en: T, ja: T): T => (lang === "en" ? en : ja),
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang must be used within I18nProvider");
  return ctx;
}
