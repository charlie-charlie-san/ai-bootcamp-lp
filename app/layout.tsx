import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "生成AI活用・実装ブートキャンプ | 8週間でデザインを動かす",
  description: "Figmaだけで終わるデザイナーは、もう卒業だ。非エンジニアが教える、『動くプロダクト』を一人で完結させるための8週間。",
  keywords: ["AI", "ブートキャンプ", "UI/UX", "デザイナー", "実装", "Next.js", "Figma"],
  openGraph: {
    title: "生成AI活用・実装ブートキャンプ",
    description: "Figmaだけで終わるデザイナーは、もう卒業だ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
