import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  href: string;
  title: string;
  icon: IconType;
}

const IconLink = ({ href, title, icon: Icon }: Props) => {
  return (
    <Link
      className="group relative text-slate-500 transition-all hover:text-slate-200 focus-visible:text-slate-200"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="sr-only">{title}</span>
      <span className="-z-12 absolute -left-3 -top-3 h-12 w-12 scale-0 rounded-full bg-slate-200/10 transition-transform group-hover:scale-100" />
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default IconLink;
