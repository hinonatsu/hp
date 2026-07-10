import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青澄ファブリカ株式会社 | Before/Afterサイト改善デモ",
  description:
    "改善前のホームページと、同じ内容を見やすく整理した改善後サイトを行き来できるデモです。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "青澄ファブリカ株式会社 | Before/Afterサイト改善デモ",
    description:
      "改善前のホームページと、同じ内容を見やすく整理した改善後サイトを行き来できるデモです。",
    siteName: "青澄ファブリカ株式会社",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "青澄ファブリカ株式会社 | Before/Afterサイト改善デモ",
    description:
      "改善前のホームページと、同じ内容を見やすく整理した改善後サイトを行き来できるデモです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
