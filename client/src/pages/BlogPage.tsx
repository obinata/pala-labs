import { PageLayout } from "@/components/PageLayout";
import { BlogSection } from "@/components/BlogSection";

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="pt-14">
        <BlogSection />
      </div>
    </PageLayout>
  );
}
