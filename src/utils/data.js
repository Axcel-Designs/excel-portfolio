import {
  FaCode,
  FaDatabase,
  FaPaintBrush,
  FaWordpressSimple,
} from "react-icons/fa";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

export const techStackData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular.js",
  'Node.Js',
  'Express.Js',
  'MongoDB',
  "Jest testing",
  "Firebase",
  "Redux",
  "Tailwind",
  "React-Boostrap/Boostrap",
  "rechart",
  "GitHub",
  "Varcel",
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
