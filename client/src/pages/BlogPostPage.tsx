import { PageLayout } from "@/components/PageLayout";
import { useLang } from "@/lib/i18n";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { sanityClient, blogPostBySlugQuery, type SanityBlogPost } from "@/lib/sanity";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { url?: string; alt?: string } }) => {
      if (!value?.url) return null;
      return (
        <div className="my-8">
          <img
            src={value.url}
            alt={value.alt || ""}
            className="w-full rounded-sm"
            loading="lazy"
            data-testid="img-blog-inline"
          />
        </div>
      );
    },
    youtube: ({ value }: { value: { url?: string } }) => {
      if (!value?.url) return null;
      const videoId = getYouTubeId(value.url);
      if (!videoId) return null;
      return (
        <div className="my-8 relative w-full" style={{ paddingBottom: "56.25%" }} data-testid="embed-youtube">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-sm"
            loading="lazy"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-normal mt-10 mb-4" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-normal mt-8 mb-3" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base md:text-lg font-normal mt-6 mb-2" style={{ fontFamily: "'Radley', 'Sawarabi Mincho', serif", color: "#494949" }}>
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-[15px] leading-[1.9]" style={{ color: "#555555" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-foreground/10 pl-5 my-6 italic text-[15px] leading-[1.9]" style={{ color: "#777777" }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold" style={{ color: "#494949" }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="text-[13px] px-1.5 py-0.5 rounded bg-foreground/[0.04]" style={{ fontFamily: "monospace" }}>
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 decoration-foreground/20 hover:decoration-foreground/40 transition-colors duration-300"
        style={{ color: "#494949" }}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[15px] leading-[1.9]" style={{ color: "#555555" }}>{children}</li>,
    number: ({ children }) => <li className="text-[15px] leading-[1.9]" style={{ color: "#555555" }}>{children}</li>,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();

  const { data: post, isLoading } = useQuery<SanityBlogPost | null>({
    queryKey: ["sanity-blog-post", slug],
    queryFn: () => sanityClient.fetch(blogPostBySlugQuery(slug!)),
    enabled: !!slug,
  });

  const title = post ? (lang === "en" ? post.titleEn : (post.titleJa || post.titleEn)) : "";
  const content = post ? (lang === "en" ? post.contentEn : (post.contentJa || post.contentEn)) : null;
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

                {content && Array.isArray(content) && content.length > 0 && (
                  <div data-testid="text-blog-content">
                    <PortableText value={content} components={portableTextComponents} />
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
