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

      <div className="flex flex-col gap-2 sm:gap-6 items-center w-full">
        {data.experience.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="flex flex-col bg-blue-950/60 w-3/4 max-w-4xl p-4 border border-blue-200 text-left rounded-md"
          >
            <div className="flex flex-col lg:flex-row sm:justify-between">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center">
                <span className="text-blue-200 lg:text-lg font-code">
                  {exp.role}
                </span>

                <span className="text-white text-sm sm:text-base">
                  @ {exp.company}
                </span>
              </div>

              <span className="text-white text-xs sm:text-sm pt-1">
                {exp.date}
              </span>
            </div>

            <span className="text-white text-xs sm:text-sm pt-1 sm:pt-4 leading-5 sm:leading-6">
              {exp.description}
            </span>

            <div className="flex gap-2 pt-2 sm:pt-4 justify-start flex-wrap">
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
