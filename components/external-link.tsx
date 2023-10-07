import Link from "next/link";

interface Props {
    href: string;
    className: string;
    children: React.ReactNode;
}

const ExternalLink = ({ href, children, className, ...rest }: Props) => {
    const separator = href.indexOf("?") !== -1 ? "&" : "?";
    const utmParameters = `${separator}utm_source=fralle.net&utm_medium=portfolio&utm_campaign=external_link`;
    const fullUrl = href + utmParameters;
    return (
        <Link
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ExternalLink;
