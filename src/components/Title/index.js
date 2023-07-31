import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

function Title({ children }) {
  return <h2 className="content__title"> {children} </h2>;
}

export default Title;
