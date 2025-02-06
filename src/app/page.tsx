import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SlideUpText from "@/components/SlideUpText";
import { FaDocker } from "react-icons/fa6";
import Menu from "@/components/Menu";
import { TECH_LIST } from "@/config";
import BlobContainer from "@/components/BlobContainer";

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
      imageUrl: "https://miro.medium.com/v2/resize:fit:1200/1*zozNB64v55MEzlvOE9lHnQ.png",
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
  ]

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      {/* font-[family-name:var(--font-geist-mono)] */}
      {/* font-[family-name:var(--font-geist-sans)] */}
      <div className="water blur-[40px] fixed opacity-[0.3] mt-[300px] mr-auto w-[350px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
      <section className="page-body grid grid-cols-12 gap-4 items-center justify-center">
        <div id="content" className="col-start-2 col-end-13 md:col-start-5 md:col-end-13">
          {/* <div className="z-5 absolute right-0 -mt-[400px] flex">
            <div className="blur-one bg-gradient-to-r from-[#85C4FF] to-[#ABFFC9] blur-[60px] rounded-full w-[400px] h-[300px]">asd</div>
            <div className="blur-two bg-[#DFD4FE] blur-[40px] rounded-full w-[400px] h-[300px] -ml-8"></div>
            <div className="blur-three bg-red-200 blur-[40px] rounded-full w-[400px] h-[300px] -ml-8"></div>
            <div className="blur-four bg-orange-200 blur-[40px] rounded-full w-[400px] h-[300px] -ml-8"></div>
          </div> */}
          <section id="info" className="relative z-6">
            <div className="border border-neutral-100 bg-white shadow-custom rounded-full w-fit flex items-center px-2 gap-2">
              <div className="rounded-full w-3 h-3 bg-green-400"></div>
              <span className="text-neutral-600">Available for work</span>
            </div>
            <h1 className="heading text-2xl md:text-7xl w-3/4 h-[240px] font-medium mt-5 inline-block bg-gradient-to-r text-transparent bg-clip-text from-neutral-500 via-neutral-600 to-neutral-700">
              Hi, I’m Jacob. A frontend developer who cares about making beautiful products.
            </h1>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-lg md:text-lg font-semibold text-neutral-500">About me</h4>
            {/* <div id="divider" className="w-[30px] bg-dark-main h-1 my-3"></div> */}
            <p className="text-md md:text-xl w-[90%] mt-5 md:w-1/2 font-medium text-dark-main">
              6 years of industry experience as a frontend developer, I specialize in ReactJS as my primary framework. I am based in New York and I am open to remote work and/or relocation for the right opportunity.
            </p>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Technologies</h4>
            {/* <div id="divider" className="w-[30px] bg-dark-main h-1 my-3"></div> */}
            {/* <div className="flex gap-4 items-center">
              <FaReact className="w-[60px] h-[60px] text-[#61DBFB]"/>
              <TbBrandNextjs className="w-[60px] h-[60px]" />
              <SiTailwindcss className="w-[60px] h-[60px] text-[#00bcff]" />
              <FaDocker className="w-[60px] h-[60px] text-[#099cec]" />
            </div> */}
            <div className="flex mt-5 flex-col flex-1 md:flex-row gap-7 md:gap-3">
              {TECH_LIST.map((item: any, index: number) => (
                <div key={index}>
                  <ul className="frontend-list flex flex-col gap-3 mt-5">
                    {item.technologies.map((tech: any, techIndex: number) => (
                      <li key={techIndex} className="flex items-center w-full md:w-[180px] h-[60px] gap-3 bg-white rounded-lg p-4 text-sm shadow-custom border-custom border">
                        {tech.icon}
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="about">
            <h4 className="text-2xl font-medium text-neutral-600">Regardless of the tech stack,</h4>
            <div className="flex gap-1">
              <h2 className="text-5xl font-semibold text-dark-main">My priority is to make a</h2>
              <SlideUpText />
            </div>
          </section>

          <section id="works" className="content-section lg:w-[900px]">
            <div>
              <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Works</h4>
            </div>
            <div className="flex flex-wrap items-center w-full gap-4 mt-5">
              {Works.map((work: any, idx: number) => (
                <div key={idx} className="card">
                  <div className="w-[400px] h-[300px] relative overflow-hidden">
                    <Image src={work.imageUrl} alt={work.title} fill />
                  </div>
                  <div className="py-5">
                    <h4 className="font-bold">{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="works" className="content-section lg:w-[900px] border-t">
            <div>
              <h4 className="text-2xl font-semibold">Experience</h4>
              <div id="divider" className="w-[30px] bg-black h-1 my-3"></div>
            </div>
            <div className="w-full flex flex-col gap-y-[50px] mt-[50px]">
              {Experiences.map((exp: any, idx: number) => (
                <div key={idx} className="flex justify-between w-full">
                  <p className="font-medium text-3xl"><b>{exp.company}</b></p>
                  <div className="w-[400px]">
                    <p className="mt-1 font-semibold text-lg">{exp.role}</p>
                    <p className="mt-1 text-neutral-600">{exp.location}, {exp.yearStart} - {exp.yearEnd}</p>
                    <p className="text-neutral-600 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!</p>
                  </div>
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
