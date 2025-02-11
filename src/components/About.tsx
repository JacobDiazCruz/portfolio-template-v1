import { ReactNode } from "react";
import { ABOUT } from "@/config/content";

export interface TechItem {
  icon: ReactNode;
  name: string;
}
export default function About() {
  return (
    <section id="about" className="content-section">
      <div>
        <h4 className="text-lg md:text-lg font-semibold text-neutral-500">{ABOUT.title}</h4>
        <p className="text-md md:text-xl w-[90%] mt-5 md:w-1/2 font-medium text-dark-main">
          {ABOUT.description}
        </p>
      </div>
      <div id="about" className="content-section relative z-5">
        <h4 className="text-lg md:text-lg font-semibold text-neutral-500">{ABOUT.sectionTwo.title}</h4>
        <div className="flex mt-5 flex-col flex-1 md:flex-row gap-7 md:gap-3">
          <ul className="frontend-list flex flex-col md:flex-row md:flex-wrap w-full md:w-[600px] gap-3">
            {ABOUT.sectionTwo.tech.map((item: TechItem, index: number) => (
              <li key={index} className="flex items-center w-full md:w-[180px] h-[60px] gap-3 rounded-lg p-4 text-sm shadow-custom border-custom border">
                <span>{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-md md:text-2xl font-medium text-neutral-600">
          {ABOUT.sectionThree.subtitle}
        </h4>
        <div className="flex md:gap-3 flex-col md:flex-row">
          <h2 className="text-2xl md:text-5xl font-semibold text-dark-main">
            {ABOUT.sectionThree.mainTitle}
          </h2>
          <h2 className="heading-two text-2xl md:text-5xl font-semibold text-dark-main pb-2">
            {ABOUT.sectionThree.gradientTitle}
          </h2>
        </div>
      </div>
    </section>
  );
}
