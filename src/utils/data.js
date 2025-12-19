import {
  FaCode,
  FaDatabase,
  FaPaintBrush,
  FaWordpressSimple,
} from "react-icons/fa";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { SiExpress, SiJest, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import {
  RiAngularjsFill,
  RiBootstrapFill,
  RiCss3Fill,
  RiFirebaseFill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";

export const techStackData = [
  { icon: <RiHtml5Fill className="text-2xl" />, tech: "HTML5" },
  { icon: <RiCss3Fill className="text-2xl" />, tech: "CSS3" },
  { icon: <RiJavascriptFill className="text-2xl" />, tech: "JavaScript" },
  { icon: <SiTypescript className="text-2xl" />, tech: "TypeScript" },
  { icon: <RiReactjsFill className="text-2xl" />, tech: "React" },
  { icon: <RiNextjsFill className="text-2xl" />, tech: "Next.js" },
  { icon: <RiAngularjsFill className="text-2xl" />, tech: "Angular" },
  { icon: <RiNodejsFill className="text-2xl" />, tech: "Node.js" },
  { icon: <SiExpress className="text-2xl" />, tech: "Express.js" },
  { icon: <SiMongodb className="text-2xl" />, tech: "MongoDB" },
  { icon: <SiJest className="text-2xl" />, tech: "Jest testing" },
  { icon: <RiFirebaseFill className="text-2xl" />, tech: "Firebase" },
  { icon: <SiRedux className="text-2xl" />, tech: "Redux" },
  { icon: <RiTailwindCssFill className="text-2xl" />, tech: "Tailwind" },
  {
    icon: <RiBootstrapFill className="text-2xl" />,
    tech: "React-Boostrap/Boostrap",
  },
  // { icon: "", tech: "rechart" },
  { icon: <RiGithubFill className="text-2xl" />, tech: "GitHub" },
  { icon: <RiVercelFill className="text-2xl" />, tech: "Vercel" },
];

export const servicesData = [
  {
    name: "Web Development",
    des: "Creation of professional websites that match global standards using modern technologies and best practices.",
    icon: <FaCode className="text-2xl" />,
  },
  {
    name: "WordPress",
    des: "Reliable content management system solutions. Create customized websites with ease, ready within days with no long waiting periods.",
    icon: <FaWordpressSimple className="text-2xl" />,
  },
  {
    name: "Graphics Design",
    des: "Creation of visuals for various projects, from websites to print ads. Using design elements to create distinctive visuals for clients and companies.",
    icon: <FaPaintBrush className="text-2xl" />,
  },
  {
    name: "Social Media and Web Management",
    des: "Help clients manage their social accounts and websites, keeping platforms updated with latest trends and building positive brand image.",
    icon: <FaDatabase className="text-2xl" />,
  },
];

export const socialsData = [
  {
    name: "Axcel-Designs",
    href: "https://github.com/Axcel-Designs",
    label: "GitHub",
    icon: <LuGithub className="h-5 w-5" />,
  },
  {
    name: "excel-acha",
    href: "https://linkedin.com/in/excel-acha",
    label: "LinkedIn",
    icon: <LuLinkedin className="h-5 w-5" />,
  },
  {
    name: "axceldesigns@gmail.com",
    href: "mailto:axceldesigns@gmail.com",
    label: "Email",
    icon: <LuMail className="h-5 w-5" />,
  },
  {
    name: "@axceldesigns",
    href: "https://x.com/axceldesigns",
    label: "X (formerly Twitter)",
    icon: <LuTwitter className="h-5 w-5" />,
  },
];
