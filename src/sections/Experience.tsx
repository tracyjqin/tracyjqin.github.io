import React from "react";
import dataImport from "../experience.json";
import Lozenge from "../components/Lozenge";

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

      <div className="flex flex-col gap-6 items-center w-full">
        {data.experience.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="flex flex-col bg-blue-950/60 w-3/4 max-w-4xl p-4 border border-blue-200 text-left rounded-md"
          >
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <span className="text-blue-200 text-lg font-code">
                  {exp.role}
                </span>

                <span className="text-white">
                  @ {exp.company}
                </span>
              </div>

              <span className="text-white text-sm">
                {exp.date}
              </span>
            </div>

            <span className="text-white text-sm pt-4 leading-6">
              {exp.description}
            </span>

            <div className="flex gap-2 pt-4 justify-start">
              {exp.technologies.map((idx) =>
                <Lozenge text={idx} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
