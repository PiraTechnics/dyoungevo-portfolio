import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/components/Header";
import { Analytics } from "@vercel/analytics/next";

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
      className={`${playfairDisplay.variable} h-full antialiased bg-black`}
    >
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎙️</text></svg>"
      ></link>
      <body className="min-h-full bg-linear-to-b from-indigo-950 via-indigo-900 to-blue-900 pb-24">
        <Header />
        <div className="px-6 pt-8 sm:pt-16 lg:px-8">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
