import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

Nav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSection: PropTypes.object.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
};

function Nav({ sections, currentSection, setCurrentSection }) {
  return (
    <nav className="viewer__item viewer__nav">
      <ul className="nav__items">
        {sections.map((section) => (
          <li key={section.key}>
            <a
              className={classNames("nav__item", {
                ["nav__item--selected"]: section.key === currentSection.key,
              })}
              onClick={() => setCurrentSection(section)}
            >
              {section.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
