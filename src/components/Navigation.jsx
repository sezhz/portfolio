import React, { useState } from "react";
import MobNav from "./MobNav";
import Navbar from "./Navbar";

const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobNav
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isDarkMode={isDarkMode}
      />
      <Navbar
        toggleMenu={toggleMenu}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
};

export default Navigation;
