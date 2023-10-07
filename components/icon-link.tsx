import { IconType } from "react-icons";
import ExternalLink from "./external-link";

interface Props {
    href: string;
    title: string;
    icon: IconType;
}

const IconLink = ({ href, title, icon: Icon }: Props) => {
    return (
        <ExternalLink
            className="group relative text-slate-500 transition-all hover:text-slate-200 focus-visible:text-slate-200"
            href={href}
        >
            <span className="sr-only">{title}</span>
            <span className="-z-12 absolute -left-3 -top-3 h-12 w-12 scale-0 rounded-full bg-slate-900 transition-transform group-hover:scale-100" />
            <Icon className="relative h-6 w-6" />
        </ExternalLink>
    );
};

export default IconLink;
