import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Nav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
  currentSection: PropTypes.object,
  setCurrentSection: PropTypes.func,
};

function Nav({ sections, currentSection, setCurrentSection }) {
  return (
    <nav className="viewer__item viewer__nav">
      <h3 className="nav__title"> {currentSection.value} </h3>
      <hr />

      <ul className="nav__items">
        {sections.map((section) => (
          <li key={section.key} className="nav__item">
            <button onClick={() => setCurrentSection(section)}>
              {section.value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
