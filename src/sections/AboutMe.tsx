import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="block grey">
        <div className="about-me">
          <div className="image-container">
            <img src="/memojitracy2.png" alt="Tracy" className="profile-img" />
          </div>
          <div>
            <h1>Hi, I'm Tracy &#128040;</h1>
            <p>
              I'm a recent graduate from UNSW, with a double degree in Commerce
              (Finance) and Computer Science.
            </p>
            <p>
              Throughout my university journey, I developed a passion for
              software engineering and am eager to explore the various avenues
              within this field. I hold internship experience in{" "}
              <b>frontend development</b>; however, I am keen to build upon my
              skills through exploring other disciplines of software
              engineering.
            </p>
            <p>
              In my spare time, I have been dabbling into cooking, and tinkering
              with vintage film and digital cameras.
            </p>
            <p>
              If you want to get in touch or you have any crazy delicious,
              secret family recipes to share, please feel free to reach out to
              me on LinkedIn! &#128523;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
