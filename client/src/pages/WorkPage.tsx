import { PageLayout } from "@/components/PageLayout";
import { InitiativesSection } from "@/components/InitiativesSection";

export default function WorkPage() {
  return (
    <PageLayout>
      <div className="pt-14">
        <InitiativesSection />
      </div>
    </PageLayout>
  );
}
