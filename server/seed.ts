import { db } from "./db";
import { blogPosts } from "@shared/schema";
import { sql } from "drizzle-orm";

export async function seedDatabase() {
  const existing = await db.select({ count: sql<number>`count(*)` }).from(blogPosts);
  if (Number(existing[0].count) > 0) return;

  await db.insert(blogPosts).values([
    {
      titleEn: "The JAM Protocol: A New Chapter for Decentralization",
      titleJa: "JAMプロトコル：分散化の新たな章",
      excerptEn:
        "An introduction to the JAM protocol proposed by Dr. Gavin Wood, and how it represents the next evolution in blockchain architecture for building truly decentralized applications.",
      excerptJa:
        "Dr. Gavin Woodが提唱するJAMプロトコルの紹介。真に分散化されたアプリケーションを構築するためのブロックチェーンアーキテクチャの次なる進化について。",
      contentEn: "Full article content about JAM protocol...",
      contentJa: "JAMプロトコルに関する記事の全文...",
      category: "Technology",
      imageUrl: "/images/hero-ambient.png",
    },
    {
      titleEn: "Sovereign Technology: Why It Matters Now",
      titleJa: "ソブリンテクノロジー：なぜ今重要なのか",
      excerptEn:
        "In an era of increasing digital surveillance and centralized control, sovereign technology offers individuals the tools to maintain their autonomy and privacy in the digital world.",
      excerptJa:
        "デジタル監視と中央集権的管理が増大する時代に、ソブリンテクノロジーは個人がデジタル世界で自律性とプライバシーを維持するためのツールを提供します。",
      contentEn: "Full article content about sovereign technology...",
      contentJa: "ソブリンテクノロジーに関する記事の全文...",
      category: "Philosophy",
      imageUrl: "/images/about-ambient.png",
    },
    {
      titleEn: "Gray Paper Lectures: Reflections from the World Tour",
      titleJa: "グレイペーパー講義：ワールドツアーからの振り返り",
      excerptEn:
        "Looking back at our lecture series across Stanford, University of Tokyo, ETH Zurich and more — sharing the JAM vision with the next generation of builders.",
      excerptJa:
        "スタンフォード、東京大学、ETHチューリッヒなどでの講義シリーズを振り返り、次世代のビルダーたちとJAMのビジョンを共有した体験について。",
      contentEn: "Full article content about Gray Paper lectures...",
      contentJa: "グレイペーパー講義に関する記事の全文...",
      category: "Events",
      imageUrl: "/images/initiatives-bg.png",
    },
  ]);

  console.log("Database seeded with blog posts");
}
