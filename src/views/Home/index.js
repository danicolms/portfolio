import React, { useState } from "react";

import { Nav } from "../../components";

import { Landing } from "../";

import "./styles.css";

const sections = [
  { key: "home", value: "Home", view: <Landing /> },
  { key: "projects", value: "Projects", view: <div> Project </div> },
  { key: "contact", value: "Contact me", view: <div> Contact me </div> },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="container">
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
};

export default Home;
