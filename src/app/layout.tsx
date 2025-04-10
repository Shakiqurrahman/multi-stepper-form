import DarkModeBtn from "@/components/DarkModeBtn";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Developed by Shakiqur Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0f0f0ff3] text-black dark:text-white`}
      >
        <div className="flex justify-end absolute top-4 right-4">
          <DarkModeBtn />
        </div>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
