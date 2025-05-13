import type { Metadata } from "next";
import { Viga, Mako, Kanit } from "next/font/google";
import "./globals.css";
import "@/styles/editor.css";
import { Analytics } from "@vercel/analytics/react"
// import Navigation from "@/components/nav";
import { LayoutGroup } from "framer-motion";

const viga = Viga({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: "400",
  variable: "--font-viga",
});

const mako = Mako({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: "400",
  variable: "--font-mako",
});

const kanit = Kanit({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Math Playground",
  description:
    "A Math Playground that exposes K-8 students to Games that Enhance Mathematical Understanding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutGroup>
      <html lang="en">
        <body
          className={`${viga.variable} ${mako.variable} ${kanit.variable} antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </html>
    </LayoutGroup>
  );
}
