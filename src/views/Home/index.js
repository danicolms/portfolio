import React, { useEffect, useState } from "react";

import { Nav } from "../../components";

import { Landing, Contact, Projects } from "../";

import "./styles.css";

const sections = [
  { key: "home", value: "Home", view: <Landing /> },
  { key: "projects", value: "Projects", view: <Projects /> },
  { key: "contact", value: "Contact me", view: <Contact /> },
];

function Home() {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const changeBackgroundColor = (currentSection) => {
    const background = document.querySelector(".background");
    let color;

    switch (currentSection.key) {
      case "projects":
        color = "#9C90E9";
        break;
      case "contact":
        color = "#40E0D0";
        break;
      default:
        color = "#F08080";
        break;
    }

    background.style.setProperty("--background-color", color);
  };

  useEffect(() => {
    changeBackgroundColor(currentSection);
  }, [currentSection]);

  return (
    <div className="background">
      <div className="viewer">
        <Nav
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <section className="viewer__item viewer__content">
          {currentSection.view}
        </section>
      </div>
    </div>
  );
}

export default Home;
