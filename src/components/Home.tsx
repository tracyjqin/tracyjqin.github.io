import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DescriptionIcon from "@mui/icons-material/Description";

const AboutMe = () => {
  return (
    <>
      <div className="block">
        <div className="image-container">
          <div
            style={{
              backgroundImage: 'url("/tracy.png")',
              backgroundSize: "cover",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
          />
        </div>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>Tracy Qin</h1>
        <p style={{ marginBottom: "30px" }}>Software Engineer</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <a
            href={"https://www.linkedin.com/in/tracyjqin/"}
            className="linkedin-link"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a href={"https://github.com/tracyjqin"} className="linkedin-link">
            <GitHub sx={{ fontSize: 40 }} />
          </a>
          {/* <DescriptionIcon sx={{ fontSize: 40 }} /> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
