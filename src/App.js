import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <LanguageProvider>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </LanguageProvider>
  );
}

export default App;
