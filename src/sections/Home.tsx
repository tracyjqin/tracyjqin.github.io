import React, { useEffect, useState } from 'react';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import DescriptionIcon from "@mui/icons-material/Description";

const AboutMe = () => {
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
    <div className="flex flex-row h-full w-full items-center justify-center gap-56">
      <div className="flex flex-col text-left gap-10">
        <h1 className="flex flex-col text-left text-white h-12 font-code">
          <span className="text-3xl">Hi, I'm</span>
          <Typewriter text="Tracy Qin" />
        </h1>

        <div className='flex flex-col'>
          <span className="text-white pt-5">Software Engineer @ CommBank</span>
          <span className="text-white">Prev. Intern @ SafetyCulture, Deloitte Digital</span>
        </div>

        <div className="flex flex-row gap-5 text-white">
          <a
            href={'https://www.linkedin.com/in/tracyjqin/'}
            className="linkedin-link"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a
            href={'https://github.com/tracyjqin'}
            className="linkedin-link"
            target="_blank"
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
  );
};

export default AboutMe;
