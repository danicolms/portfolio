import React, { useState } from "react";

import { Nav } from "../../components";

import "./styles.css";

const sections = [
  { key: "home", value: "Home" },
  { key: "projects", value: "Projects" },
  { key: "contact", value: "Contact me" },
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
        <section className="viewer__item viewer__content" />
      </div>
    </div>
  );
};

export default Home;
