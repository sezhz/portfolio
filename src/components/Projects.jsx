import React, { useEffect, useState } from "react";

import pic1 from "../img/pizza.png";
import pic2 from "../img/furniture2.png";
import pic3 from "../img/pizza.png";

const Projects = ({ isDarkMode }) => {
  const [isImageSticky, setImageSticky] = useState(false);
  const [currentImage, setCurrentImage] = useState(pic1);
  const [currentLink, setCurrentLink] = useState(
    "https://twopizza-delta.vercel.app"
  );
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = document.querySelector(".img-block");
      const containerElement = document.querySelector(".container");

      if (imgElement && containerElement) {
        const imgRect = imgElement.getBoundingClientRect();
        const containerRect = containerElement.getBoundingClientRect();
        const centerY = window.innerHeight / 2;

        const imgCenterY = imgRect.top + imgRect.height / 2;

        if (!isImageSticky && imgCenterY <= centerY) {
          setImageSticky(true);
        } else if (isImageSticky && imgCenterY < containerRect.top) {
          setImageSticky(false);
        } else if (isImageSticky && imgRect.bottom > containerRect.bottom) {
          setImageSticky(true);
        }

        const blocks = document.querySelectorAll(".big-block");
        if (blocks) {
          const secondBlock = blocks[1];
          const thirdBlock = blocks[2];

          if (
            imgCenterY >= secondBlock.getBoundingClientRect().top &&
            imgCenterY < secondBlock.getBoundingClientRect().bottom
          ) {
            changeImage(pic2, "https://furniture-ecommerce-sand.vercel.app/", "_blank");
          } else if (
            imgCenterY >= thirdBlock.getBoundingClientRect().top &&
            imgCenterY < thirdBlock.getBoundingClientRect().bottom
          ) {
            changeImage(pic3, "https://twopizza-delta.vercel.app", "_blank");
          } else {
            changeImage(pic1, "https://twopizza-delta.vercel.app", "_blank");
          }
        }
      }
    };

    const changeImage = (newImage, newLink) => {
      if (currentImage !== newImage || currentLink !== newLink) {
        setIsFading(true);
        setTimeout(() => {
          setIsFading(false);
          setCurrentImage(newImage);
          setCurrentLink(newLink);
        }, 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentImage, isImageSticky, currentLink]);

  return (
    <div id="projects" className={`projects ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="content">
          <div className="text-side">
            <div className="big-block">
              <div className="block">
                <h2 className="text-block">
                  Share your Calendly
                  <br />
                  availability with others
                </h2>
              </div>
              <p className="mini-text-block">
                Grow your business with scheduling automation. Simply email,
                text, or add your Calendly availability to your website – and
                watch prospects and recruits book high-value meetings with you.
              </p>
              <a href="https://twopizza-delta.vercel.app">
                <img className="static-img" src={pic1} alt="pic1" />
              </a>
            </div>
            <div className="big-block">
              <div className="block">
                <h2 className="text-block">Schedule as a team</h2>
              </div>
              <p className="mini-text-block">
                Calendly adapts to both you and your team's scheduling
                preferences. Co-host a client call with a colleague, email
                reminders and follow-ups, and integrate everything with your
                preferred software tools.
              </p>
              <a href="https://furniture-ecommerce-sand.vercel.app/">
                <img className="static-img" src={pic2} alt="pic2" />
              </a>
            </div>
            <div className="big-block">
              <div className="block">
                <h2 className="text-block">Hit your number</h2>
              </div>
              <p className="mini-text-block">
                High-value meetings are the lifeblood of your business. Increase
                revenue, retain customers, and land recruits with the #1
                scheduling automation platform.
              </p>
              <img className="static-img" src={pic3} alt="pic3" />
            </div>
          </div>
          <div className={`img-side ${isImageSticky ? "sticky" : ""}`}>
            <div className={`img-block ${isFading ? "fade-out" : "fade-in"}`}>
              <a href={currentLink}>
                <img className="img" src={currentImage} alt="pic" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
