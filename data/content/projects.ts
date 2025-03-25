import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "GCG Scola",
    desc: "An Integrated Learning Management System for schools.",
    img: "/static/projects/yei-learn.png",
    link: "https://learn.theyei.org/",
    github: "https://github.com/braydentw/learn.theyei",
    tags: ["Vue.js", "Javascript", "TailwindCSS", "JSON-RPC", "Python", "PostgreSQL", "ERP", ],
  },
  {
    id: 1,
    title: "GCG Reparo",
    desc: "GCG Reparo streamlines workshop management for a seamless customer experience.",
    img: "/static/projects/reparo.png",
    link: "https://buildfaster-io.vercel.app/",
    tags: ["Vue.js", "Javascript", "TailwindCSS", "REST", "Python", "PostgreSQL", "ERP"],
  },
  {
    id: 2,
    title: "Dashboard Monitoring System",
    desc: "Desktop Application for monitoring and managing product of an agriculture company.",
    img: "/static/projects/dashboard.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    github: "https://github.com/braydentw/react-emoji-search",
    tags: ["React", "Javascript", "TailwindCSS", "Electron", "Firebase"],
  },
  {
    id: 3,
    title: "Citizen Information System",
    desc: "An integrated system that allows the storage of residents' personal data in one centralized database.",
    img: "/static/projects/sisfo.png",
    link: "https://bitcointemp.com",
    tags: ["React", "Javascript", "TailwindCSS", "REST", "Python", "JSON"],
  },
  {
    id: 4,
    title: "StyleSpot",
    desc: "A platform that connects you to barbershops and salons across Bandung Raya.",
    img: "/static/projects/stylespot.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["PHP", "Javascript", "TailwindCSS", "MySQL"],
  },
  {
    id: 5,
    title: "Air Quality Monitoring Dashboard",
    desc: "A dashboard that visualizes the air quality index across various locations in Bandung Raya.",
    img: "/static/projects/birulangit-dash.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["React", "TailwindCSS", "Laravel", "REST", "MySQL"],
  },
  {
    id: 6,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/BraydenTW/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
