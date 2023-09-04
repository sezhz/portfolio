import React from "react";
import img1 from "../img/html.png";
import img2 from "../img/css.png";
import img3 from "../img/js.png";
import img4 from "../img/react.png";
import img5 from "../img/ts.png";
import img6 from "../img/sass.png";
import portrait from "../img/portrait.png";
import "../dist/styles.css";
import { useLanguage } from "./LanguageProvider";

const Hero = ({ isDarkMode }) => {
  const { currentLanguage } = useLanguage();

  const text = {
    ua: {
      title: "Front-End React Developer",
      description: (
        <>
          Привiт!
          <br />
          Мене звати Максим Фартушко, 22 роки, i я
          <br />
          Front-end React розробник з Харкова, Україна
        </>
      ),
    },
    en: {
      title: "Front-End React Developer",
      description: (
        <>
          Hello!
          <br />
          My name is Maxim Fartushko. I'm 22 y.o.
          <br />
          I'm front-end React developer from Kharkiv, Ukraine
        </>
      ),
    },
    ru: {
      title: "Front-End React Developer",
      description: (
        <>
          Привет!
          <br />
          Меня зовут Максим Фартушко, мне 22, и я
          <br />
          front-end React разработчик из Харькова, Украина
        </>
      ),
    },
  };

  return (
    <div
      id="home"
      className={`hero ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>{text[currentLanguage].title}</h1>
              <p>{text[currentLanguage].description}</p>
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
