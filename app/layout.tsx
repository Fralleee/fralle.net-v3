import Tracker from "@/components/tracker";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.className)}>
      <body
        suppressHydrationWarning={true}
        className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-400 leading-relaxed antialiased 
        selection:bg-blue-200 selection:text-blue-900
        dark:selection:bg-amber-300 dark:selection:text-amber-900
        ">
        <Tracker />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">{children}</div>
      </body>
    </html>
  );
}
