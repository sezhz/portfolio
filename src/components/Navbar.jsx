import React from "react";
import { useLanguage } from "./LanguageProvider";
import uaFlag from "../img/ukraine-flag.png";
import usaFlag from "../img/usa-flag.png";
import erefiaFlag from "../img/erefia-flag.png";

const Navbar = ({ toggleMenu, isDarkMode, toggleDarkMode }) => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    let newLanguage = "";
    if (currentLanguage === "ua") {
      newLanguage = "en";
    } else if (currentLanguage === "en") {
      newLanguage = "ru";
    } else {
      newLanguage = "ua";
    }
    changeLanguage(newLanguage);
  };

  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h3 className="logo">sezhz</h3>
      <ul>
        <li>
          <button onClick={toggleLanguage}>
            {currentLanguage === "ua" ? (
              <img src={uaFlag} alt="Українська" />
            ) : currentLanguage === "en" ? (
              <img src={usaFlag} alt="English" />
            ) : (
              <img src={erefiaFlag} alt="Erefia" />
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
              <i class="fa-solid fa-sun"></i>
            ) : (
              <i class="fa-solid fa-moon"></i>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
