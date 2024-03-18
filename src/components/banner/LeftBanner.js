import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaPenNib, FaNetworkWired, FaLinux, FaCode, FaJava, FaPython, FaBrain } from "react-icons/fa";
import Skills from './skills';
// import { SiNestdotjs, SiSqlite, SiFirebase } from "react-icons/si";
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Cyber Security Specialist.", "Pen Tester.", "Part Time Web Developer.", 'Linux Fanatic.', 'Competitive Programmer'],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-green-500">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Amanuel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-200">
  A die-hard cyber fanatic, with deep passion for competitive programming and system software developemnt as hobbies, I'm a professional coder with a strong background in cyber security and web development. I'm also a Linux enthusiast and a competitive programmer. As a cyber security specialist, everything about a computer is a matter of interest.
  </p>


      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
  <a href="https://www.facebook.com/amanuel.tsehay.391" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com/amanueltsehay1" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaTwitter />
  </a>
  <a href="https://www.linkedin.com/in/amanuel-tsehay-30843523a/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
    <FaLinkedinIn />
  </a>
</div>

        </div>
        <div>
  <h2 className="text-base uppercase font-titleFont mb-4 mt-10 ">
    BEST SKILL ON
  </h2>
  <div className="flex gap-4">
   <Skills></Skills>
    {/* <span className="bannerIcon">
      <SiNestdotjs />
    </span>
    <span className="bannerIcon">
      <SiSqlite />
    </span>
    <span className="bannerIcon">
      <SiFirebase />
    </span> */}
  </div>
</div>

      </div>
    </div>
  );
}

export default LeftBanner