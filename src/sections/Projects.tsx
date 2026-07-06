import React from "react";
import dataImport from "../projects.json";
import Lozenge from "../components/Lozenge";
import Card from "../components/Card";

interface ProjectsItem {
  icon: string;
  name: string;
  description: string;
  link: string;
  technologies: string[];
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
          <Card
            index={index}
            icon={proj.icon}
            name={proj.name}
            description={proj.description}
            technologies={proj.technologies}
            button="View here"
            link={proj.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
