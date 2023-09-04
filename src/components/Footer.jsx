import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="footer__content">
          <h3>Contact me</h3>
          <div className="footer__socials">
            <a
              aria-label="github"
              href="https://github.com/sezhz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              aria-label="github"
              href="https://discordapp.com/users/310448570828324865/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
