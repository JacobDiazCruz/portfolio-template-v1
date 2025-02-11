import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import JSIcon from "../assets/js-icon.png";
import MongoDBIcon from "../assets/mongo-icon.png";

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
      href: "https://www.linkedin.com/in/jacob-cruz-b3404b165/"
    },
  ]
};

export const INTRO = {
  status: "Available for work",
  heading: "Hi, I’m Jacob. I design and build software to empower people.",
}

export const ABOUT = {
  title: "About me",
  description: "7 years of industry experience as a software engineer, I specialize in JavaScript as my primary tech. I am based in Manila and I am open to full-time or part-time remote work opportunities.",
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
        icon: <GrReactjs className="text-[#00ddff] text-lg" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#00c0fe] text-lg" />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-[#007acc] text-2xl" />,
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
  // {
  //   imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739118539/Portfolio-templates/mockup2_iq9w6n.png",
  //   title: "Gordon Ramsay Site Re-design",
  //   description: "Redesigning an online restaurant booking web app."
  // },
  // {
  //   imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1738643606/Portfolio-templates/Screenshot_2025-02-04_at_12.33.02_PM_q4nuyi.png",
  //   title: "GSL Construction Mockup",
  //   description: "A design mockup for GSL Construction."
  // },
  // {
  //   imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1739157047/Rivals%20positioning/Screenshot_2025-02-10_at_11.10.26_AM_k2lypy.png",
  //   title: "PeakRivals",
  //   description: "A Marvel Rival's Guide platform with over 30,000 monthly visitors.",
  //   href: "https://www.peakrivals.com/"
  // },
];

export const EXPERIENCES = [
  {
    role: "Full Stack Engineer",
    company: "MVSI",
    location: "Melbourne, Australia",
    yearStart: "2024",
    yearEnd: "2024",
    description: "As a full-stack engineer, I developed new features for existing clients and enhanced those that were causing issues within the system."
  },
  {
    role: "Senior Software Engineer",
    company: "Zesty / Emapta",
    location: "San Diego, California, United States",
    yearStart: "2022",
    yearEnd: "2023",
    description: "As a senior engineer, I handled the development of the media and global menu features and enhanced the configuration of the client's front-end process."
  },
  {
    role: "Senior Software Engineer / Front-end Lead",
    company: "Yondu, Inc.",
    location: "BGC, Philippines",
    yearStart: "2019",
    yearEnd: "2022",
    description: "I led the development of Vessel from scratch, an in-house product at Yondu, which provides e-commerce businesses with a wide variety of features, such as setting up online stores and integrating payment options."
  },
  {
    role: "Software Engineer",
    company: "Willis Towers Watson",
    location: "BGC, Philippines",
    yearStart: "2019",
    yearEnd: "2019",
    description: "I design and developed survey web applications for our clients in Europe."
  }
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