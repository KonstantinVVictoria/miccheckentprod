import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const main_font = Josefin_Sans({ subsets: ["latin"], weight: "variable" });

export const metadata: Metadata = {
  title: "Mic Check Entertainment",
  description: "It’s not just entertainment. It’s about the experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={main_font.className}>{children}</body>
    </html>
  );
}
