import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function List({ items }) {
  return (
    <section className="content__container">
      {items.map((item) => (
        <ListItem key={item.key} item={item} />
      ))}
    </section>
  );
}

export default List;
