import React from "react";
import { useLanguage } from "./LanguageProvider";

const About = ({ isDarkMode }) => {
  const { currentLanguage } = useLanguage();

  const text = {
    ua: {
      title:
        "Починаючий Front-end розробник з великими амбіціями з Харкова, Україна.",
      description:
        "Хороше знання HTML, CSS, JavaScript, React та SCSS. Створюю зручні та адаптивні сайти, використовуючи сучасні технології. У мене поки що немає досвіду комерційного програмування, але я постійно пишу і вивчаю щось нове. У розробці я користуюсь актуальними бібліотеками та фреймворками, намагаючись робити це максимально ефективно, для зручного, оптимізованого та чистого коду. Мені подобається вивчати нові технології та ставати більш різностороннiм",
    },
    en: {
      title:
        "Beginning Front-end developer with big ambitions from Kharkiv, Ukraine",
      description:
        "Good knowledge of HTML, CSS, JavaScript, React and SCSS. I create convenient and adaptive websites using modern technologies. I don't have any commercial programming experience yet, but I'm constantly writing and learning new things. In development, I use up-to-date libraries and frameworks, trying to do it as efficiently as possible, for convenient, optimized and clean code. I like learning new technologies and becoming more versatile",
    },
    ru: {
      title:
        "Начинающий Front-end разработчик с большими амбициями из Харькова, Украина",
      description:
        "Хорошее знание HTML, CSS, JavaScript, React и SCSS. Создаю удобные и адаптивные сайты, используя современные технологии. У меня пока нет опыта коммерческого программирования, но я постоянно пишу и изучаю что-то новое. В разработке пользуюсь актуальными библиотеками и фреймворками, стараясь делать это максимально эффективно, для удобного, оптимизированного и чистого кода. Мне нравится изучать новые технологии и становиться более разносторонним",
    },
  };

  return (
    <div
      id="about"
      className={`about ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              className="main-img"
              src="https://avatars.dzeninfra.ru/get-zen_doc/3499786/pub_604bd71a0a7d51654aeeccb0_604bd72d0a7d51654aeedeeb/scale_1200"
              alt="img"
            />
          </div>
          <div className="text-side">
            <h4>{text[currentLanguage].title}</h4>
            <p>{text[currentLanguage].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
