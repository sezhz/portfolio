import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className={`about ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              className="main-img"
              src="https://avatars.dzeninfra.ru/get-zen_doc/3499786/pub_604bd71a0a7d51654aeeccb0_604bd72d0a7d51654aeedeeb/scale_1200"
              alt="img"
            />
          </div>
          <div className="text-side">
            <h4>
              A novice Front-end developer with big ambitions
              <br />
              based in Kharkiv, Ukraine
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, and SCSS. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
