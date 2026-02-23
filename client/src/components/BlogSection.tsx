import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, blogPostQuery, type SanityBlogPost } from "@/lib/sanity";
import { Link } from "wouter";

function Reveal({
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
      className={`transition-all duration-[3s] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function PostRow({ post, index }: { post: SanityBlogPost; index: number }) {
  const { lang } = useLang();
  const title = (lang === "ja" && post.titleJa) ? post.titleJa : post.titleEn;
  const excerpt = (lang === "ja" && post.excerptJa) ? post.excerptJa : post.excerptEn;
  const date = new Date(post.publishedAt).toLocaleDateString(
    lang === "en" ? "en-US" : "ja-JP",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <Reveal delay={index * 80}>
      <Link href={`/blog/${post.slug}`} className="block">
        <article
          className="group py-8 border-t border-foreground/[0.06] cursor-pointer"
          data-testid={`card-blog-${post._id}`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-normal text-foreground/70 group-hover:text-foreground/90 transition-colors duration-500" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed max-w-lg line-clamp-2" style={{ color: "#666666" }}>
                {excerpt}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 md:mt-1">
              <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "#999999" }}>
                {post.category}
              </span>
              <span className="text-[14px] tabular-nums" style={{ color: "#666666" }}>
                {date}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

export function BlogSection() {
  const { t } = useLang();

  const { data: posts, isLoading } = useQuery<SanityBlogPost[]>({
    queryKey: ["sanity-blog-posts"],
    queryFn: () => sanityClient.fetch(blogPostQuery),
  });

  return (
    <section
      id="blog"
      data-testid="section-blog"
      className="relative py-20 md:py-40"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-16" style={{ color: "#666666" }}>
            {t("Blog", "ブログ")}
          </p>
        </Reveal>

        {isLoading ? (
          <div className="space-y-0">
            {[0, 1, 2].map((i) => (
              <div key={i} className="py-8 border-t border-foreground/[0.06] animate-pulse">
                <div className="h-5 w-64 bg-foreground/[0.04] rounded" />
                <div className="mt-3 h-3 w-96 bg-foreground/[0.03] rounded" />
              </div>
            ))}
            <div className="border-t border-foreground/[0.06]" />
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="space-y-0">
            {posts.map((post, i) => (
              <PostRow key={post._id} post={post} index={i} />
            ))}
            <div className="border-t border-foreground/[0.06]" />
          </div>
        ) : (
          <p className="text-sm text-foreground/25">
            {t("No posts yet.", "まだ投稿はありません。")}
          </p>
        )}
      </div>
    </section>
  );
}
