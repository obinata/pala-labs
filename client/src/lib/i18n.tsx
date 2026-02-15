import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "en" | "ja";

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, ja: string) => string;
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

  const t = useCallback(
    (en: string, ja: string) => (lang === "en" ? en : ja),
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
