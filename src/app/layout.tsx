import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["greek"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Creator by trungtn | Web mua ban",
  description: "Đây là trang web được tạo bởi trungtn, có tên là web trungtn",
};

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
