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

const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {top, left};
};

const MarkedHtml = ({
  html: htmlProp,
  rules,
  columnCount,
  onlyUniqColor,
  colorBoxHeight,
  magnifier,
  magnifierHeight,
  minBoxHeight,
  scrollWidth,
}) => {
  const html = useRef(createHtml(htmlProp));
  const documentRef = useRef();
  const wrapperRef = useRef();
  const scrollBoxRef = useRef();
  const scrollRef = useRef();
  const scrollRefParent = useRef();
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
  });

  const handleMarkedElements = useCallback(() => {
    if (sizes.findingBox.height && sizes.findingBox.width) {
      const positionsObj = {};
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      const wrapperLeft = wrapperRef.current.getBoundingClientRect().left;
      document.querySelectorAll("[data-markjs]").forEach((el) => {
        if (el.children.length === 0) {
          const {top, left} = el.getBoundingClientRect();
          const row = Math.floor(
            ((top - wrapperTop) / sizes.findingBox.height) *
              (sizes.scrollHeight / sizes.wrapperHeight)
          );
          const column = Math.floor((left - wrapperLeft) / sizes.findingBox.width);
          if (!positionsObj[row]) positionsObj[row] = {};
          if (!positionsObj[row][column]) positionsObj[row][column] = [];
          if (
            !onlyUniqColor ||
            positionsObj[row][column].indexOf(el.style.backgroundColor) === -1
          ) {
            positionsObj[row][column].push(el.style.backgroundColor);
          }
        }
      });
      setPositions(positionsObj);
    }
  }, [
    sizes.findingBox.height,
    sizes.findingBox.width,
    sizes.scrollHeight,
    sizes.wrapperHeight,
    onlyUniqColor,
  ]);

  useEffect(() => {
    const ctx = new Mark(documentRef.current);
    rules.forEach((rule) => {
      rule.words.forEach((word) => {
        const options = {
          element: "span",
          className: `marked-element`,
          each: (el) => {
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
    handleMarkedElements();
  }, [handleMarkedElements, rules]);

  useEffect(() => {
    if (sizes.wrapperHeight && sizes.documentHeight) {
      setSizes((state) => ({
        ...state,
        findingBox: {
          width: documentRef.current.clientWidth / columnCount,
          height: sizes.scrollHeight / (state.scrollBoxHeight / colorBoxHeight),
        },
        boxesCountByFullHeight: Math.floor(sizes.scrollHeight / colorBoxHeight),
        miniMagnifierHeight:
          magnifierHeight * (sizes.scrollHeight / sizes.documentHeight),
      }));
    }
  }, [
    sizes.wrapperHeight,
    sizes.documentHeight,
    columnCount,
    colorBoxHeight,
    magnifierHeight,
    sizes.scrollHeight,
  ]);

  useEffect(() => {
    if (wrapperRef.current && documentRef.current) {
      const documentHeight = documentRef.current.scrollHeight;
      const wrapperHeight = wrapperRef.current.clientHeight;
      let scrollBoxHeight =
        documentHeight > wrapperHeight
          ? (wrapperHeight / documentHeight) * wrapperHeight
          : wrapperHeight;
      let scrollHeight = wrapperHeight;
      if (scrollBoxHeight < minBoxHeight) {
        scrollHeight = (wrapperHeight * minBoxHeight) / scrollBoxHeight;
        scrollBoxHeight = minBoxHeight;
      }

      setSizes((state) => ({
        ...state,
        documentHeight,
        wrapperHeight,
        scrollBoxHeight,
        scrollHeight,
        documentOffset: getCoords(wrapperRef.current),
      }));
    }
  }, [minBoxHeight]);

  const handleScrollDocument = useCallback(() => {
    if (sizes.documentHeight) {
      const topPosition =
        (documentRef.current.scrollTop / sizes.documentHeight) * sizes.scrollHeight;
      scrollBoxRef.current.style.top = topPosition + "px";
      const topWithScroll = topPosition - scrollRefParent.current.scrollTop;

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
  }, [
    sizes.documentHeight,
    sizes.scrollBoxHeight,
    sizes.scrollHeight,
    sizes.wrapperHeight,
  ]);

  const setPosition = useCallback(
    (topPosition) => {
      let newTopPosition = topPosition;
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

  useEffect(() => {
    document.addEventListener("mousedown", mouseDownHandler);
    documentRef.current.addEventListener("scroll", handleScrollDocument);

    return () => {
      if (documentRef.current) {
        documentRef.current.removeEventListener("scroll", handleScrollDocument);
      }
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [handleScrollDocument, mouseDownHandler]);

  const onScrollClick = useCallback(
    (e) => {
      const clientY =
        e.clientY +
        window.scrollY -
        sizes.documentOffset.top +
        scrollRefParent.current.scrollTop;
      const halfHeight = sizes.scrollBoxHeight / 2;
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
        const y = e.clientY + window.scrollY - sizes.documentOffset.top;
        const newMiniMagnifierTop = getBoxPosition(
          y,
          sizes.miniMagnifierHeight,
          sizes.scrollHeight
        );
        miniMagnifierRef.current.style.top = newMiniMagnifierTop + "px";
        const newMagnifierTop = getBoxPosition(y, magnifierHeight, sizes.scrollHeight);

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
        style={{height: "100%", overflowY: "auto", flex: "0 0 auto"}}
        ref={scrollRefParent}
      >
        <div
          className={"marked-html-scroll"}
          ref={scrollRef}
          onClick={onScrollClick}
          {...params}
          style={{height: sizes.scrollHeight + "px", width: scrollWidth + "px"}}
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
                height: sizes.scrollBoxHeight + "px",
              }}
            />
          ) : null}
        </div>
        {magnifier && sizes.miniMagnifierHeight ? (
          <>
            <div
              ref={miniMagnifierRef}
              className={"marked-html-mini-magnifier-box"}
              style={{
                height: sizes.miniMagnifierHeight + "px",
                width: scrollWidth + "px",
              }}
            />
            <div
              ref={magnifierRef}
              className={"marked-html-magnifier-box"}
              style={{
                height: magnifierHeight + "px",
                width: `calc(100% - ${scrollWidth}px)`,
              }}
            />
          </>
        ) : null}
      </div>
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
  minBoxHeight: PropTypes.number,
  scrollWidth: PropTypes.number,
};

MarkedHtml.defaultProps = {
  columnCount: 1,
  onlyUniqColor: true,
  colorBoxHeight: 4,
  magnifier: false,
  magnifierHeight: 100,
  minBoxHeight: 50,
  scrollWidth: 55,
};

export default MarkedHtml;
