import React, { useEffect, useState } from "react";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ title, description, githubLink, youtubeLink, liveDemoLink, image }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(title); // Change to use unique ID for each card
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimationClass("animate-slide-in");
        } else {
          setAnimationClass(""); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [title]); // Include title in dependency array

  const cardStyle = {
    background: "linear-gradient(145deg, #2E265A, #1F1A3A)", // Rich gradient background
    color: "white",
    padding: "24px",
    borderRadius: "18px",
   width: "95%", // Set width to 90% for mobile
    maxWidth: "350px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)", // Deeper shadow
    margin: "16px auto",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  };

  const hoverStyle = {
    transform: "translateY(-8px)", // Subtle lift effect
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)", // Stronger shadow on hover
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const titleStyle = {
    margin: "20px 0 12px 0",
    fontSize: "20px",
    fontWeight: "700",
    color: "#16f2b3", // Bright accent color
    textAlign: "center",
    letterSpacing: "1px", // Refined typography
  };

  const descriptionStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "20px",
    padding: "0 12px",
    color: "#D0D0D0", // Softer text for readability
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "18px",
    gap: "18px",
  };

  const iconStyle = {
    color: "#ec4899", 
    fontSize: "22px",
    transition: "color 0.3s ease, transform 0.3s ease", 
    cursor:"pointer"
  };

  const handleMouseEnterIcon = (e) => {
    e.currentTarget.style.transform = "scale(1.2)"; // Bounce effect
  };

  const handleMouseLeaveIcon = (e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset size
  };

  return (
    <div
      id={title} // Unique ID for each card
      className={animationClass} // Apply animation class here
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = hoverStyle.transform;
        e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = cardStyle.boxShadow;
      }}
    >
      <img src={image} alt={`${title} Screenshot`} style={imageStyle} />

      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>

      <div style={iconContainerStyle}>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
          >
            <FaGithub style={iconStyle} />
          </a>
        )}
        {youtubeLink && (
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
          >
            <FaYoutube style={iconStyle} />
          </a>
        )}
        {liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
          >
            <FaExternalLinkAlt style={iconStyle} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
