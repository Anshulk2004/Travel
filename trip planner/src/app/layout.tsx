import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "@/components/auth/Navbar";
import { Toaster, toast } from 'sonner';

import "./globals.css";
import Navbar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description: "FullStack Travel Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}h-screen`}>
        <Navbar />
        <main className="h-full">{children}</main>
        <Toaster/>
      </body>
    </html>
  );
}
