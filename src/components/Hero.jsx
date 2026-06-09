"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button, { ButtonWhite } from "./ui/button";
import pic from "../../src/assets/excel.jpg";

export default function Hero() {
  function scrollToSection(href) {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="relative container mx-auto grid grid-cols-2 max-sm:grid-cols-1 items-center gap-8 p-6 min-h-screen overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* LEFT CONTENT */}
      <div className="space-y-6">
        {/* Name intro */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-gray-300"
        >
          Hello, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold"
        >
          K. Excel Acha
        </motion.h1>

        {/* Role */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="
            text-2xl font-semibold
            bg-gradient-to-r from-yellow-400 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Software Developer | Full Stack Web Developer
        </motion.p>

        {/* Description */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 leading-relaxed"
        >
          I am an enthusiastic, self-motivated, reliable, responsible and
          hard-working developer. I build modern, scalable, and user-focused web
          applications with attention to performance and design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8 }}
          className="flex max-md:flex-col w-fit gap-4"
        >
          <div className="transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <Button
              label="View My Work"
              onClick={() => scrollToSection("#projects")}
            />
          </div>

          <div className="transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <ButtonWhite
              label="Get In Touch"
              onClick={() => scrollToSection("#contact")}
            />
          </div>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.8 }}
        className="relative hidden md:flex justify-center items-center"
      >
        {/* Glow */}
        <div className="absolute w-80 h-80 rounded-full bg-yellow-500/20 blur-3xl" />

        {/* Image (NO BOUNCE — CLEAN) */}
        <div className="relative">
          <Image
            src={pic}
            alt="profilePic"
            height={800}
            priority
            className="rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
}
