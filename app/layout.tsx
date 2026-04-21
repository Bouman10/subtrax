import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subtrax",
  description: "Structure your day intentionally by subtracting disorders..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
     className={'${inter.variable} ${dmSans.variable}'}
    >
      <body className={'${inter.variable font-sans'}>{children}</body>
    </html>
  );
}
