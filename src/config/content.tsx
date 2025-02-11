import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import JSIcon from "../assets/js-icon.png";
import MongoDBIcon from "../assets/mongo-icon.png";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

export const SIDEBAR_ITEMS = {
  mainItems: [
    {
      label: "intro",
      active: true
    },
    {
      label: "about",
      active: false
    },
    {
      label: "works",
      active: false
    },
    {
      label: "experience",
      active: false
    }
  ],
  externalLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/"
    },
  ]
};

export const INTRO = {
  status: "Available for work",
  heading: "Hi, I’m Jacob. I design and build software to empower people.",
}

export const ABOUT = {
  title: "About me",
  description: "7 years of industry experience as a software engineer, I specialize in JavaScript as my primary tech. I am based in New York and I am open to full-time or part-time remote work opportunities.",
  sectionTwo: {
    title: "Tech stack",
    tech: [
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
        icon: <RiReactjsLine className="text-[#61DBFB] text-lg" />,
      },
      {
        name: "NextJS",
        icon: <TbBrandNextjs className="text-neutral-500 text-lg" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl" />,
      },
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
            height={18}
            width={18}
          />
        ),
      },
    ]
  },
  sectionThree: {
    subtitle: "Regardless of the tech stack,",
    mainTitle: "My priority is to make a",
    gradientTitle: "great product."
  }
};

export const WORKS = [
  {
    imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1738639938/Portfolio-templates/oneguru-img-2_z9oueh.png",
    title: "OneGuru",
    description: "The free and fun way for devs to learn UI/UX design.",
    href: "https://oneguru.io/"
  },
  {
    imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739118146/Portfolio-templates/new-2_nxq1ov.png",
    title: "Manuela",
    description: "A virtual fitting room for fashion enthusiasts.",
    href: "https://manuela-fe.vercel.app/"
  },
];

export const EXPERIENCES = [
  {
    role: "Full Stack Engineer",
    company: "Company Name",
    location: "New York, USA.",
    yearStart: "2024",
    yearEnd: "2024",
    description: "As a full-stack engineer, I developed new features for existing clients and enhanced those that were causing issues within the system."
  },
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    location: "San Diego, California, United States",
    yearStart: "2022",
    yearEnd: "2023",
    description: "As a senior engineer, I handled the development of the media and global menu features and enhanced the configuration of the client's front-end process."
  },
];

export const FOOTER = {
  heading: "Thank you.",
  links: [
    {
      label: "Email me",
      href: "cjacob.d.cruz@gmail.com"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jacob-cruz-b3404b165/"
    }
  ]
}