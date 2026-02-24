import { PageLayout } from "@/components/PageLayout";
import { AboutSection } from "@/components/AboutSection";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useLang } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

function AboutIntroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { t } = useLang();

  return (
    <section className="relative pt-20 md:pt-40 pb-0">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 md:px-12 transition-all duration-[1s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
          About
        </p>
        <p className="text-2xl md:text-3xl font-normal leading-[1.4]" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
          Pala Labs is a curator and guide for Sovereign Technology.
        </p>
        <p className="mt-8 md:mt-12 text-sm leading-[1.8]" style={{ color: "#666666" }}>
          {t(
            <><strong>Sovereign Technology</strong> — technology designed to protect the autonomy of its users; open-source, verifiable, and built to serve whether for individuals, communities, or nations.<br /><br /><strong>Pala Labs</strong> makes this technology accessible — translating its important advances into tools people can use, education they can learn from, and communities they can belong to.</>,
            <><strong>Sovereign Technology [ソブリンテクノロジー]</strong> — 使う人の自由や主権を守るための技術。オープンソースで、仕組みが透明で、誰でも検証できる。使い手が個人であれ、コミュニティであれ、国家であれ、その意思に寄り添うもの。<br /><br /><strong>Pala Labs [パララボ]</strong> は、このような技術を概念化し、自由で開かれた世界にとって本質的な価値あるものを取捨選択した上で、ツール、教育、コミュニティといった形で文化と社会に接続します。</>
          )}
        </p>
        <a
          href="/work"
          className="inline-flex items-center gap-2 mt-6 px-4 py-2 text-[12px] tracking-[0.1em] text-foreground/50 border border-foreground/10 rounded-full hover:text-foreground/80 hover:border-foreground/25 hover:bg-foreground/[0.02] transition-all duration-500"
          data-testid="link-see-initiatives"
        >
          <span>{t("See our initiatives", "イニシアチブを見る")}</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <div className="pt-14">
        <AboutIntroSection />
        <AboutSection />
      </div>
    </PageLayout>
  );
}
