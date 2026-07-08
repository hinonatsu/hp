import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manufacturing Website Before After Demo",
  description:
    "架空のゴム製品製造会社を用いた営業用Before/Afterデモサイトです。",
  keywords: [
    "製造業 Webデモ",
    "Before After",
    "BtoB Webデザイン",
    "採用 信用強化"
  ],
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Manufacturing Website Before After Demo",
    description:
      "架空のゴム製品製造会社を用いた営業用Before/Afterデモサイトです。",
    siteName: "Manufacturing Website Before After Demo",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Website Before After Demo",
    description:
      "架空のゴム製品製造会社を用いた営業用Before/Afterデモサイトです。"
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
