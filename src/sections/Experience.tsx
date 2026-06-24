import React, { useState } from "react";
import dataImport from "../experience.json";

interface ExperienceItem {
  company: string;
  date: string;
  description: string;
  image: string;
}

interface ExperienceData {
  experience: ExperienceItem[];
}

const data = dataImport as unknown as ExperienceData;

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
          {/* {data.experience.map((exp: ExperienceItem, index: number) => (
            <Card
              key={index}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              image={exp.image}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Experience;
