import type { Metadata } from "next";
import { Geist_Pixel, Geist } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistPixel = Geist_Pixel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-pixel",
});

export const metadata: Metadata = {
  title: "Devin Younge",
  description: "Devin Younge - Voice Actor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistPixel.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
