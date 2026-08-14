import type { Metadata } from "next";
import { Geist_Pixel, Geist, Playfair_Display } from "next/font/google";
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

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Devin Younge",
  description: "Devin Younge - Voice Actor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-900">{children}</body>
    </html>
  );
}
