import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";
import { useEffect, useRef } from "react";

export function PageLayout({
  children,
  showFooter = true,
  compactFooter = false,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
  compactFooter?: boolean;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, mouse.current.x, 0.06);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.06);

      if (glowRef.current) {
        const offsetX = (current.current.x - 0.5) * 120;
        const offsetY = (current.current.y - 0.5) * 120;
        glowRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[0] ambient-glow" ref={glowRef} />
      <div className="fixed inset-0 pointer-events-none grain-overlay z-[1]" />
      <div className="relative z-[2]">
        <Navigation />
        {children}
        {showFooter && <FooterSection compact={compactFooter} />}
      </div>
    </div>
  );
}
