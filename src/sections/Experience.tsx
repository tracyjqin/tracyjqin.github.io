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
  return (
    <div className="flex flex-col items-center gap-10 w-full min-h-[calc(100vh-4rem)] justify-center">

      <h1 className="text-white font-code text-2xl w-3/4 text-left max-w-4xl">
        Experience
      </h1>

      <div className="flex flex-col gap-6 items-center w-full">
        {data.experience.map((exp: ExperienceItem, index: number) => (
          <div
            key={index}
            className="flex flex-col bg-[#0E2654]/80 w-3/4 max-w-4xl p-4 border border-[#0E2654]/50 text-left rounded-md"
          >
            <div className="flex gap-2">
              <span className="text-blue-200 text-lg font-code">
                {exp.description}
              </span>

              <span className="text-white">
                @ {exp.company}
              </span>
            </div>

            <span className="text-white">
              {exp.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
