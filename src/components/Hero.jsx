"use client";
import Button, { ButtonWhite } from "./ui/button";
import pic from "../../src/assets/excel.jpg";
import Image from "next/image";

export default function Hero() {
  function scrollToSection(href) {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section id="home" className="container mx-auto grid grid-cols-2 max-sm:grid-cols-1 items-center gap-4 p-6">
      <div>
        <p className="my-2">Hello, my name is</p>
        <b className="text-4xl my-2">K. Excel Acha</b>
        <p className="text-2xl font-semibold my-4">
          Software Developer | Frontend Specialist
        </p>
        <p>
          A professional dedicated to delivering updated, robust services in
          information technology, from web development to graphics design and
          social media management
        </p>
        <div className="flex max-md:flex-col w-fit gap-4 my-4">
          <Button label="View My Work" onClick={()=>scrollToSection("#projects")} />
          <ButtonWhite label="Get In Touch" onClick={()=>scrollToSection("#contact")}/>
        </div>
      </div>
      <div className="flex gap-1 ">
        <Image
          src={pic}
          alt="profilePic"
          height={800}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
