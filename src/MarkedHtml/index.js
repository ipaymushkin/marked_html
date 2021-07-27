import React, {useCallback, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Mark from "mark.js/src/vanilla";

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

const MarkedHtml = ({html: htmlProp, rules}) => {
  const html = useRef(createHtml(htmlProp));
  const documentRef = useRef();
  const wrapperRef = useRef();
  const scrollBoxRef = useRef();
  const scrollRef = useRef();
  const y = useRef(0);
  const lastY = useRef(0);

  const [sizes, setSizes] = useState({
    documentHeight: 0,
    wrapperHeight: 0,
    scrollPlace: {
      top: 0,
      height: 0,
    },
    scrollBoxHeight: 0,
  });

  useEffect(() => {
    const ctx = new Mark(documentRef.current);
    rules.forEach((rule) => {
      rule.words.forEach((word) => {
        const options = {
          element: "span",
          className: `mark-${rule.color}`,
        };
        if (word.indexOf("*") === -1 && word.indexOf("?")) {
          options.accuracy = "exactly";
        } else {
          options.wildcards = "enabled";
        }
        ctx.mark(word, options);
      });
    });
  }, [rules]);

  useEffect(() => {
    if (sizes.wrapperHeight && sizes.documentHeight) {
      setSizes((state) => ({
        ...state,
        scrollBoxHeight: scrollBoxRef.current.getBoundingClientRect().height,
      }));
    }
  }, [sizes.wrapperHeight, sizes.documentHeight]);

  useEffect(() => {
    if (wrapperRef.current && documentRef.current) {
      const scroll = scrollRef.current.getBoundingClientRect();
      setSizes({
        documentHeight: documentRef.current.scrollHeight,
        wrapperHeight: wrapperRef.current.clientHeight,
        scrollPlace: {
          top: scroll.top,
          height: scroll.height,
        },
      });
    }
  }, []);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", () => {
      scrollBoxRef.current.style.top =
        (documentRef.current.scrollTop / sizes.documentHeight) * 100 + "%";
    });
  }, [sizes.documentHeight]);

  // const dragStart = useCallback((event) => {
  //   event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);
  // }, []);

  const mouseMoveHandler = useCallback(
    (e) => {
      const dy = e.clientY - y.current;
      let newTopPosition = lastY.current + dy;
      if (newTopPosition < sizes.scrollPlace.top) {
        newTopPosition = 0;
      } else if (newTopPosition + sizes.scrollBoxHeight > sizes.wrapperHeight) {
        newTopPosition = sizes.wrapperHeight - sizes.scrollBoxHeight;
      }
      scrollBoxRef.current.style.top = newTopPosition + "px";
    },
    [sizes.scrollBoxHeight, sizes.scrollPlace.top, sizes.wrapperHeight]
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
    // document.addEventListener("dragstart", dragStart);
    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      // document.removeEventListener("dragstart", dragStart);
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [mouseDownHandler]);

  return (
    <div className={"marked-html-wrapper"} ref={wrapperRef}>
      <div
        className={"marked-html-content"}
        ref={documentRef}
        dangerouslySetInnerHTML={{__html: html.current}}
      />
      <div className={"marked-html-scroll"} ref={scrollRef}>
        {sizes.documentHeight && sizes.wrapperHeight ? (
          <div
            ref={scrollBoxRef}
            className={"marked-html-scrollbox"}
            draggable={true}
            data-scrollbox={true}
            style={{
              height:
                sizes.documentHeight > sizes.wrapperHeight
                  ? `${(sizes.wrapperHeight / sizes.documentHeight) * 100}%`
                  : "100%",
            }}
          />
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
  ),
};

export default MarkedHtml;
