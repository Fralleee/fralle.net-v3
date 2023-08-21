import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

export default function ResumeLink({ className }: { className?: string }) {
  return (
    <Link
      className={cn(
        "flex align-baseline font-medium group text-stone-700  hover:text-pink-600 focus-visible:text-pink-600 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300",
        className
      )}
      href="https://drive.google.com/uc?id=1hLQ18Bx3CMGYoTt85Ou1hSmCXv-AtAGM&export=download">
      Download resume <GoDownload className="ml-2 translate-y-1 group-hover:translate-y-2 transition-all" />
    </Link>
  );
}
