import barGif from "../assets/projectPics/bar_graph_day_5.1.gif";
import checker from "../assets/projectPics/checker.png";
import countriesGif from "../assets/projectPics/countries_object.gif";
import leaderboard from "../assets/projectPics/leadersboard.png";
import aecom from "../assets/projectPics/aecommerce.png";
import solarSystem from "../assets/projectPics/solar_system_day_4.1.gif";
import cleanCity from "../assets/projectPics/cleanCity.png";
import eccomerce from "../assets/projectPics/eccomerce.png";

export const projectData = [
  {
    id: 1,
    name: "CleanCity+",
    des: "A web app that educates users on waste categories log, track, and visualize their recycling efforts.",
    tech: [
      "Next.js",
      "Tailwind",
      "Rechart",
      "React-Boostrap/Boostrap",
      "localstorage",
    ],
    img: cleanCity,
    livehref: "https://cleancity-plus.vercel.app/",
    codehref: "https://github.com/Axcel-Designs/CleanCityPlus",
  },
  {
    id: 2,
    name: "World Population Data",
    des: "Interactive data visualization showing world language population statistics with dynamic charts and filtering capabilities.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: barGif,
    livehref: "https://axcel-designs.github.io/worldLangPopulationData/",
    codehref: "https://github.com/Axcel-Designs/worldCountriesData",
  },
  {
    id: 3,
    name: "World Countries Data",
    des: "Comprehensive application displaying detailed information about countries worldwide with search and filter functionality.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    img: countriesGif,
    livehref: "https://axcel-designs.github.io/worldCountriesData/",
    codehref: "https://github.com/Axcel-Designs/worldCountriesData",
  },
  {
    id: 4,
    name: "Solar System Explorer",
    des: "Interactive 3D visualization of our solar system with detailed information about planets and celestial bodies.",
    tech: ["HTML", "CSS", "JavaScript", "Animation"],
    img: solarSystem,
    livehref: "https://axcel-designs.github.io/solarSystem/",
    codehref: "https://github.com/Axcel-Designs/solarSystem",
  },
  {
    id: 5,
    name: "Git Repo Checker",
    des: "A tool for developers to check GitHub repository status, commits, and project statistics with a clean interface.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub API"],
    img: checker,
    livehref: "https://git-repo-checker.vercel.app/",
    codehref: "https://github.com/Axcel-Designs/GitRepo-checker",
  },
  {
    id: 6,
    name: "Leaderboard App+",
    des: "Dynamic leaderboard application with real-time updates, scoring system, and user management features.",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    img: leaderboard,
    livehref: "https://axcel-designs.github.io/leaderboard/",
    codehref: "https://axcel-designs.github.io/leaderboard/",
  },
  {
    id: 7,
    name: "E-commerce",
    des: "React web app Store that is used for shoping.",
    tech: ["React", "tailwind", "Redux", "Formik-yup"],
    img: eccomerce,
    livehref: "https://ecomerce-five-beta.vercel.app/",
    codehref:
      "https://github.com/Axcel-Designs/REACT_tasks/tree/master/react_task_04",
  },
  {
    id: 8,
    name: "E-commerce",
    des: "TypeSCript web app Store that is used for shoping.",
    tech: ["React", "TypeScript", "tailwind", "ContexApi"],
    img: aecom,
    livehref: "https://ecommerce-project-green-seven.vercel.app/",
    codehref: "https://github.com/Axcel-Designs/ashinityEcommerceProject",
  },
];
