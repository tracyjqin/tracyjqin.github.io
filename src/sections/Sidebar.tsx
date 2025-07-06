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

  const headers = ["Home", "About Me", "Experience", "Projects"];

  return (
    <div className="sidebar">
      <img
        src="/starfish.ico"
        alt="Starfish Icon"
        className="icon"
        onClick={() => handleScrollToSection(0)}
      />
      <div className="panel">
        {headers.map((idx) => (
          <a href={`#${idx.toLowerCase().replace(" ", "")}`}
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(headers.indexOf(idx));
            }}
            key={idx}
            style={text}>
            {idx}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
