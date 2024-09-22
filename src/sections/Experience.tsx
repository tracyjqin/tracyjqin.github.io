import React, { useState } from "react";
import "../index.css";
import Card from "../components/Card";

const Experience = () => {
  // TODO: for later use when adding info about internships
  // const [modalOpen, setModalOpen] = useState<string | null>(null);

  // const openModal = (company: string) => {
  //   setModalOpen(company);
  // };

  // const closeModal = () => {
  //   setModalOpen(null);
  // };

  return (
    <>
      <div className="block">
        <h1>Experience</h1>
        <div className="experience-block">
          <Card
            company="SafetyCulture"
            date="Dec '23 - Feb '24"
            description="Software Engineering Intern"
            image="/SafetyCulture.png"
          />
          <Card
            company="Deloitte Digital"
            date="Nov '22 - Feb '23"
            description="Digital Technology and Engineering Intern"
            image="/DeloitteDigital.png"
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
