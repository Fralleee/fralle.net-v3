import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

export default function ResumeLink({ className }: { className?: string }) {
  return (
    <Link
      className={cn(
        "group flex max-w-[170px] align-baseline font-medium text-slate-200 underline-offset-4 hover:text-amber-300 hover:underline focus-visible:text-amber-300",
        className,
      )}
      href="https://drive.google.com/uc?id=1hLQ18Bx3CMGYoTt85Ou1hSmCXv-AtAGM&export=download"
    >
      Download resume <GoDownload className="ml-2 translate-y-1 transition-all group-hover:translate-y-2" />
    </Link>
  );
}
