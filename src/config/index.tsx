import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SiCss3, SiPostman, SiTailwindcss } from "react-icons/si";
import DevtoolsIcon from "../assets/devtools-icon.png";
import GitIcon from "../assets/git-icon.png";
import JSIcon from "../assets/js-icon.png";
import MongoDBIcon from "../assets/mongo-icon.png";
import { FaHtml5 } from "react-icons/fa6";

export const TECH_LIST = [
  {
    title: "Front-end",
    technologies: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-2xl fill-red-500" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-lg text-[#009cff]" />,
      },
      {
        name: "JavaScript",
        icon: (
          <Image
            src={JSIcon}
            alt="build html and css"
            className="rounded-md"
            height={19}
            width={19}
          />
        ),
      },
      {
        name: "React",
        icon: <GrReactjs className="text-[#00ddff] text-lg" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#00c0fe] text-lg" />,
      },
    ],
  },
  {
    title: "Back-end",
    technologies: [
      {
        name: "NodeJS",
        icon: <IoLogoNodejs className="text-[#00b752] text-xl" />,
      },
      {
        name: "MongoDB",
        icon: (
          <Image
            src={MongoDBIcon}
            alt="build node and mongo"
            // className="w-[18px] h-[18px]"
            height={18}
            width={18}
          />
        ),
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#ff5f1d] text-lg" />,
      },
    ],
  },
  {
    title: "Utilities",
    technologies: [
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-[#007acc] text-2xl" />,
      },
      {
        name: "Git",
        icon: <Image src={GitIcon} alt="Git Icon" height={19}
        width={19} />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-[#000] text-lg" />,
      },
      {
        name: "DevTools",
        icon: (
          <Image
            src={DevtoolsIcon}
            alt="DevTools Icon"
            height={19}
            width={19}
            className="rounded-md"
          />
        ),
      },
    ],
  },
];
