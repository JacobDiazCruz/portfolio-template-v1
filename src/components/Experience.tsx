import { EXPERIENCES } from "@/config/content";

export default function Experience() {
  return (
    <section id="experience" className="content-section w-full lg:w-[900px] border-t">
      <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Experience</h4>
      <div className="w-full flex flex-col gap-y-[50px] mt-[50px]">
        {EXPERIENCES.map((exp: any, idx: number) => (
          <div key={idx} className="flex flex-col md:flex-row justify-between w-full">
            <p className="font-medium text-xl md:text-3xl"><b>{exp.company}</b></p>
            <div className="w-full md:w-[400px]">
              <p className="mt-1 font-semibold text-md md:text-lg">{exp.role}</p>
              <p className="mt-1 text-sm md:text-md text-neutral-600">{exp.location}, {exp.yearStart} - {exp.yearEnd}</p>
              <p className="text-sm md:text-md text-neutral-600 mt-5">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
