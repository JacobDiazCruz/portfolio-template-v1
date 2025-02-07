import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import JSIcon from "../assets/js-icon.png";
import MongoDBIcon from "../assets/mongo-icon.png";

export const INTRO = {
  status: "Available for work",
  heading: "Hi, I’m Jacob. A frontend developer who cares about making beautiful products.",
}

export const ABOUT = {
  title: "About me",
  description: "6 years of industry experience as a frontend developer, I specialize in ReactJS as my primary framework. I am based in New York and I am open to remote work and/or relocation for the right opportunity.",
  sectionTwo: {
    title: "Technologies",
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
    imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1738643606/Portfolio-templates/Screenshot_2025-02-04_at_12.33.02_PM_q4nuyi.png",
    title: "OneGuru",
    description: "The free and fun way for devs to learn UI/UX design.",
  },
  {
    imageUrl: "https://theuxda.com/storage/app/media/blog/New/hero-image/Updated%20case%20study%20hero%20images%202024/Case%20study%20-%20Apple%20Vision%20Pro.jpg",
    title: "Manuela",
    description: "The free and fun way for devs to learn UI/UX design.",
  },
  {
    imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*zozNB64v55MEzlvOE9lHnQ.png",
    title: "OneGuru",
    description: "The free and fun way for devs to learn UI/UX design.",
  },
  {
    imageUrl: "https://theuxda.com/storage/app/media/blog/New/hero-image/Updated%20case%20study%20hero%20images%202024/Case%20study%20-%20Apple%20Vision%20Pro.jpg",
    title: "Manuela",
    description: "The free and fun way for devs to learn UI/UX design.",
  },
];

export const EXPERIENCES = [
  {
    role: "Front-end Developer",
    company: "Company Name",
    location: "New York, USA",
    yearStart: "2018",
    yearEnd: "2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!"
  },
  {
    role: "Front-end Developer",
    company: "Company Name",
    location: "New York, USA",
    yearStart: "2018",
    yearEnd: "2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!"
  },
  {
    role: "Front-end Developer",
    company: "Company Name",
    location: "New York, USA",
    yearStart: "2018",
    yearEnd: "2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!"
  },
  {
    role: "Front-end Developer",
    company: "Company Name",
    location: "New York, USA",
    yearStart: "2018",
    yearEnd: "2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!"
  }
];

export const FOOTER = {
  heading: "Thank you.",
  links: [
    {
      label: "me@email.com",
      href: "/"
    },
    {
      label: "Linkedin",
      href: "/"
    }
  ]
}