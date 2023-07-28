import React, { useState } from "react";
import "./styles.css";
import Nav from "../../components/Nav";

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
        <section className="viewer__item viewer__content"> Is Content </section>
      </div>
    </div>
  );
};

export default Home;
