import React from "react";
import img1 from "../img/html.png";
import img2 from "../img/css.png";
import img3 from "../img/js.png";
import img4 from "../img/react.png";
import img5 from "../img/ts.png";
import img6 from "../img/sass.png";
import portrait from "../img/portrait.png";
import "../dist/styles.css";

const Hero = ({ isDarkMode }) => {
  return (
    <div id="home" className={`hero ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Maxim Fartushko. Front-end React Developer based in
                Kharkiv, Ukraine.
              </p>
              <span>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/sezhz"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
            <div className="hero-img">
              <img src={portrait} alt="myPhoto" className="default-image" />
            </div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src={img1} alt="html" />
                </li>
                <li>
                  <img src={img2} alt="css" />
                </li>
                <li>
                  <img src={img3} alt="js" />
                </li>
                <li>
                  <img src={img4} alt="react" />
                </li>
                <li>
                  <img src={img5} alt="ts" />
                </li>
                <li>
                  <img src={img6} alt="sass" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
