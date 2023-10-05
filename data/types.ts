interface Experience {
    title: string;
    company: {
        name: string;
        url: string;
        location: string;
    };
    iconSrc: string;
    duration: string;
    details: string;
    tech: string[];
}

interface Experiences {
    data: Experience[];
}

interface Link {
    title: string;
    href: string;
}

interface Project {
    title: string;
    url: string;
    image: string;
    details: string;
    links: Link[];
    tech: string[];
}

interface Projects {
    data: Project[];
}

interface Article {
    title: string;
    subtitle: string;
    meta: string;
    url: string;
    image: string;
    tags: string[];
}

interface Articles {
    data: Article[];
}
