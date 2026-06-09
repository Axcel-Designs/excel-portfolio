import { techStackData } from "@/utils/data";

export default function About() {
  return (
    <div className="bg-[#0f0f0f]">
      <section
        id="about"
        className="container mx-auto items-center gap-4 py-10 text-gray-200 text-center"
      >
        <div>
          <p className="text-4xl my-6">About</p>
          <p>
            I am a dedicated software developer passionate about building
            modern, robust, and user-focused digital solutions. With experience
            spanning Software development, web development to design I
            specialize in creating impactful products that solve real problems
            and deliver value. My goal is to combine technical expertise with
            creativity to craft solutions that truly make a difference.
          </p>
        </div>
        <div>
          <p className="text-2xl my-6">Tech Stack</p>
          <div className="overflow-visible w-full">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {[...techStackData, ...techStackData, ...techStackData].map(
                ({ tech, icon }, key) => (
                  <button
                    key={`${key}`}
                    className="group relative p-2 rounded-lg bg-yellow-900 flex-shrink-0"
                  >
                    {icon}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {tech}
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
