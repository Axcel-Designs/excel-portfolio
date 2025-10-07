"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ButtonForm } from "./ui/button";

export default function Contact() {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setInterval(() => setAlert(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  function handleSubmit(e) {
    e.preventDefault();
    setAlert(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          setAlert({ type: "success", message: "Message sent successfully!" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setAlert({ type: "error", message: "Could not send message." });
        }
      );
  }

  return (
    <div className="bg-gray-950 text-gray-200">
      <section
        id="contact"
        className="container mx-auto items-center gap-4 p-10 text-center"
      >
        <div className="my-6">
          <p className="text-4xl my-6 text-center">LET'S CONNECT</p>
          <p>
            Ready to start your next project? Let's design and develop something
            amazing together!
          </p>
        </div>

        <div className="w-full sm:w-120 md:w-150 lg:w-180 mx-auto">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid gap-4"
            autoComplete="on"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="p-2 rounded outline-double"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded outline-double"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-2 rounded outline-double"
              required
            />
            <textarea
              name="message"
              id="message"
              className="p-2 rounded outline-double"
              rows={4}
              required
            ></textarea>
            <ButtonForm type="submit" label="Submit" />
          </form>

          {alert && (
            <div
              className={`mt-4 text-2xl font-semibold${
                alert.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {alert.message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
