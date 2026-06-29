import React from "react";
import dataImport from "../projects.json";

interface ProjectsItem {
  name: string;
  description: string;
  link: string;
}

interface ProjectsData {
  projects: ProjectsItem[];
}

const data = dataImport as unknown as ProjectsData;


const Projects = () => {
  return (

    <div className="flex flex-col items-center gap-10 w-full min-h-[calc(100vh-4rem)] justify-center">

      <h1 className="text-white font-code text-2xl w-3/4 text-left max-w-4xl">
        Projects
      </h1>

      <div className="flex flex-col gap-6 items-center w-full">

        {data.projects.map((proj: ProjectsItem, index: number) => (
          <div className="flex flex-row bg-[#0E2654]/80 w-3/4 max-w-4xl p-4 border border-[#0E2654]/50 text-left rounded-md items-center justify-between" key={index}>

            <div className="flex flex-col gap-2">
              <span className="text-blue-200 text-lg font-code">
                {proj.name}
              </span>

              <span className="text-white text-md">
                {proj.description}
              </span>

            </div>
            <div>
              <button
                onClick={() => window.location.href = proj.link}
                className=" relative z-50 text-white text-sm px-3 py-1 rounded-md border border-white hover:bg-blue-900 transition cursor-pointer"
              >
                View here
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
