import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import GoogleAnalytics from "@/components/google-analytics";
import Tracker from "@/components/tracker";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fralle.net"),
  title: "Roland Chelwing | Fralle",
  description:
    "Roland Chelwing, a professional curious and dedicated software engineer with diverse experience spanning multiple industries.",
  keywords: [
    "software engineer",
    "senior",
    "developer",
    "programmer",
    "software development",
    "coding",
    "code",
    "programming",
    "typescript",
    "javascript",
    "c#",
    "sql",
    "postgres",
    "elasticsearch",
    "docker",
    "redis",
    "nodejs",
    "node.js",
    ".NET",
    "git",
    "kubernetes",
    "react",
    "nextjs",
    "webpack",
    "redux",
    "tailwindcss",
    "shadcn",
    "eslint",
    "fullstack",
    "full-stack",
    "front-end",
    "frontend",
    "back-end",
    "backend",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.className)}>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body
        suppressHydrationWarning={true}
        className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-amber-300 selection:text-amber-900"
      >
        <Tracker />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
