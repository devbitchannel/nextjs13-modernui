"use client";

import "./globals.css";
import { Inter } from "@next/font/google";
import { Navigation } from "../components/layout";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`vsc-initialized bg-off-white`}>
        <main
          className={`container mx-auto max-w-[1200px] px-4 desktop:px-0 ${inter.className}`}
        >
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  );
}
