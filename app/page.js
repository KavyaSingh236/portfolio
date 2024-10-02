"use client";
import React from "react";
import Slider from "react-slick";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import Card from "./components/homepage/project/project"; 
import projectData from "@/utils/data/projectData"; 
import ProjectHeading from "./components/homepage/project/projectheading";
import Education from "./components/homepage/education/education";
import Experience from "./components/homepage/experience/experience";
import Certificates from "./components/homepage/certificate/certificate";
import ShowMoreButton from "./components/homepage/project/showmore";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        right: "20px",
        zIndex: 1,
        fontSize: "24px",
        color: "white", 
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        left: "20px",
        zIndex: 1,
        fontSize: "24px",
        color: "white", 
      }}
      onClick={onClick}
    />
  );
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    centerMode: false,  // Set to false to prevent last card being shown first
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
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const sliderContainerStyle = {
    padding: "0px 5px",
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectHeading />

      <div style={sliderContainerStyle}>
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index}>
              <Card
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

      <ShowMoreButton />
      <Experience />
      <Education />
      <Certificates />
      <ContactSection />
    </>
  );
}
