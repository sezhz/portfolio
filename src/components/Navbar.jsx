import React from "react";
import { useLanguage } from "./LanguageProvider";
import uaFlag from "../img/ukraine-flag.png";
import usaFlag from "../img/usa-flag.png";
import erefiaFlag from "../img/erefia-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleMenu, isDarkMode, toggleDarkMode }) => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    let newLanguage = "";
    if (currentLanguage === "ua") {
      newLanguage = "ru";
    } else if (currentLanguage === "en") {
      newLanguage = "ua";
    } else {
      newLanguage = "en";
    }
    changeLanguage(newLanguage);
  };

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h3 className="logo">sezhz</h3>
      <ul>
        <li>
          <button onClick={toggleLanguage}>
            {currentLanguage === "en" ? (
              <img src={usaFlag} alt="English" />
            ) : currentLanguage === "ua" ? (
              <img src={uaFlag} alt="Українська" />
            ) : (
              <img src={erefiaFlag} alt="rf" />
            )}
          </button>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <i
            className="fa-solid fa-bars-staggered mobile-menu"
            onClick={toggleMenu}
          ></i>
        </li>
        <li>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <i className="fa-solid fa-sun">
                <FontAwesomeIcon icon={faSun} />
              </i>
            ) : (
              <i className="fa-solid fa-moon">
                <FontAwesomeIcon icon={faMoon} />
              </i>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
