import React from "react";

const MobNav = ({ isMenuOpen, toggleMenu, isDarkMode }) => {
  return (
    <div className={`mobile-nav ${isMenuOpen ? "open-menu" : "closed-menu"} ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <span onClick={toggleMenu}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <ul>
        <li>
          <a onClick={toggleMenu} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#about">About</a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#projects">Projects</a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobNav;
