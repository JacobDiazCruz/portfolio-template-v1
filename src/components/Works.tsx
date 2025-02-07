import { WORKS } from "@/config";
import Image from "next/image";

export default function Works() {
  return (
    <section id="works" className="content-section w-full lg:w-[900px]">
      <div>
        <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Works</h4>
      </div>
      <div className="flex flex-wrap items-center w-full gap-5 mt-5">
        {WORKS.map((work: any, idx: number) => (
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
              <h4 className="font-semibold">{work.title}</h4>
              <p className="text-neutral-500">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
