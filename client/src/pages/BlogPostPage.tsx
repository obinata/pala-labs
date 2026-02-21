import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/lib/i18n";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { sanityClient, blogPostByIdQuery, type SanityBlogPost } from "@/lib/sanity";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();

  const { data: post, isLoading } = useQuery<SanityBlogPost | null>({
    queryKey: ["sanity-blog-post", id],
    queryFn: () => sanityClient.fetch(blogPostByIdQuery(id!)),
    enabled: !!id,
  });

  const title = post ? (lang === "en" ? post.titleEn : (post.titleJa || post.titleEn)) : "";
  const content = post ? (lang === "en" ? post.contentEn : (post.contentJa || post.contentEn)) : "";
  const excerpt = post ? (lang === "en" ? post.excerptEn : (post.excerptJa || post.excerptEn)) : "";
  const date = post
    ? new Date(post.publishedAt).toLocaleDateString(
        lang === "en" ? "en-US" : "ja-JP",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : "";

  return (
    <PageLayout>
      <div className="pt-14">
        <section className="relative py-20 md:py-32">
          <div className="relative max-w-3xl mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase mb-12 md:mb-16 transition-colors duration-500 hover:text-foreground/80"
              style={{ color: "#666666" }}
              data-testid="link-back-blog"
            >
              <ArrowLeft size={14} />
              {t("Back to Blog", "ブログに戻る")}
            </Link>

            {isLoading ? (
              <div className="animate-pulse space-y-6">
                <div className="h-4 w-32 bg-foreground/[0.04] rounded" />
                <div className="h-8 w-3/4 bg-foreground/[0.04] rounded" />
                <div className="h-4 w-48 bg-foreground/[0.03] rounded" />
                <div className="space-y-3 mt-12">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-foreground/[0.03] rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
                  ))}
                </div>
              </div>
            ) : post ? (
              <article data-testid="blog-post-detail">
                <div className="mb-10 md:mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#666666" }}>
                      {post.category}
                    </span>
                    <span className="text-[11px] text-foreground/20">
                      {date}
                    </span>
                  </div>

                  <h1
                    className="text-2xl md:text-4xl font-normal leading-snug"
                    style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}
                    data-testid="text-blog-title"
                  >
                    {title}
                  </h1>

                  {excerpt && (
                    <p
                      className="mt-6 text-[15px] leading-relaxed"
                      style={{ color: "#666666" }}
                      data-testid="text-blog-excerpt"
                    >
                      {excerpt}
                    </p>
                  )}
                </div>

                {post.imageUrl && (
                  <div className="mb-12 md:mb-16">
                    <img
                      src={post.imageUrl}
                      alt={title}
                      className="w-full rounded-sm"
                      style={{ borderRadius: "40% 60% 55% 45% / 55% 45% 60% 40%" }}
                      data-testid="img-blog-cover"
                    />
                  </div>
                )}

                {content && (
                  <div
                    className="prose-custom text-[15px] leading-[1.9] whitespace-pre-wrap"
                    style={{ color: "#555555" }}
                    data-testid="text-blog-content"
                  >
                    {content}
                  </div>
                )}
              </article>
            ) : (
              <div className="text-center py-20">
                <p className="text-sm text-foreground/25" data-testid="text-blog-not-found">
                  {t("Post not found.", "記事が見つかりません。")}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
