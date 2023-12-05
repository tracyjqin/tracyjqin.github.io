import React, { useRef } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  // const sectionRef4 = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <Sidebar
        scrollToSection={scrollToSection}
        sectionRefs={[sectionRef1, sectionRef2, sectionRef3]}
        // sectionRefs={[sectionRef1, sectionRef2, sectionRef3, sectionRef4]}
      />

      <div style={{ width: "100vw" }}>
        <div ref={sectionRef1}>
          <Home />
        </div>
        <div ref={sectionRef2}>
          <AboutMe />
        </div>
        {/* <div ref={sectionRef3}>
          <Experience />
        </div>
        <div ref={sectionRef4}>
          <Projects />
        </div> */}
        <div ref={sectionRef3}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
