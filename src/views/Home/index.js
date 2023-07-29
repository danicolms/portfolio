import React, { useEffect, useState } from "react";

import { Nav } from "../../components";

import { Landing, Contact, Projects } from "../";

import "./styles.css";

const prettyColors = [
  "lightcoral",
  "salmon",
  "hotpink",
  "palevioletred",
  "tomato",
  "moccasin",
  "darkkhaki",
  "lavender",
  "plum",
  "mediumorchid",
  "mediumslateblue",
  "palegreen",
  "mediumaquamarine",
  "teal",
  "powderblue",
  "lightskyblue",
  "navajowhite",
  "chocolate",
  "lavenderblush",
];

const sections = [
  { key: "home", value: "Home", view: <Landing /> },
  { key: "projects", value: "Projects", view: <Projects /> },
  { key: "contact", value: "Contact me", view: <Contact /> },
];

function Home() {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [backgroundColor, setBackgroundColor] = useState(prettyColors[0]);
  const [lastColor, setLastColor] = useState(backgroundColor);

  const changeBackgroundColor = () => {
    let color = backgroundColor;
    while (color === backgroundColor) {
      color = prettyColors[Math.floor(Math.random() * prettyColors.length)];
    }
    setBackgroundColor(color);
  };

  useEffect(() => {
    if (lastColor !== backgroundColor) {
      setLastColor(backgroundColor);
      const background = document.querySelector(".background");
      background.style.setProperty("--background-color", backgroundColor);
    }
  }, [backgroundColor, lastColor]);

  return (
    <div onClick={changeBackgroundColor} className="background">
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

      <p className="floating__caption">
        Don't like the current color? Click anywhere
      </p>
    </div>
  );
}

export default Home;
