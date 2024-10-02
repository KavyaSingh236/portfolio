import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/utils/data/experience";
import GlowCard from "../../helper/glow-card";
import Image from "next/image";

const ExperienceCard = ({ experience, position, identifier }) => {
  return (
    <GlowCard identifier={identifier}>
      <a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        <motion.div
          initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className={`experience-card p-4 sm:p-6 bg-[#1d1836] text-white rounded-lg shadow-lg relative w-full`} // Reduced padding
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <div
              className="w-12 sm:w-16 h-12 sm:h-16 flex justify-center items-center rounded-full" // Reduced icon size
              style={{ backgroundColor: experience.iconBg }}
            >
              <div className="relative w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden"> {/* Reduced icon size */}
                <Image
                  src={experience.icon}
                  alt={experience.company_name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
            </div>

            <div className="ml-3 sm:ml-4">
              <h2 className="text-lg sm:text-xl font-semibold">{experience.title}</h2> {/* Reduced font size */}
              <h3 className="text-sm sm:text-md font-medium text-secondary text-[#16f2b3]">
                {experience.company_name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">{experience.date}</p>
            </div>
          </div>

          <div>
            <p className="text-xs sm:text-sm leading-relaxed">{experience.description}</p> {/* Reduced font size */}
          </div>
        </motion.div>
      </a>
    </GlowCard>
  );
};

const Experience = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <section className="relative py-6 sm:py-12"> {/* Adjusted padding */}
      <div id="experience" className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariant}
        className="text-center mb-6 sm:mb-12"
      >
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-12 sm:w-16 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-1 sm:p-2 sm:px-4 text-base sm:text-lg font-extrabold">
              Experience
            </span>
            <span className="w-12 sm:w-16 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </motion.div>

      <div className="relative mt-6 sm:mt-12">
        {/* Vertical line */}
        <div
          className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#1a1443] top-0"
          style={{ top: "6rem" }}
        />

        {/* Timeline items */}
        <div className="flex flex-col space-y-12 sm:space-y-24 relative">
          {experiences.map((experience, index) => {
            const position = index % 2 === 0 ? "left" : "right";

            // For small screens, stack items vertically
            return (
              <div
                key={`experience-${index}`}
                className={`flex ${
                  position === "left"
                    ? "sm:justify-start justify-center"
                    : "sm:justify-end justify-center"
                } relative`}
              >
                <div
                  className={`w-full sm:w-1/2 ${
                    position === "left" ? "text-left" : "text-right"
                  } relative`}
                >
                  <ExperienceCard
                    experience={experience}
                    position={position}
                    identifier={`experience-${index}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
