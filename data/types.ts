interface Experience {
  title: string;
  company: {
    name: string;
    url: string;
    location: string;
  };
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
