import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Service />
      <Contact />
    </main>
  );
}
