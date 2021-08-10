import React from "react";
import PropTypes from "prop-types";

const ColorBoxes = ({positions, colorBoxHeight, boxesCountByFullHeight, columnCount}) => {
  if (Object.keys(positions).length === 0 || boxesCountByFullHeight === 0) return null;
  return (
    <>
      {new Array(boxesCountByFullHeight).fill(0).map((_, row) => {
        return (
          <div
            className={"marked-html-color-row"}
            key={`box-row-${row}`}
            style={{height: colorBoxHeight + "px"}}
          >
            {new Array(columnCount).fill(0).map((_, col) => {
              const colors = positions[row] && positions[row][col];
              let child = null;
              if (colors) {
                child = colors.map((color) => (
                  <div
                    key={`box-cell-${row}-${col}-${color}`}
                    style={{
                      width: 100 / colors.length + "%",
                      height: "100%",
                      backgroundColor: color,
                    }}
                  />
                ));
              }
              return (
                <div
                  className={"marked-html-color-cell"}
                  style={{width: 100 / columnCount + "%"}}
                  key={`box-cell-${row}-${col}`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

ColorBoxes.propTypes = {
  positions: PropTypes.object.isRequired,
  colorBoxHeight: PropTypes.number.isRequired,
  boxesCountByFullHeight: PropTypes.number.isRequired,
  columnCount: PropTypes.number.isRequired,
};

export default ColorBoxes;
