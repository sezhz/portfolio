import React from "react";

import pic1 from "../img/twopizza.png";
import pic2 from "../img/travel-agency.png";
import pic3 from "../img/furniture-ecommerce.png";
import { useLanguage } from "./LanguageProvider";

const Projects = ({ isDarkMode }) => {
  const { currentLanguage } = useLanguage();

  const text = {
    ua: {
      title1: "twoPizza",
      description1:
        "Веб-додаток для піцерії з онлайн-замовленням та доставкою. Користувачі можуть легко обрати піцу з різноманітного меню та швидко оформити замовлення з доставкою до дому",
      title2: (
        <>
          ` exotic skyline `
          <br />
          travel agency
        </>
      ),
      description2:
        "Веб-сайт туристичного агентства, який надає клієнтам унікальний досвід відпочинку та залишає незабутні враження",
      title3: (
        <>
          furniture e-commerce
          <br />` meblevo `
        </>
      ),
      description3:
        "Mebelio - це сучасний інтернет-магазин меблів, створений з використанням технології React. Зручний вибiр та придбання меблів для дому та офісу завдяки інтуїтивно зрозумілому інтерфейсу",
      title: "Портфолiо",
    },

    en: {
      title1: "twoPizza",
      description1:
        "Web application for a pizzeria with online ordering and delivery. Users can easily select pizza from a diverse menu and quickly place an order for home delivery",
      title2: (
        <>
          ` exotic skyline `
          <br />
          travel agency
        </>
      ),
      description2:
        "This project is a site for a travel agency that offers clients a unique holiday experience, leaving unforgettable memories",
      title3: (
        <>
          furniture e-commerce
          <br />` meblevo `
        </>
      ),
      description3:
        "Mebelio is a modern furniture online store built with React. Our users can effortlessly browse and purchase furniture for their homes and offices, thanks to our user-friendly interface",
      title: "Portfolio",
    },

    ru: {
      title1: "twoPizza",
      description1:
        "Веб-приложение для пиццерии с онлайн-заказом и доставкой. Пользователи могут легко выбрать пиццу из разнообразного меню и быстро оформить заказ с доставкой на дом",
      title2: (
        <>
          ` exotic skyline `
          <br />
          travel agency
        </>
      ),
      description2:
        "Веб-сайт туристического агентства, который предоставляет клиентам уникальные возможности планирования путешествий по всему миру",
      title3: (
        <>
          furniture e-commerce
          <br />` meblevo `
        </>
      ),
      description3:
        "Mebelio - это интернет-магазин мебели, созданный на React. Комфортный выбор и приобретение мебели для дома, благодаря интуитивно понятному интерфейсу",
      title: "Портфолио",
    },
  };

  return (
    <div
      id="projects"
      className={`projects ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="container">
        <div className="content">
          <h3>{text[currentLanguage].title}</h3>
          <div className="project-grid">
            <div className="project">
              <div className="project-img">
                <a
                  href="https://twopizza-delta.vercel.app/pizza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="twopizza" src={pic1} alt="pizza-delivery" />
                </a>
              </div>
              <div className="project-txt">
                <h3>{text[currentLanguage].title1}</h3>
                <p>{text[currentLanguage].description1}</p>
                <div className="tech">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/sezhz/twopizza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code<i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://twopizza-delta.vercel.app/pizza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link<i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="project reversed">
              <div className="project-img">
                <a
                  href="https://travel-agency-ashen.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pic2} alt="travel-agency" />
                </a>
              </div>
              <div className="project-txt">
                <h3>{text[currentLanguage].title2}</h3>
                <p>{text[currentLanguage].description2}</p>
                <div className="tech">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/sezhz/travel-agency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code<i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://travel-agency-ashen.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link<i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project-img">
                <a
                  href="https://furniture-ecommerce-sand.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="furniture-shop"
                    src={pic3}
                    alt="furniture-e-commerce"
                  />
                </a>
              </div>
              <div className="project-txt">
                <h3>{text[currentLanguage].title3}</h3>
                <p>{text[currentLanguage].description3}</p>
                <div className="tech">
                  <p>React</p>
                  <p>Vanila CSS</p>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/sezhz/furniture-ecommerce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code<i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://furniture-ecommerce-sand.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link<i class="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
