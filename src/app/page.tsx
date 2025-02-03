import Image from "next/image";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SlideUpText from "@/components/SlideUpText";

export default function Home() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="sidebar fixed h-[100vh]">
        <div className="p-10">
          <div className="font-semibold text-2xl">J.</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center px-10 mt-[100px]">
            <ul className="space-y-1 h-[400px]"> {/* Added space between list items */}
              <li>Intro</li>
              <li>Works</li>
              <li>Experience</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="page-body grid grid-cols-12 gap-4 items-center justify-center">
        <div id="content" className="col-start-5 col-end-13">
          <section id="info">
            <div className="border border-neutral-200 rounded-full w-fit flex items-center px-2 gap-2">
              <div className="rounded-full w-3 h-3 bg-green-400"></div>
              <span className="text-neutral-600">Available for work</span>
            </div>
            <h1 className="text-7xl w-3/4 font-medium mt-5">
              Hi, I’m Jacob. A frontend developer who cares about making beautiful products that excites people.
            </h1>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-2xl font-semibold">About</h4>
            <div id="divider" className="w-[30px] bg-black h-1"></div>
            <p className="text-xl w-1/2 font-medium mt-5">
              6 years of industry experience as a frontend developer, I specialize in ReactJS as my primary framework. I am based in New York and I am open to remote work and/or relocation for the right opportunity.
            </p>
          </section>
          <section id="about" className="content-section">
            <h4 className="text-2xl font-semibold">Tech stack</h4>
            <div id="divider" className="w-[30px] bg-black h-1"></div>
            <div className="flex gap-4 items-center mt-5">
              <FaReact className="w-[60px] h-[60px] text-[#61DBFB]"/>
              <TbBrandNextjs className="w-[60px] h-[60px]" />
              <SiTailwindcss className="w-[60px] h-[60px] text-[#00bcff]" />
            </div>
          </section>

          <section id="about" className="content-section">
            <h4 className="text-2xl font-medium text-neutral-600">Regardless of the tech stack,</h4>
            <div className="flex gap-1">
              <h2 className="text-5xl font-semibold">My priority is to make a</h2>
              <SlideUpText />
            </div>
          </section>

          <section id="works" className="content-section">
            <div>
              <h4 className="text-2xl font-semibold">Works</h4>
              <div id="divider" className="w-[30px] bg-black h-1"></div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="card w-1/2 border rounded-[20px] p-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque cupiditate non quasi blanditiis perspiciatis quos molestiae assumenda fuga quibusdam cumque, quis magni! Sit a, necessitatibus exercitationem blanditiis non possimus nam.
              </div>
            </div>
          </section>

          <section id="works" className="content-section">
            <div>
              <h4 className="text-2xl font-semibold">Experience</h4>
              <div id="divider" className="w-[30px] bg-black h-1"></div>
            </div>
            <div className="flex items-center gap-12 mt-5 w-1/2 flex-wrap">
              <div>
                <p><b>Front-end Developer</b></p>
                <p className="mt-1">Company, New York, USA</p>
                <p className="mt-1">2018-2022</p>
              </div>
              <div>
                <p><b>Front-end Developer</b></p>
                <p className="mt-1">Company, New York, USA</p>
                <p className="mt-1">2018-2022</p>
              </div>
              <div>
                <p><b>Front-end Developer</b></p>
                <p className="mt-1">Company, New York, USA</p>
                <p className="mt-1">2018-2022</p>
              </div>
              <div>
                <p><b>Front-end Developer</b></p>
                <p className="mt-1">Company, New York, USA</p>
                <p className="mt-1">2018-2022</p>
              </div>
            </div>
          </section>

          <section id="works" className="content-section">
            <h4 className="text-5xl font-semibold">Thank you.</h4>
            <div className="flex items-center gap-12 mt-5 w-1/2 flex-wrap">
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
