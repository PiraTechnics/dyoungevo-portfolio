import type { Metadata } from "next";
import { Geist_Pixel, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/components/Header";

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

// const geistPixel = Geist_Pixel({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-pixel",
// });

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
      <body className="min-h-full bg-gray-900 bg-linear-to-b from-indigo-950 via-indigo-900 to-blue-900 bg-fixed pb-24">
        <Header />
        <div className="flex flex-col items-center justify-center gap-4 px-6 pt-24 sm:pt-32 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
