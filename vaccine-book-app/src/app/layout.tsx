import TopMenu from "@/components/TopMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Vaccine Boi",
  description: "Made by 6331313021 Tuchtham Sungkameka",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
