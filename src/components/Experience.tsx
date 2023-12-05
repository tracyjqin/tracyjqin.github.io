import React from "react";
import "../index.css";

const Experience = () => {
  return (
    <>
      <div className="block">
        <h1 style={{ fontSize: "3rem" }}>Experience</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div className="card">
            <h2>SafetyCulture</h2>
          </div>
          <div className="card">
            <h2>Deloitte Digital</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
