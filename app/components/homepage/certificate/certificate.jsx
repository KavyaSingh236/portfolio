import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  academicCertificates,
  nonAcademicCertificates,
} from "@/utils/data/certificate";
import { motion } from "framer-motion";
import Slider from "react-slick";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};
const certificateCardStyle = {
  backgroundColor: "#2C2543",
  color: "white",
  padding: "20px",
  borderRadius: "16px",
  width: "300px",
  position: "relative",
  transition: "transform 0.3s ease, boxShadow 0.3s ease",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
  margin: "10px auto",
  boxSizing: "border-box",
};

const iconContainerStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  display: "flex",
  gap: "10px",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "12px",
};

const titleStyle = {
  margin: "10px 0",
  fontSize: "16px",
  fontWeight: "bold",
};

const sectionHeadingStyle = {
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "30px 0",
};

const Certificate = ({ title, image, link }) => {
  return (
    <div
      style={certificateCardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = certificateCardStyle.boxShadow;
      }}
    >
      <div style={iconContainerStyle}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt
            style={{
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              transition: "color 0.3s",
            }}
          />
        </a>
      </div>

      <img src={image} alt={`${title} Certificate`} style={imageStyle} />

      <h3 style={titleStyle}>{title}</h3>
    </div>
  );
};

const Certificates = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        id="certifications"
        className="flex justify-center -translate-y-[1px]"
      >
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariant}
      >
        <h4 style={sectionHeadingStyle} className="text-teal-300">
          Academic Certificates
        </h4>
      </motion.div>
      <Slider {...settings}>
        {academicCertificates.map((cert) => (
          <Certificate
            key={cert.id}
            title={cert.title}
            image={cert.image}
            link={cert.link}
          />
        ))}
      </Slider>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariant}
      >
        <h4 style={sectionHeadingStyle} className="text-teal-300">
          Non-Academic Certificates
        </h4>
      </motion.div>
      <Slider {...settings}>
        {nonAcademicCertificates.map((cert) => (
          <Certificate
            key={cert.id}
            title={cert.title}
            image={cert.image}
            link={cert.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
