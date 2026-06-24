import React, { useRef } from "react";
import Sidebar from "./sections/Sidebar";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

const App: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="fixed inset-0">
        <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="fixed top-0 left-0 w-full">
        <Sidebar
          scrollToSection={scrollToSection}
          sectionRefs={[sectionRef1, sectionRef2, sectionRef3]}
        />
      </div>

      <div className="w-full pt-16">
        <div ref={sectionRef1} className="h-[calc(100vh-64px)] w-full scroll-mt-16">
          <Home />
        </div>

        <div ref={sectionRef2} className="h-[calc(100vh-64px)] w-full scroll-mt-16">
          <Experience />
        </div>

        <div ref={sectionRef3} className="h-[calc(100vh-64px)] w-full scroll-mt-16">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
