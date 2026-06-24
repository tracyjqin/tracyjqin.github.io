import React from "react";

interface SidebarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement> | null) => void;
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection, sectionRefs }) => {
  const handleScrollToSection = (index: number) => {
    scrollToSection(sectionRefs[index]);
  };

  const text = {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  };

  const headers = ["Home"];


  // const headers = ["Home", "Experience", "Projects"];

  return (
    <div className="h-16 w-full bg-[#07132A]/60 flex items-center justify-between px-6 border-b-2 border-[#112050]/50 backdrop-blur-md" >
      <div className="flex flex-row gap-5 items-center justify-center">
        <img
          src="/starfish.ico"
          alt="Starfish Icon"
          className="icon"
          onClick={() => handleScrollToSection(0)}
        />
        <span className="text-white">Tracy Qin</span>
      </div>

      <div className="flex flex-row gap-5 text-white">
        {headers.map((idx) => (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(headers.indexOf(idx));
            }}
          >
            {idx}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
