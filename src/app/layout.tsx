import type { Metadata } from "next";

import { Inter, Oswald } from "next/font/google";
import "./globals.css";

// Substitutes for the real fonts so the build doesn't crash without the font files
const reachflySubstitute = Oswald({
  subsets: ["latin"],
  variable: "--font-reachfly",
  display: "swap",
});

const gilroySubstitute = Inter({
  subsets: ["latin"],
  variable: "--font-gilroy",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flow Automation",
  description: "High-Authority UI & Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${reachflySubstitute.variable} ${gilroySubstitute.variable} antialiased bg-flow-dark text-flow-text`}>
        {children}
      </body>
    </html>
  );
}
