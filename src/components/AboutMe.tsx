import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="block grey">
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
            gap: "75px",
          }}
        >
          <div className="image-container">
            <img
              src="/tracy2.png"
              alt="Tracy"
              style={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
              Hi, I'm Tracy &#128040;
            </h1>
            <p>
              I'm a final year B. Commerce (Finance) / Computer Science student
              at UNSW Sydney. I am interning at SafetyCulture as a Software
              Engineering Intern this summer, and I've also previously interned
              at Deloitte Digital as a Technology Consulting Vacationer where I
              helped bring a proof of concept to life as a developer.
            </p>
            <p>
              I have grown a passion for software engineering during my
              university life and I am keen to explore the different avenues of
              this career path throughout the rest of professional journey. I'm
              currently interested in <b>frontend development</b> and have been
              experimenting with React.js, but I'm keen on learning more about
              <b> backend</b> and <b>infrastructure</b>.
            </p>
            <p>
              In my spare time, I have been dabbling into baking and dessert
              making, and tinkering with vintage film and digital cameras.
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
