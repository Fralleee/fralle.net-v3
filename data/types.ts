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
