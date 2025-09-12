import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Service />
      <Contact />
    </main>
  );
}
