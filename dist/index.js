var _interopRequireDefault = require("C:/Projects/marked_html/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(
  require("C:/Projects/marked_html/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2")
);

var _createForOfIteratorHelper2 = _interopRequireDefault(
  require("C:/Projects/marked_html/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper")
);

var _slicedToArray2 = _interopRequireDefault(
  require("C:/Projects/marked_html/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray")
);

var _react = _interopRequireWildcard(require("react"));

require("./styles.css");

var _vanilla = _interopRequireDefault(require("mark.js/src/vanilla"));

var _ColorBoxes = _interopRequireDefault(require("./ColorBoxes"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var createHtml = function createHtml(html) {
  if (typeof html === "string") {
    return html;
  } else if (isElement(html)) {
    return html.outerHTML;
  }

  return "";
};

var isElement = function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};

var getBoxPosition = function getBoxPosition(clientY, boxHeight, fullHeight) {
  var top = clientY - boxHeight / 2;

  if (top < 0) {
    top = 0;
  } else if (top + boxHeight > fullHeight) {
    top = fullHeight - boxHeight;
  }

  return top;
};

var getCoords = function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: top,
    left: left,
  };
};

var MarkedHtml = function MarkedHtml(_ref) {
  var htmlProp = _ref.html,
    rules = _ref.rules,
    columnCount = _ref.columnCount,
    onlyUniqColor = _ref.onlyUniqColor,
    colorBoxHeight = _ref.colorBoxHeight,
    magnifier = _ref.magnifier,
    magnifierHeight = _ref.magnifierHeight,
    minBoxHeight = _ref.minBoxHeight,
    scrollWidth = _ref.scrollWidth,
    children = _ref.children,
    selector = _ref.selector,
    ignoreColumn = _ref.ignoreColumn;
  var html = (0, _react.useRef)(createHtml(htmlProp));
  var documentRef = (0, _react.useRef)();
  var wrapperRef = (0, _react.useRef)();
  var scrollBoxRef = (0, _react.useRef)();
  var scrollRef = (0, _react.useRef)();
  var scrollRefParent = (0, _react.useRef)();
  var magnifierRef = (0, _react.useRef)();
  var miniMagnifierRef = (0, _react.useRef)();
  var y = (0, _react.useRef)(0);
  var lastY = (0, _react.useRef)(0);
  var magnifierShow = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    positions = _useState2[0],
    setPositions = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    colorsObject = _useState4[0],
    setColorsObject = _useState4[1];

  var _useState5 = (0, _react.useState)({
      documentHeight: 0,
      documentWidth: 0,
      wrapperHeight: 0,
      scrollBoxHeight: 0,
      scrollHeight: 0,
      findingBox: {
        width: 0,
        height: 0,
      },
      boxesCountByFullHeight: 0,
      miniMagnifierHeight: 0,
      documentOffset: {
        top: 0,
        left: 0,
      },
    }),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    sizes = _useState6[0],
    setSizes = _useState6[1];

  var handleMarkedElements = (0, _react.useCallback)(
    function () {
      if (sizes.findingBox.height && sizes.findingBox.width) {
        var positionsObj = {};
        var wrapperTop = wrapperRef.current.getBoundingClientRect().top;
        var wrapperLeft = wrapperRef.current.getBoundingClientRect().left;
        var elements = document.querySelectorAll(selector || "[data-markjs]");

        var getRow = function getRow(top) {
          return Math.floor(
            ((top - wrapperTop) / sizes.findingBox.height) *
              (sizes.scrollHeight / sizes.wrapperHeight)
          );
        };

        var getCol = function getCol(left) {
          return Math.floor((left - wrapperLeft) / sizes.findingBox.width);
        };

        var colors = {};

        if (ignoreColumn) {
          var colorsSet = new Set();
          elements.forEach(function (el) {
            if (el.children.length === 0) {
              var background = el.style.background;
              colorsSet.add(background);
            }
          });
          var idx = 0;

          var _iterator = (0, _createForOfIteratorHelper2.default)(colorsSet),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var color = _step.value;
              colors[color] = idx;
              idx += 1;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        elements.forEach(function (el) {
          if (el.children.length === 0) {
            var _el$getBoundingClient = el.getBoundingClientRect(),
              top = _el$getBoundingClient.top,
              left = _el$getBoundingClient.left;

            var backgroundColor = el.style.backgroundColor;
            var row = getRow(top);
            var column = ignoreColumn ? colors[backgroundColor] : getCol(left);
            if (!positionsObj[row]) positionsObj[row] = {};
            if (!positionsObj[row][column]) positionsObj[row][column] = [];

            if (
              !onlyUniqColor ||
              positionsObj[row][column].indexOf(backgroundColor) === -1
            ) {
              positionsObj[row][column].push(backgroundColor);
            }
          }
        });
        if (ignoreColumn) setColorsObject(colors);
        setPositions(positionsObj);
      }
    },
    [
      sizes.findingBox.height,
      sizes.findingBox.width,
      sizes.scrollHeight,
      sizes.wrapperHeight,
      selector,
      ignoreColumn,
      onlyUniqColor,
    ]
  );
  (0, _react.useEffect)(
    function () {
      if (!selector) {
        var ctx = new _vanilla.default(documentRef.current);
        rules.forEach(function (rule) {
          rule.words.forEach(function (word) {
            var options = {
              element: "span",
              className: "marked-element",
              each: function each(el) {
                el.style.backgroundColor = rule.backgroundColor;
                el.style.color = rule.color;
              },
            };

            if (word.indexOf("*") === -1 && word.indexOf("?") === -1) {
              options.accuracy = "exactly";
            } else {
              options.wildcards = "enabled";
            }

            ctx.mark(word, options);
          });
        });
      }

      handleMarkedElements();
    },
    [handleMarkedElements, rules, selector]
  );
  (0, _react.useEffect)(
    function () {
      if (sizes.wrapperHeight && sizes.documentHeight) {
        setSizes(function (state) {
          return (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, state),
            {},
            {
              findingBox: {
                width: documentRef.current.clientWidth / columnCount,
                height: sizes.scrollHeight / (state.scrollBoxHeight / colorBoxHeight),
              },
              boxesCountByFullHeight: Math.floor(sizes.scrollHeight / colorBoxHeight),
              miniMagnifierHeight:
                magnifierHeight * (sizes.scrollHeight / sizes.documentHeight),
            }
          );
        });
      }
    },
    [
      sizes.wrapperHeight,
      sizes.documentHeight,
      columnCount,
      colorBoxHeight,
      magnifierHeight,
      sizes.scrollHeight,
    ]
  );
  (0, _react.useEffect)(
    function () {
      if (wrapperRef.current && documentRef.current) {
        var documentHeight = documentRef.current.scrollHeight;
        var wrapperHeight = wrapperRef.current.clientHeight;
        var scrollBoxHeight =
          documentHeight > wrapperHeight
            ? (wrapperHeight / documentHeight) * wrapperHeight
            : wrapperHeight;
        var scrollHeight = wrapperHeight;

        if (scrollBoxHeight < minBoxHeight) {
          scrollHeight = (wrapperHeight * minBoxHeight) / scrollBoxHeight;
          scrollBoxHeight = minBoxHeight;
        }

        setSizes(function (state) {
          return (0, _objectSpread2.default)(
            (0, _objectSpread2.default)({}, state),
            {},
            {
              documentHeight: documentHeight,
              wrapperHeight: wrapperHeight,
              scrollBoxHeight: scrollBoxHeight,
              scrollHeight: scrollHeight,
              documentOffset: getCoords(wrapperRef.current),
            }
          );
        });
      }
    },
    [minBoxHeight]
  );
  var handleScrollDocument = (0, _react.useCallback)(
    function () {
      if (sizes.documentHeight) {
        var topPosition =
          (documentRef.current.scrollTop / sizes.documentHeight) * sizes.scrollHeight;
        scrollBoxRef.current.style.top = topPosition + "px";
        var topWithScroll = topPosition - scrollRefParent.current.scrollTop;

        if (topWithScroll > sizes.wrapperHeight - sizes.scrollBoxHeight) {
          scrollRefParent.current.scrollTop =
            (documentRef.current.scrollTop / sizes.documentHeight) * sizes.scrollHeight -
            sizes.wrapperHeight +
            sizes.scrollBoxHeight;
        } else if (topWithScroll < 0) {
          scrollRefParent.current.scrollTop =
            (documentRef.current.scrollTop / sizes.documentHeight) * sizes.scrollHeight;
        }
      }
    },
    [sizes.documentHeight, sizes.scrollBoxHeight, sizes.scrollHeight, sizes.wrapperHeight]
  );
  var setPosition = (0, _react.useCallback)(
    function (topPosition) {
      var newTopPosition = topPosition;

      if (newTopPosition < 0) {
        newTopPosition = 0;
      } else if (newTopPosition + sizes.scrollBoxHeight > sizes.scrollHeight) {
        newTopPosition = sizes.scrollHeight - sizes.scrollBoxHeight;
      }

      scrollBoxRef.current.style.top = newTopPosition + "px";
      documentRef.current.scrollTop =
        (newTopPosition / sizes.scrollHeight) * sizes.documentHeight;
    },
    [sizes.documentHeight, sizes.scrollBoxHeight, sizes.scrollHeight]
  );
  var mouseMoveHandler = (0, _react.useCallback)(
    function (e) {
      var dy = e.clientY - y.current;
      var newTopPosition = lastY.current + dy;
      setPosition(newTopPosition);
    },
    [setPosition]
  );
  var mouseUpHandler = (0, _react.useCallback)(
    function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    },
    [mouseMoveHandler]
  );
  var mouseDownHandler = (0, _react.useCallback)(
    function (e) {
      e.preventDefault();
      var scrollBox = e.target.dataset.scrollbox;

      if (scrollBox) {
        y.current = e.clientY;
        lastY.current =
          scrollBoxRef.current.getBoundingClientRect().top -
          wrapperRef.current.getBoundingClientRect().top +
          scrollRefParent.current.scrollTop;
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      }
    },
    [mouseMoveHandler, mouseUpHandler]
  );
  (0, _react.useEffect)(
    function () {
      document.addEventListener("mousedown", mouseDownHandler);
      documentRef.current.addEventListener("scroll", handleScrollDocument);
      return function () {
        if (documentRef.current) {
          documentRef.current.removeEventListener("scroll", handleScrollDocument);
        }

        document.removeEventListener("mousedown", mouseDownHandler);
      };
    },
    [handleScrollDocument, mouseDownHandler]
  );
  var onScrollClick = (0, _react.useCallback)(
    function (e) {
      var clientY =
        e.clientY +
        window.scrollY -
        sizes.documentOffset.top +
        scrollRefParent.current.scrollTop;
      var halfHeight = sizes.scrollBoxHeight / 2;

      if (clientY + halfHeight < sizes.scrollHeight && clientY - halfHeight > 0) {
        setPosition(clientY - halfHeight);
      } else if (clientY - halfHeight < 0) {
        setPosition(0);
      } else {
        setPosition(clientY);
      }
    },
    [setPosition, sizes.documentOffset.top, sizes.scrollBoxHeight, sizes.scrollHeight]
  );
  var onMouseEnter = (0, _react.useCallback)(
    function () {
      if (magnifier) {
        magnifierShow.current = true;
        miniMagnifierRef.current.style.display = "block";
        magnifierRef.current.style.display = "block";
        magnifierRef.current.innerHTML = documentRef.current.outerHTML;
        magnifierRef.current.firstChild.style.position = "absolute";
      }
    },
    [magnifier]
  );
  var onMouseLeave = (0, _react.useCallback)(
    function () {
      if (magnifier) {
        magnifierShow.current = false;
        miniMagnifierRef.current.style.display = "none";
        magnifierRef.current.style.display = "none";
        magnifierRef.current.innerHTML = "";
      }
    },
    [magnifier]
  );
  var onMouseMove = (0, _react.useCallback)(
    function (e) {
      if (magnifier && magnifierShow.current) {
        var _y = e.clientY + window.scrollY - sizes.documentOffset.top;

        var newMiniMagnifierTop = getBoxPosition(
          _y,
          sizes.miniMagnifierHeight,
          sizes.scrollHeight
        );
        miniMagnifierRef.current.style.top = newMiniMagnifierTop + "px";
        var newMagnifierTop = getBoxPosition(_y, magnifierHeight, sizes.scrollHeight);
        magnifierRef.current.style.top = newMagnifierTop + "px";
        magnifierRef.current.firstChild.style.top =
          -(
            sizes.documentHeight *
            ((newMiniMagnifierTop + scrollRefParent.current.scrollTop) /
              sizes.scrollHeight)
          ) + "px";
      }
    },
    [
      magnifier,
      magnifierHeight,
      sizes.documentHeight,
      sizes.documentOffset.top,
      sizes.miniMagnifierHeight,
      sizes.scrollHeight,
    ]
  );
  var params = {};

  if (magnifier) {
    params.onMouseEnter = onMouseEnter;
    params.onMouseLeave = onMouseLeave;
    params.onMouseMove = onMouseMove;
  }

  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      className: "marked-html-wrapper",
      ref: wrapperRef,
    },
    children
      ? /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "marked-html-content",
            ref: documentRef,
          },
          children
        )
      : /*#__PURE__*/ _react.default.createElement("div", {
          className: "marked-html-content",
          ref: documentRef,
          dangerouslySetInnerHTML: {
            __html: html.current,
          },
        }),
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        style: {
          height: "100%",
          overflowY: "auto",
          flex: "0 0 auto",
        },
        ref: scrollRefParent,
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        Object.assign(
          {
            className: "marked-html-scroll",
            ref: scrollRef,
            onClick: onScrollClick,
          },
          params,
          {
            style: {
              height: sizes.scrollHeight + "px",
              width: scrollWidth + "px",
            },
          }
        ),
        /*#__PURE__*/ _react.default.createElement(_ColorBoxes.default, {
          positions: positions,
          colorBoxHeight: colorBoxHeight,
          boxesCountByFullHeight: sizes.boxesCountByFullHeight,
          columnCount: ignoreColumn ? Object.keys(colorsObject).length : columnCount,
        }),
        sizes.documentHeight && sizes.wrapperHeight
          ? /*#__PURE__*/ _react.default.createElement("div", {
              ref: scrollBoxRef,
              className: "marked-html-scrollbox",
              draggable: true,
              "data-scrollbox": true,
              onClick: function onClick(e) {
                e.preventDefault();
                e.stopPropagation();
              },
              onMouseMove: onMouseLeave,
              style: {
                height: sizes.scrollBoxHeight + "px",
              },
            })
          : null
      ),
      magnifier && sizes.miniMagnifierHeight
        ? /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement("div", {
              ref: miniMagnifierRef,
              className: "marked-html-mini-magnifier-box",
              style: {
                height: sizes.miniMagnifierHeight + "px",
                width: scrollWidth + "px",
              },
            }),
            /*#__PURE__*/ _react.default.createElement("div", {
              ref: magnifierRef,
              className: "marked-html-magnifier-box",
              style: {
                height: magnifierHeight + "px",
                width: "calc(100% - ".concat(scrollWidth, "px)"),
              },
            })
          )
        : null
    )
  );
};

MarkedHtml.defaultProps = {
  html: "",
  rules: [],
  columnCount: 1,
  onlyUniqColor: true,
  colorBoxHeight: 4,
  magnifier: false,
  magnifierHeight: 100,
  minBoxHeight: 50,
  scrollWidth: 55,
  selector: "",
  ignoreColumn: false,
};
var _default = MarkedHtml;
exports.default = _default;
