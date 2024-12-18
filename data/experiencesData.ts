import GetHarleyLogo from "@/public/logos/getharley.svg";
import NiraLogo from "@/public/logos/nira.svg";
import StackOverflowLogo from "@/public/logos/stackoverflow.svg";
import YubicoLogo from "@/public/logos/yubico.svg";
import GamesysLogo from "@/public/logos/gamesys.svg";
import AsitisLogo from "@/public/logos/asitis.svg";

const data = {
  data: [
    {
      title: "Frontend Engineer",
      company: {
        name: "GetHarley",
        url: "https://getharley.com/",
        location: "London, UK (Remote)",
      },
      iconSrc: GetHarleyLogo.src,
      duration: "2024 — Present",
      details: "Contributing to a telehealth platform that connects patients with expert clinicians, focusing on enhancing user experience, implementing new features and designs.",
      tech: ["TypeScript", "React", "NextJs", "AWS"],
    },
    {
      title: "Senior Software Engineer",
      company: {
        name: "Nira",
        url: "https://www.nira.com/",
        location: "California, US (Remote)",
      },
      iconSrc: NiraLogo.src,
      duration: "2023 — 2024",
      details: "Helping companies take control over their documents, enhancing the transparency of both internal and external access to company records.",
      tech: ["TypeScript", "React", "NextJs", "tRPC", "GraphQL", "ElasticSearch", "AWS"],
    },
    {
      title: "Software Engineer",
      company: {
        name: "Stack Overflow",
        url: "https://www.stackoverflow.com/",
        location: "New York, US (Remote)",
      },
      iconSrc: StackOverflowLogo.src,
      duration: "2022 — 2023",
      details: "Part of the Awareness team, primarily involved in optimizing ads and metrics to improve click-through rates, automation, and impressions.",
      tech: ["TypeScript", "Webpack", "C#", "SQL", "Redis", "ElasticSearch", "Google Ads"],
    },
    {
      title: "Senior Software Engineer",
      company: {
        name: "Yubico",
        url: "https://www.yubico.com/",
        location: "California, US (Remote)",
      },
      iconSrc: YubicoLogo.src,
      duration: "2022 — 2022",
      details: "Responsible for maintaining an e-commerce website built on React and overseeing the migration of its functionality to a new Svelte-based application.",
      tech: ["TypeScript", "React", "NextJs", "Svelte", "TailwindCSS", "MySQL", "Docker"],
    },
    {
      title: "Software Engineer",
      company: {
        name: "Gamesys",
        url: "https://www.gamesysgroup.com/",
        location: "Skövde, Sweden (Hybrid)",
      },
      iconSrc: GamesysLogo.src,
      duration: "2020 — 2022",
      details: "Developed payment APIs and mocking solutions for the online gambling platform.",
      tech: ["JavaScript", "Vue", "PHP", "Java", "Docker"],
    },
    {
      title: "Software Engineer",
      company: {
        name: "Asitis",
        url: "https://www.aptic.net/",
        location: "Skövde, Sweden (Hybrid)",
      },
      iconSrc: AsitisLogo.src,
      duration: "2015 — 2020",
      details: "Served as a front-end development team leader for a cloud-based project called Cloudware.",
      tech: ["JavaScript", "React", "Redux", "Webpack", "Microsoft Azure", "C#", "SQL"],
    },
  ],
};

export default data;
