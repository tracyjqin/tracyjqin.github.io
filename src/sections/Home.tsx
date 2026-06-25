import React, { useEffect, useState } from 'react';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutMe = () => {
  const technology = ["TypeScript/JavaScript", "React", "Next.js", "HTML/CSS", "TailwindCSS", "C#", "YAML", "Java", "Python"];

  const Typewriter = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState("");

    useEffect(() => {
      let i = 0;

      const interval = setInterval(() => {
        setDisplay(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
        }
      }, 120);

      return () => clearInterval(interval);
    }, [text]);

    return (
      <span className="inline-flex items-center inline-block w-[200px] text-blue-200 text-3xl leading-tight">
        {display}
        <span className="inline-block w-[2px] h-8 ml-1 bg-blue-300 animate-pulse" />
      </span>
    );
  };

  return (
    <div className="w-full min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full max-w-4xl px-6 py-20">
        <div className="flex flex-col text-left gap-10">
          <h1 className="flex flex-col text-left text-white h-12 font-code">
            <span className="text-3xl">Hi, I'm</span>
            <Typewriter text="Tracy Qin" />
          </h1>

          <div className='flex flex-col gap-2'>
            <span className="text-white pt-5 text-lg">Software Engineer @ CommBank</span>
            <span className="text-sm text-blue-200">Prev. Intern @ SafetyCulture, Deloitte Digital</span>
          </div>

          <div className="flex flex-row gap-5 text-white relative z-50">
            <a
              href={'https://www.linkedin.com/in/tracyjqin/'}
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </a>
            <a
              href={'https://github.com/tracyjqin'}
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>

        <img
          src="/memojitracy.png"
          alt="Tracy"
          className="w-52 h-52 object-cover rounded-full"
        />

      </div >
      <div className="w-3/4 bg-white h-px max-w-4xl" />
      <div className="flex gap-2 pt-5 justify-start">
        {technology.map((idx) =>
          <div className='border border-blue-200 bg-blue-950/60 rounded-full pl-2 pr-2 backdrop-blur-md'>
            <span className="text-blue-200 text-xs font-code">{idx}</span>
          </div>
        )}
      </div>
    </div>

  );
};

export default AboutMe;
