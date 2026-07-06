import React from "react";
import dataImport from "../experience.json";
import Lozenge from "../components/Lozenge";
import Card from "../components/Card";

interface ExperienceItem {
  company: string;
  date: string;
  role: string;
  image: string;
  description: string;
  technologies: string[];
}

interface ExperienceData {
  experience: ExperienceItem[];
}

const data = dataImport as unknown as ExperienceData;

const Experience = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full min-h-[calc(100vh-4rem)] justify-center">

      <h1 className="text-white font-code text-2xl w-3/4 text-left max-w-4xl">
        Experience
      </h1>

      <div className="flex flex-col gap-2 sm:gap-6 items-center w-full">
        {data.experience.map((exp: ExperienceItem, index: number) => (
          <Card
            index={index}
            name={exp.role}
            date={exp.date}
            company={exp.company}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
