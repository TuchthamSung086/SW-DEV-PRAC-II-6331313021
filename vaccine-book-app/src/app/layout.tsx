import TopMenu from "@/components/TopMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Vaccine Boi",
  description: "Made by 6331313021 Tuchtham Sungkameka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
