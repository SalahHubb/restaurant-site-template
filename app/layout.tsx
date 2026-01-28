import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AL BAIK RESTAURANT| Adama",
  description:
    " Experience authentic Ethiopian flavors in Adama. Enjoy a cultural dining experience.View our menu ",
  keywords: [
    "Harbor and Hearth Kitchen",
    "Seaside Town restaurant",
    "wood-fired dining",
    "seasonal menu",
    "local cafe",
    "private events",
    "coastal cuisine",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
