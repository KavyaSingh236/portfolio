// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useEffect, useState } from "react";

function AboutSection() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimationClass("animate-slide-in");
        } else {
          setAnimationClass(""); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    id="about"
    className={`my-12 lg:my-16 relative ${animationClass} transition-opacity duration-500`}
  >
    {/* Side text - About Me */}
    <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
      <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md hover:text-[#16f2b3] transition duration-300 ease-in-out">
        ABOUT ME
      </span>
      <span className="h-36 w-[2px] bg-[#1a1443]"></span>
    </div>
    
    {/* Grid layout for text and image */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      
      {/* Text Content */}
      <div className="order-2 lg:order-1">
        <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
          About me
        </p>
        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
          Experienced full-stack web developer with a strong foundation in HTML, CSS, JavaScript, and the <span className="text-teal-300 font-semibold">MERN stack</span>. Skilled in creating scalable and efficient applications using Java, Python, Django, C, R, and SQL.
          <br />
          My portfolio includes projects such as <span className="text-teal-400 font-semibold">TrailsByKav</span>, <span className="text-teal-400 font-semibold">KOSRA Travel Management</span>, <span className="text-teal-400 font-semibold">Tempsat</span>, and <span className="text-teal-400 font-semibold">Pixel Craft</span>.
          <br />
          Passionate about solving complex problems and honing skills. Actively involved in community service through <span className="text-teal-300 font-semibold">NSS</span> and <span className="text-teal-300 font-semibold">YSF</span>.
        </p>
      </div>
      
      {/* Profile Image with hover effects */}
      <div className="flex justify-center order-1 lg:order-2">
        <Image
          src={personalData.profile}
          width={280}
          height={280}
          alt="Profile Picture"
          className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 hover:border-4 hover:border-[#16f2b3] cursor-pointer shadow-lg"
        />
      </div>
    </div>
  </div>
  
  );
};

export default AboutSection;
