import React from "react";

const Navbar = ({ toggleMenu, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h3 className="logo">sezhz</h3>
      <ul>
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
