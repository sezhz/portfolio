import React from "react";

const Contact = ({ isDarkMode }) => {
  return (
    <div id="contact" className={`contact ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <h3>Don't be shy!</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <i className="fa-solid fa-map-location-dot"> </i>
              </span>
              <div className="contact__info">
                <h3>Location</h3>
                <p>Kharkiv, Ukraine</p>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <i className="fa-solid fa-envelope-open-text"> </i>
              </span>
              <div className="contact__info">
                <h3>Telegram</h3>
                <a href="https://t.me/sezhzq">@sezhzq</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
