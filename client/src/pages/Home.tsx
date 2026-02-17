import { PageLayout } from "@/components/PageLayout";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <PageLayout showFooter={false}>
      <HeroSection />
    </PageLayout>
  );
}
