import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ui/ScrollTop";

const oxanium = Oxanium({
  subsets: ["latin"],
});

export const metadata = {
  title: "Acha K. Excel Portfolio",
  description: "Software Engineer | Front-End Developer | Tech Enthusiast ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/axcelblack.png" />
      </head>
      <body
        className={`${oxanium.className} antialiased min-h-screen flex flex-col bg-black text-gray-100 overflow-x-hidden`}
      >
        <Header />
        <div className="grow">{children}</div>
        <ScrollTop/>
        <Footer />
      </body>
    </html>
  );
}
