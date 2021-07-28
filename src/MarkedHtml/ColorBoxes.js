import React from "react";
import PropTypes from "prop-types";

const ColorBoxes = ({positions}) => {
  if (Object.keys(positions).length === 0) return null;
  console.log(positions);
  return <div></div>;
};

ColorBoxes.propTypes = {
  positions: PropTypes.object.isRequired,
};

export default ColorBoxes;
