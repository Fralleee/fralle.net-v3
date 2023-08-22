import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

export default function ResumeLink({ className }: { className?: string }) {
  return (
    <Link
      className={cn(
        "max-w-[170px] flex align-baseline font-medium group hover:underline underline-offset-4 text-slate-700 hover:text-blue-500 focus-visible:text-blue-500 dark:text-slate-200 dark:hover:text-amber-300 dark:focus-visible:text-amber-300",
        className
      )}
      href="https://drive.google.com/uc?id=1hLQ18Bx3CMGYoTt85Ou1hSmCXv-AtAGM&export=download">
      Download resume <GoDownload className="ml-2 translate-y-1 group-hover:translate-y-2 transition-all" />
    </Link>
  );
}
