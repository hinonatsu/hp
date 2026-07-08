import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青澄ファブリカ株式会社 | デモサイト",
  description:
    "架空の精密加工会社を題材にした、企業サイト構造再現用のデモページです。",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "青澄ファブリカ株式会社 | デモサイト",
    description:
      "架空の精密加工会社を題材にした、企業サイト構造再現用のデモページです。",
    siteName: "青澄ファブリカ株式会社",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "青澄ファブリカ株式会社 | デモサイト",
    description:
      "架空の精密加工会社を題材にした、企業サイト構造再現用のデモページです。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
