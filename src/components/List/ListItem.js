import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ListItem({ item }) {
  return (
    <a className="list__item" target="_blank" href={item.url}>
      <i className="list__icon">{item.icon}</i>
      <span className="list__value"> {item.value}</span>
    </a>
  );
}

export default ListItem;
