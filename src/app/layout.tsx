import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeroSection from "../components/hero/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cozy Rentals",
  description: "The most affortable place to stay in the san franciso bay area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroSection />
        {children}
      </body>
    </html>
  );
}
