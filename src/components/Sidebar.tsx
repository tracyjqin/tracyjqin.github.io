import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
// import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";

interface SidebarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement> | null) => void;
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection, sectionRefs }) => {
  const handleScrollToSection = (index: number) => {
    scrollToSection(sectionRefs[index]);
  };

  const icon = {
    fontSize: "40px",
    cursor: "pointer",
  };

  return (
    <div className="sidebar">
      <HomeIcon style={icon} onClick={() => handleScrollToSection(0)} />
      <Person2Icon style={icon} onClick={() => handleScrollToSection(1)} />
      {/* <WorkIcon style={icon} onClick={() => handleScrollToSection(2)} /> */}
      <FolderIcon style={icon} onClick={() => handleScrollToSection(2)} />
      {/* <FolderIcon style={icon} onClick={() => handleScrollToSection(3)} /> */}
    </div>
  );
};

export default Sidebar;
