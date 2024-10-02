import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import { educations } from "@/utils/data/educations";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/study.json";

function Education() {

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const section = document.getElementById("education");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayAnimation(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }} 
  variants={textVariant}
>
  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      <span className="bg-[#1a1443] w-fit text-white p-3 px-6 text-xl font-extrabold ">
        Education
      </span>
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    </div>
  </div>
</motion.div>




      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} play={playAnimation} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Background"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 w-full h-auto"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src={education.image}
                            alt={education.title}
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                          />
                        </div>

                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
