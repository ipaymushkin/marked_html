var _interopRequireDefault = require("C:/Projects/marked_html/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ColorBoxes = function ColorBoxes(_ref) {
  var positions = _ref.positions,
    colorBoxHeight = _ref.colorBoxHeight,
    boxesCountByFullHeight = _ref.boxesCountByFullHeight,
    columnCount = _ref.columnCount;
  if (
    Object.keys(positions).length === 0 ||
    boxesCountByFullHeight === 0 ||
    columnCount === 0
  )
    return null;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    new Array(boxesCountByFullHeight).fill(0).map(function (_, row) {
      return /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "marked-html-color-row",
          key: "box-row-".concat(row),
          style: {
            height: colorBoxHeight + "px",
          },
        },
        new Array(columnCount).fill(0).map(function (_, col) {
          var colors = positions[row] && positions[row][col];
          var child = null;

          if (colors) {
            child = colors.map(function (color) {
              return /*#__PURE__*/ _react.default.createElement("div", {
                key: "box-cell-".concat(row, "-").concat(col, "-").concat(color),
                style: {
                  width: 100 / colors.length + "%",
                  height: "100%",
                  backgroundColor: color,
                },
              });
            });
          }

          return /*#__PURE__*/ _react.default.createElement(
            "div",
            {
              className: "marked-html-color-cell",
              style: {
                width: 100 / columnCount + "%",
              },
              key: "box-cell-".concat(row, "-").concat(col),
            },
            child
          );
        })
      );
    })
  );
};

var _default = ColorBoxes;
exports.default = _default;
