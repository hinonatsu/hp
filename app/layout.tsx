import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小泉精機製作所 | Before/Afterサイト改善デモ",
  description:
    "小泉精機製作所の公式サイト内容を、見やすく整理した改善後サイトとして体験できるデモです。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "小泉精機製作所 | Before/Afterサイト改善デモ",
    description:
      "小泉精機製作所の公式サイト内容を、見やすく整理した改善後サイトとして体験できるデモです。",
    siteName: "小泉精機製作所",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小泉精機製作所 | Before/Afterサイト改善デモ",
    description:
      "小泉精機製作所の公式サイト内容を、見やすく整理した改善後サイトとして体験できるデモです。",
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
