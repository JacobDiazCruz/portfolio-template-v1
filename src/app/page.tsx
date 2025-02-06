"use client"

import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SlideUpText from "@/components/SlideUpText";
import { FaDocker } from "react-icons/fa6";
import Menu from "@/components/Menu";
import { TECH_LIST } from "@/config";
import BlobContainer from "@/components/BlobContainer";
import { useState } from "react";

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

  const [works, setWorks] = useState([
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
  ]);

  return (
    <div className="w-full bg-white font-sans overflow-hidden relative">
      <Menu />
      {/* font-[family-name:var(--font-geist-mono)] */}
      {/* font-[family-name:var(--font-geist-sans)] */}
      <div className="water blur-[40px] absolute md:fixed opacity-[0.3] mt-[300px] mr-auto w-[350px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
      <section className="grid grid-cols-12 gap-4 items-center justify-center">
        <div id="content" className="col-start-2 col-end-13 col-start-2 col-end-12 md:col-start-5 md:col-end-13">
          <section id="info" className="relative z-6">
            <div className="border border-neutral-100 bg-white shadow-custom rounded-full w-fit flex items-center px-2 gap-2">
              <div className="rounded-full w-3 h-3 bg-green-400"></div>
              <span className="text-neutral-600">Available for work</span>
            </div>
            {/* text-2xl md:text-7xl w-3/4 h-[240px] overflow-visible font-medium mt-5 inline-block */}
            <h1 className="text-gray-900 mt-2 md:mt-0 text-4xl md:text-7xl w-full md:w-3/4 pb-3 font-medium">
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

          <section>
            <h4 className="text-md md:text-2xl font-medium text-neutral-600">Regardless of the tech stack,</h4>
            <div className="flex gap-1">
              <h2 className="text-3xl md:text-5xl font-semibold text-dark-main">My priority is to make a&nbsp;
                <span className="heading-two">great product</span>.
              </h2>
            </div>
          </section>

          <section id="works" className="content-section w-full lg:w-[900px]">
            <div>
              <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Works</h4>
            </div>
            <div className="flex flex-wrap items-center w-full gap-5 mt-5">
              {works.map((work: any, idx: number) => (
                <div key={idx}>
                  <div className="card p-5 shadow-card rounded-lg">
                    <div className="relative md:w-[400] h-[400]">
                      <Image 
                        src={work.imageUrl} 
                        alt={work.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="py-4">
                    <h4 className="font-bold">{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="experience" className="content-section w-full lg:w-[900px] border-t">
            <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Experience</h4>
            <div className="w-full flex flex-col gap-y-[50px] mt-[50px]">
              {Experiences.map((exp: any, idx: number) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between w-full">
                  <p className="font-medium text-xl md:text-3xl"><b>{exp.company}</b></p>
                  <div className="w-full md:w-[400px]">
                    <p className="mt-1 font-semibold text-md md:text-lg">{exp.role}</p>
                    <p className="mt-1 text-sm md:text-md text-neutral-600">{exp.location}, {exp.yearStart} - {exp.yearEnd}</p>
                    <p className="text-sm md:text-md text-neutral-600 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique aliquid unde, architecto hic et dolores ratione, enim, tenetur ipsam laudantium magni eos cum esse accusamus commodi natus debitis quis!</p>
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
