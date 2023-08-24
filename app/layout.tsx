import Tracker from "@/components/tracker";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roland Chelwing - Fralle",
  description: "Roland Chelwing, a curious and dedicated programmer with diverse experience spanning multiple industries.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.className)}>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body
        suppressHydrationWarning={true}
        className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-400 leading-relaxed antialiased 
        selection:bg-blue-200 selection:text-blue-900
        dark:selection:bg-amber-300 dark:selection:text-amber-900
        ">
        <Tracker />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">{children}</div>
      </body>
    </html>
  );
}
