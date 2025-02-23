import { WORKS } from "@/config/content";
import { IWork } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section id="works" className="content-section w-full lg:w-[900px]">
      <div>
        <h4 className="text-lg md:text-lg font-semibold text-neutral-500">Selected Works</h4>
      </div>
      <div className="flex flex-wrap items-center w-full gap-5 mt-5">
        {WORKS.map((work: IWork, idx: number) => (
          <div key={idx}>
            {work?.href ? (
              <Link href={work?.href} className="w-[300px]" target="_blank">
                <div className="card p-5 shadow-card rounded-lg">
                  <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
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
              </Link>
            ) : (
              <>
                <div className="card p-5 shadow-card rounded-lg">
                  <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
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
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
