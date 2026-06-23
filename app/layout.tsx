import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LolaMarket — O'zbekiston to'qima materiallari",
  description: "O'zbekistonda to'qima materiallar uchun B2B platforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.className} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#FAF6F0", color: "#6F4E37" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
