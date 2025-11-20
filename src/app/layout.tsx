import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // 1. Import the Footer
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UseIntelliMod",
  description: "A website for the UseIntelliMod system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main style={{ padding: '2rem', maxWidth: '1024px', margin: '2rem auto' }}>
          {children}
        </main>
        <Footer /> {/* 2. Add the Footer component here */}
      </body>
    </html>
  );
}