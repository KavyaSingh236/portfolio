"use client";
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa"; 
import ContactWithCaptcha from "./contact-with-captcha";
import ContactWithoutCaptcha from "./contact-without-captcha";
import { motion } from "framer-motion";

function ContactSection() {
  // Text variant for animation
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Icon hover effect
  const iconHover = {
    hover: { scale: 1.2, rotate: 10, color: "#16f2b3", transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      id="contact"
      className="my-12 lg:my-16 relative mt-24 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <br />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger animation when component is in view
        variants={textVariant}
      >
        <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            CONTACT
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
        process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
          <ContactWithCaptcha />
        ) : (
          <ContactWithoutCaptcha />
        )}

        <motion.div
          className="lg:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariant}
        >
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <motion.div variants={iconHover} whileHover="hover">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3] "
                  size={36}
                />
              </motion.div>
              <span className="transition-all duration-300">{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <motion.div variants={iconHover} whileHover="hover">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3]"
                  size={36}
                />
              </motion.div>
              <span className="transition-all duration-300">{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <motion.div variants={iconHover} whileHover="hover">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3]"
                  size={36}
                />
              </motion.div>
              <span className="transition-all duration-300">{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <motion.div variants={iconHover} whileHover="hover">
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3]"
                  size={48}
                />
              </motion.div>
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <motion.div variants={iconHover} whileHover="hover">
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3]"
                  size={48}
                />
              </motion.div>
            </Link>
            <Link target="_blank" href={personalData.youtube}>
              <motion.div variants={iconHover} whileHover="hover">
                <FaYoutube
                  className="bg-[#8b98a5] p-3 rounded-full text-gray-800 cursor-pointer hover:bg-[#16f2b3]"
                  size={48}
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactSection;
