import React from "react";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { Cursor } from "react-simple-typewriter";

const GameCard = ({ title, description, githubLink, youtubeLink, liveDemoLink, image }) => {
  const cardStyle = {
    background: "linear-gradient(145deg, #2E265A, #1F1A3A)", // Rich gradient background
    color: "white",
    padding: "20px",
    borderRadius: "16px",
    width: "300px",
    position: "relative",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Deeper shadow
    overflow: "hidden",
    margin: "16px auto",
    cursor:"pointer"
  };

  const hoverStyle = {
    transform: "translateY(-10px)", // Subtle lift effect
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Stronger shadow on hover
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const titleStyle = {
    margin: "10px 0",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#16f2b3", // Bright accent color
  };

  const descriptionStyle = {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "10px",
    color: "#D0D0D0", // Softer text for readability
  };

  const iconContainerStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    gap: "10px",
  };

  const iconStyle = {
    color: "white", 
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
      <div style={iconContainerStyle}>
        {youtubeLink ? (
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnterIcon}
            onMouseLeave={handleMouseLeaveIcon}
          >
            <FaEye style={iconStyle} />
          </a>
        ) : (
          liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnterIcon}
              onMouseLeave={handleMouseLeaveIcon}
            >
              <FaExternalLinkAlt style={iconStyle} />
            </a>
          )
        )}
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
      </div>

      <img
        src={image}
        alt={`${title} Screenshot`}
        style={imageStyle}
      />

      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default GameCard;
