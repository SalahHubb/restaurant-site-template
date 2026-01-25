import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harborandhearth.example.com"),
  title: {
    default:
      "Harbor & Hearth Kitchen | Coastal-inspired dining in Seaside Town",
    template: "%s | Harbor & Hearth Kitchen",
  },
  description:
    "Cozy neighborhood kitchen in Seaside Town serving wood-fired mains, seasonal small plates, and craft coffee. Book a table, plan private events, or order pickup.",
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
