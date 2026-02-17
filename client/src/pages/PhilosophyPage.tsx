import { PageLayout } from "@/components/PageLayout";
import { AboutSection } from "@/components/AboutSection";

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <div className="pt-14">
        <AboutSection />
      </div>
    </PageLayout>
  );
}
