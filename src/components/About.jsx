import { techStackData } from "@/utils/data";

export default function About() {
  return (
    <div className="bg-[#0f0f0f]">
      <section id="about" className="container mx-auto items-center gap-4 p-6 text-gray-200 text-center">
        <div>
          <p className="text-4xl my-6">About</p>
          <p>
            I’m a dedicated software developer passionate about building modern,
            robust, and user-focused digital solutions. With experience spanning
            Software development, I specialize in creating impactful products
            that solve real problems and deliver value. My goal is to combine
            technical expertise with creativity to craft solutions that truly
            make a difference.
          </p>
        </div>
        <div>
          <p className="text-2xl my-6">Tech Stack</p>
            <div className="flex flex-wrap gap-10 text-sm text-gray-100 p-4 justify-center items-center">
              {techStackData.map((tech) => (
                <div key={tech} className="p-2  rounded-lg bg-yellow-900">
                  {tech}
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
