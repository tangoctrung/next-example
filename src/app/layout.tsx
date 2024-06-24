import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["greek"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata  = {
  metadataBase: new URL(`https://trungtn.vercel.app`),
  title: {
    default: 'trungtn | Trang web lưu trữ file',
    template: `%s - Next.js trungtn`
  },
  description: 'Một ứng dụng web chuyên về lưu trữ file, tin nhắn với tên trungtn, được xây dựng bằng nextjs, deploy lên vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
          {children}
      </body>
    </html>
  );
}
