import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SlideUpText from "@/components/SlideUpText";
import { FaDocker } from "react-icons/fa6";
import Menu from "@/components/Menu";

export default function Home() {

  const Experiences = [
    {
      role: "Front-end Developer",
      company: "Company Name",
      location: "New York, USA",
      yearStart: "2018",
      yearEnd: "2022"
    },
    {
      role: "Front-end Developer",
      company: "Company Name",
      location: "New York, USA",
      yearStart: "2018",
      yearEnd: "2022"
    },
    {
      role: "Front-end Developer",
      company: "Company Name",
      location: "New York, USA",
      yearStart: "2018",
      yearEnd: "2022"
    },
    {
      role: "Front-end Developer",
      company: "Company Name",
      location: "New York, USA",
      yearStart: "2018",
      yearEnd: "2022"
    }
  ];

  const Works = [
    {
      imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1738588090/Portfolio-templates/Screenshot_2025-02-03_at_9.02.43_PM_jpcizl.png",
      title: "OneGuru",
      description: "The free and fun way for devs to learn UI/UX design.",
    },
    {
      imageUrl: "https://res.cloudinary.com/dqrtlfjc0/image/upload/v1738588090/Portfolio-templates/Screenshot_2025-02-03_at_9.02.43_PM_jpcizl.png",
      title: "OneGuru",
      description: "The free and fun way for devs to learn UI/UX design.",
    }
  ]

  return (
    <div className="w-full bg-white font-sans">
      <Menu />

      <section className="page-body grid grid-cols-12 gap-4 items-center justify-center">
        <div id="content" className="col-start-2 col-end-13 md:col-start-5 md:col-end-13">
          <section id="info">
            <div className="border border-neutral-200 rounded-full w-fit flex items-center px-2 gap-2">
              <div className="rounded-full w-3 h-3 bg-green-400"></div>
              <span className="text-neutral-600">Available for work</span>
            </div>
            <h1 className="heading text-2xl md:text-7xl w-3/4 font-medium mt-5 inline-block bg-gradient-to-r text-transparent bg-clip-text from-neutral-500 via-neutral-600 to-neutral-700">
              Hi, I’m Jacob. A frontend developer who cares about making beautiful products that excites people.
            </h1>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-lg md:text-2xl font-semibold text-dark-main">About</h4>
            <div id="divider" className="w-[30px] bg-dark-main h-1 my-3"></div>
            <p className="text-md md:text-xl w-[90%] md:w-1/2 font-medium text-dark-main">
              6 years of industry experience as a frontend developer, I specialize in ReactJS as my primary framework. I am based in New York and I am open to remote work and/or relocation for the right opportunity.
            </p>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-lg md:text-2xl font-semibold text-dark-main">Tech stack</h4>
            <div id="divider" className="w-[30px] bg-dark-main h-1 my-3"></div>
            <div className="flex gap-4 items-center">
              <FaReact className="w-[60px] h-[60px] text-[#61DBFB]"/>
              <TbBrandNextjs className="w-[60px] h-[60px]" />
              <SiTailwindcss className="w-[60px] h-[60px] text-[#00bcff]" />
              <FaDocker className="w-[60px] h-[60px] text-[#099cec]" />
            </div>
          </section>

          <section id="about">
            <h4 className="text-2xl font-medium text-neutral-600">Regardless of the tech stack,</h4>
            <div className="flex gap-1">
              <h2 className="text-5xl font-semibold text-dark-main">My priority is to make a</h2>
              <SlideUpText />
            </div>
          </section>

          <section id="works" className="content-section w-1/2">
            <div>
              <h4 className="text-2xl font-semibold">Works</h4>
              <div id="divider" className="w-[30px] bg-black h-1"></div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              {Works.map((work: any, idx: number) => (
                <div key={idx} className="card w-1/2 border rounded-[20px]">
                  <Image src={work.imageUrl} alt={work.title} width={300} height={300} />
                  <div className="p-5">
                    <h4 className="font-bold">{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="works" className="content-section">
            <div>
              <h4 className="text-2xl font-semibold">Experience</h4>
              <div id="divider" className="w-[30px] bg-black h-1 my-3"></div>
            </div>
            <div className="flex items-center gap-12 w-1/2 flex-wrap">
              {Experiences.map((exp: any, idx: number) => (
                <div key={idx}>
                  <p><b>{exp.role}</b></p>
                  <p className="mt-1">{exp.company}, {exp.location}</p>
                  <p className="mt-1">{exp.yearStart}-{exp.yearEnd}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="works" className="content-section">
            <h4 className="text-2xl md:text-5xl font-semibold">Thank you.</h4>
            <div className="flex items-center gap-2 md:gap-12 mt-5 w-1/2 flex-wrap">
              <div>
                <p className="mt-1">me@email.com</p>
                <div className="w-full h-[1px] bg-neutral-300"></div>
              </div>
              <div>
                <p className="mt-1">LinkedIn</p>
                <div className="w-full h-[1px] bg-neutral-300"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
