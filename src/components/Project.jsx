import { projectData } from "@/utils/projectData";
import Button, { ButtonWhite } from "./ui/button";
import Link from "next/link";
import { LuArrowBigRightDash, LuGithub } from "react-icons/lu";
import Image from "next/image";

export default function Project() {
  return (
    <section className="container mx-auto items-center gap-4 p-6">
      <div className="my-6">
        <p className="text-4xl my-6 text-center">Project</p>
        <p>
          Explore my featured projects showcasing modern web development, data
          visualization, and interactive user experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
        {projectData.map(({ id, name, des, tech, img, livehref, codehref }) => (
          <div
            key={id}
            className="flex flex-col justify-between shadow/60 shadow-white p-4 rounded-xl w-[300px] h-[530px] mx-auto"
          >
            <div>
              <Image src={img} alt={`project ${name}`} />
            </div>
            <p className="text-2xl my-4">{name}</p>
            <p className="text-gray-400 my-4">{des}</p>
            <div>

            <div className="flex gap-2 flex-wrap text-[10px] text-gray-400">
              {tech.map((t,i) => (
                <div key={i} className="ring px-2 py-1 rounded">
                  <p className="text-gray-100">{t}</p>
                </div>
              ))}
            </div>
            <div className="w-fit flex gap-4 my-4 items-center text-sm">
              <Link href={livehref} target="_blank">
                <Button label="Live Demo" icon={<LuArrowBigRightDash />} />
              </Link>
              <Link href={codehref} target="_blank">
                <ButtonWhite label="Code" icon={<LuGithub />} />
              </Link>
            </div>
          </div>
            </div>
        ))}
      </div>
      <div className="mx-auto w-fit my-6">
        <div className="shadow/60 shadow-white p-4 rounded-xl wo-[450px]">
          <div>{/* <Image src={img} alt={`project ${name}`} /> */}</div>
          <p className="text-2xl my-4">Graphics Design Portfolio</p>
          <p className="text-gray-400 my-4">text-gray-100</p>
          <div className="w-fit flex gap-4 my-4 items-center text-sm">
            <Link href={""}>
              <Button label="View" icon={<LuArrowBigRightDash />} />
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  );
}
