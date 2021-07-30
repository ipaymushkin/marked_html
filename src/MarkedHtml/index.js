import React, {useCallback, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Mark from "mark.js/src/vanilla";
import ColorBoxes from "MarkedHtml/ColorBoxes";

const createHtml = (html) => {
  if (typeof html === "string") {
    return html;
  } else if (isElement(html)) {
    return html.outerHTML;
  }
  return "";
};

const isElement = (element) => {
  return element instanceof Element || element instanceof HTMLDocument;
};

const getBoxPosition = (clientY, boxHeight, fullHeight) => {
  let top = clientY - boxHeight / 2;
  if (top < 0) {
    top = 0;
  } else if (top + boxHeight > fullHeight) {
    top = fullHeight - boxHeight;
  }
  return top;
};

const MarkedHtml = ({
  html: htmlProp,
  rules,
  columnCount,
  onlyUniqColor,
  colorBoxHeight,
  magnifier,
  magnifierHeight,
}) => {
  const html = useRef(createHtml(htmlProp));
  const documentRef = useRef();
  const wrapperRef = useRef();
  const scrollBoxRef = useRef();
  const scrollRef = useRef();
  const magnifierRef = useRef();
  const miniMagnifierRef = useRef();
  const y = useRef(0);
  const lastY = useRef(0);
  const magnifierShow = useRef(false);
  const [positions, setPositions] = useState({});

  const [sizes, setSizes] = useState({
    documentHeight: 0,
    documentWidth: 0,
    wrapperHeight: 0,
    scrollPlace: {
      top: 0,
      height: 0,
    },
    scrollBoxHeight: 0,
    findingBox: {
      width: 0,
      height: 0,
    },
    boxesCountByFullHeight: 0,
    miniMagnifierHeight: 0,
  });

  const handleMarkedElements = useCallback(() => {
    if (sizes.findingBox.height && sizes.findingBox.width) {
      const positionsObj = {};

      document.querySelectorAll("[data-markjs]").forEach((el) => {
        if (el.children.length === 0) {
          const {top, left} = el.getBoundingClientRect();
          const row = Math.floor(top / sizes.findingBox.height);
          const column = Math.floor(left / sizes.findingBox.width);
          if (!positionsObj[row]) positionsObj[row] = {};
          if (!positionsObj[row][column]) positionsObj[row][column] = [];
          if (!onlyUniqColor || positionsObj[row][column].indexOf(el.className) === -1) {
            positionsObj[row][column].push(el.className);
          }
        }
      });
      setPositions(positionsObj);
    }
  }, [onlyUniqColor, sizes.findingBox.height, sizes.findingBox.width]);

  useEffect(() => {
    const ctx = new Mark(documentRef.current);
    rules.forEach((rule) => {
      rule.words.forEach((word) => {
        const options = {
          element: "span",
          className: `mark-${rule.color}`,
        };
        if (word.indexOf("*") === -1 && word.indexOf("?") === -1) {
          options.accuracy = "exactly";
        } else {
          options.wildcards = "enabled";
        }
        ctx.mark(word, options);
      });
    });
    handleMarkedElements();
  }, [handleMarkedElements, rules]);

  useEffect(() => {
    if (sizes.wrapperHeight && sizes.documentHeight) {
      const scrollBoxHeight = scrollBoxRef.current.getBoundingClientRect().height;
      setSizes((state) => ({
        ...state,
        scrollBoxHeight,
        findingBox: {
          width: documentRef.current.clientWidth / columnCount,
          height: state.wrapperHeight / (scrollBoxHeight / colorBoxHeight),
        },
        boxesCountByFullHeight: Math.floor(sizes.wrapperHeight / colorBoxHeight),
        miniMagnifierHeight:
          magnifierHeight * (sizes.wrapperHeight / sizes.documentHeight),
      }));
    }
  }, [
    sizes.wrapperHeight,
    sizes.documentHeight,
    columnCount,
    colorBoxHeight,
    magnifierHeight,
  ]);

  useEffect(() => {
    if (wrapperRef.current && documentRef.current) {
      const scroll = scrollRef.current.getBoundingClientRect();
      setSizes((state) => ({
        ...state,
        documentHeight: documentRef.current.scrollHeight,
        wrapperHeight: wrapperRef.current.clientHeight,
        scrollPlace: {
          top: scroll.top,
          height: scroll.height,
        },
      }));
    }
  }, []);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", () => {
      if (sizes.documentHeight) {
        scrollBoxRef.current.style.top =
          (documentRef.current.scrollTop / sizes.documentHeight) * 100 + "%";
      }
    });
  }, [sizes.documentHeight]);

  const setPosition = useCallback(
    (topPosition) => {
      let newTopPosition = topPosition;
      if (newTopPosition < sizes.scrollPlace.top) {
        newTopPosition = 0;
      } else if (newTopPosition + sizes.scrollBoxHeight > sizes.wrapperHeight) {
        newTopPosition = sizes.wrapperHeight - sizes.scrollBoxHeight;
      }
      scrollBoxRef.current.style.top = newTopPosition + "px";
      documentRef.current.scrollTop =
        (newTopPosition / sizes.wrapperHeight) * sizes.documentHeight;
    },
    [
      sizes.documentHeight,
      sizes.scrollBoxHeight,
      sizes.scrollPlace.top,
      sizes.wrapperHeight,
    ]
  );

  const mouseMoveHandler = useCallback(
    (e) => {
      const dy = e.clientY - y.current;
      let newTopPosition = lastY.current + dy;
      setPosition(newTopPosition);
    },
    [setPosition]
  );

  const mouseUpHandler = useCallback(() => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }, [mouseMoveHandler]);

  const mouseDownHandler = useCallback(
    (e) => {
      e.preventDefault();
      const scrollBox = e.target.dataset.scrollbox;
      if (scrollBox) {
        y.current = e.clientY;
        lastY.current = scrollBoxRef.current.getBoundingClientRect().top;
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      }
    },
    [mouseMoveHandler, mouseUpHandler]
  );

  useEffect(() => {
    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [mouseDownHandler]);

  const onScrollClick = useCallback(
    (e) => {
      const {clientY} = e;
      const halfHeight = sizes.scrollBoxHeight / 2;
      if (clientY + halfHeight < sizes.wrapperHeight && clientY - halfHeight > 0) {
        setPosition(clientY - halfHeight);
      } else {
        setPosition(clientY);
      }
    },
    [setPosition, sizes.scrollBoxHeight, sizes.wrapperHeight]
  );

  const onMouseEnter = useCallback(() => {
    if (magnifier) {
      magnifierShow.current = true;
      miniMagnifierRef.current.style.display = "block";
      magnifierRef.current.style.display = "block";
      magnifierRef.current.innerHTML = documentRef.current.outerHTML;
      magnifierRef.current.firstChild.style.position = "absolute";
    }
  }, [magnifier]);

  const onMouseLeave = useCallback(() => {
    if (magnifier) {
      magnifierShow.current = false;
      miniMagnifierRef.current.style.display = "none";
      magnifierRef.current.style.display = "none";
      magnifierRef.current.innerHTML = "";
    }
  }, [magnifier]);

  const onMouseMove = useCallback(
    (e) => {
      if (magnifier && magnifierShow.current) {
        const newMiniMagnifierTop = getBoxPosition(
          e.clientY,
          sizes.miniMagnifierHeight,
          sizes.wrapperHeight
        );
        miniMagnifierRef.current.style.top = newMiniMagnifierTop + "px";
        const newMagnifierTop = getBoxPosition(
          e.clientY,
          magnifierHeight,
          sizes.wrapperHeight
        );
        magnifierRef.current.style.top = newMagnifierTop + "px";
        magnifierRef.current.firstChild.style.top =
          -(sizes.documentHeight * (newMiniMagnifierTop / sizes.wrapperHeight)) + "px";
      }
    },
    [
      magnifier,
      magnifierHeight,
      sizes.documentHeight,
      sizes.miniMagnifierHeight,
      sizes.wrapperHeight,
    ]
  );

  const params = {};
  if (magnifier) {
    params.onMouseEnter = onMouseEnter;
    params.onMouseLeave = onMouseLeave;
    params.onMouseMove = onMouseMove;
  }

  return (
    <div className={"marked-html-wrapper"} ref={wrapperRef}>
      <div
        className={"marked-html-content"}
        ref={documentRef}
        dangerouslySetInnerHTML={{__html: html.current}}
      />
      <div
        className={"marked-html-scroll"}
        ref={scrollRef}
        onClick={onScrollClick}
        {...params}
      >
        <ColorBoxes
          positions={positions}
          colorBoxHeight={colorBoxHeight}
          boxesCountByFullHeight={sizes.boxesCountByFullHeight}
          columnCount={columnCount}
        />
        {sizes.documentHeight && sizes.wrapperHeight ? (
          <div
            ref={scrollBoxRef}
            className={"marked-html-scrollbox"}
            draggable={true}
            data-scrollbox={true}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseMove={onMouseLeave}
            style={{
              height:
                sizes.documentHeight > sizes.wrapperHeight
                  ? `${(sizes.wrapperHeight / sizes.documentHeight) * 100}%`
                  : "100%",
            }}
          />
        ) : null}
      </div>
      {magnifier && sizes.miniMagnifierHeight && (
        <>
          <div
            ref={miniMagnifierRef}
            className={"marked-html-mini-magnifier-box"}
            style={{
              height: sizes.miniMagnifierHeight + "px",
            }}
          />
          <div
            ref={magnifierRef}
            className={"marked-html-magnifier-box"}
            style={{height: magnifierHeight + "px"}}
          />
        </>
      )}
    </div>
  );
};

MarkedHtml.propTypes = {
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      words: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  columnCount: PropTypes.number,
  onlyUniqColor: PropTypes.bool,
  colorBoxHeight: PropTypes.number,
  magnifier: PropTypes.bool,
  magnifierHeight: PropTypes.number,
};

MarkedHtml.defaultProps = {
  columnCount: 1,
  onlyUniqColor: true,
  colorBoxHeight: 4,
  magnifier: false,
  magnifierHeight: 100,
};

export default MarkedHtml;
