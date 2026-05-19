import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Curto | Senior Frontend Engineer",
  description: "Portfolio of Pablo Curto, Senior Frontend Engineer & Tech Lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

