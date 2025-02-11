import About from "@/components/About";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import { FOOTER, INTRO } from "@/config/content";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home() {

  return (
    <main className="w-full bg-white font-sans overflow-hidden relative">
      <Sidebar />
      <div className="water blur-[40px] absolute md:fixed opacity-[0.3] mt-[300px] mr-auto w-[350px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500" />
      <section className="grid grid-cols-12 gap-4 items-center justify-center">
        <div id="content" className="col-start-2 2xl:w-[1300px] col-end-12 col-start-2 col-end-12 md:col-start-5 md:col-end-13">
          <section id="info" className="relative z-6 lg:pr-[100px]">
            <div className="border border-neutral-100 bg-white shadow-custom rounded-full w-fit flex items-center px-2 gap-2">
              <div className="rounded-full w-3 h-3 bg-green-400" />
              <span className="text-neutral-600 text-sm">{INTRO.status}</span>
            </div>
            <h1 className="heading text-gray-900 mt-2 md:mt-2 text-4xl md:text-5xl xl:text-7xl w-full md:w-3/4 pb-3 font-medium bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-700 inline-block text-transparent bg-clip-text">
              {INTRO.heading}
            </h1>
          </section>
          <About />
          <Works />
          <Experience />

          <footer className="content-section">
            <h4 className="text-2xl md:text-5xl font-semibold">
              {FOOTER.heading}
            </h4>
            <div className="flex items-center gap-2 md:gap-12 mt-5 w-1/2 flex-wrap">
              <div>
                <a href="mailto:test@gmail.com">
                  <p className="mt-1">Email</p>
                  <div className="w-full h-[1px] bg-neutral-300" />
                </a>
              </div>
              <Link href="https://www.linkedin.com/in/" target="_blank">
                <p className="mt-1">LinkedIn</p>
                <div className="w-full h-[1px] bg-neutral-300" />
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
