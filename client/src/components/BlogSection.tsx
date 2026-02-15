import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { ArrowRight } from "lucide-react";

function RevealBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const { lang } = useLang();
  const title = lang === "en" ? post.titleEn : post.titleJa;
  const excerpt = lang === "en" ? post.excerptEn : post.excerptJa;
  const date = new Date(post.publishedAt).toLocaleDateString(
    lang === "en" ? "en-US" : "ja-JP",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <RevealBlock delay={index * 100}>
      <article
        className="group cursor-pointer"
        data-testid={`card-blog-${post.id}`}
      >
        {post.imageUrl && (
          <div className="aspect-[16/10] overflow-hidden rounded-md mb-5 bg-muted/30">
            <img
              src={post.imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-xs tracking-wider uppercase text-muted-foreground">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground/60">
            {date}
          </span>
        </div>
        <h3 className="text-xl font-light text-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <span>{lang === "en" ? "Read more" : "続きを読む"}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </RevealBlock>
  );
}

function BlogSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="aspect-[16/10] rounded-md bg-muted/40" />
      <div className="h-3 w-20 rounded bg-muted/40" />
      <div className="h-5 w-3/4 rounded bg-muted/40" />
      <div className="h-3 w-full rounded bg-muted/40" />
      <div className="h-3 w-2/3 rounded bg-muted/40" />
    </div>
  );
}

export function BlogSection() {
  const { t } = useLang();

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <section
      id="blog"
      data-testid="section-blog"
      className="relative py-32 md:py-40"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <RevealBlock>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t("Blog", "ブログ")}
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-foreground max-w-3xl">
            {t("Thoughts & Updates", "思考とアップデート")}
          </h2>
        </RevealBlock>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {isLoading ? (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : posts && posts.length > 0 ? (
            posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground text-sm">
                {t("No posts yet. Stay tuned.", "まだ投稿はありません。お楽しみに。")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
