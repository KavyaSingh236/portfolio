"use client";
import React, { useState } from "react";
import GameCard from "./games";
import gameData from "@/utils/data/gameData.js";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const ShowMoreButton = () => {
  const [showGames, setShowGames] = useState(false);

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#1a1443",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const buttonHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "normal",
    color: "#ec4899", // Pink-500 color code
    marginBottom: "30px",
    marginTop: "20px",
    alignSelf: "flex-start",
  };

  const sliderContainerStyle = {
    padding: "20px 0",
  };

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const sliderSettings = {
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div style={containerStyle}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, buttonHoverStyle)
          }
          onMouseLeave={(e) =>
            Object.assign(e.target.style, buttonStyle)
          }
          onClick={() => setShowGames(!showGames)}
        >
          {showGames ? "Show Less" : "Discover More"}
        </button>
      </div>

      {showGames && (
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
          >
            <h1 style={headingStyle}>
              Some fun games to try... 🎮
            </h1>
          </motion.div>

          <div style={sliderContainerStyle}>
            <Slider {...sliderSettings}>
              {gameData.map((project, index) => (
                <div key={index}>
                  <GameCard
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    youtubeLink={project.youtubeLink}
                    liveDemoLink={project.liveDemoLink}
                    image={project.image}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMoreButton;
