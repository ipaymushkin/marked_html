import React, {useEffect, useRef, useState} from "react";
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

  const [sizes, setSizes] = useState({
    documentHeight: 0,
    wrapperHeight: 0,
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
    if (wrapperRef.current && documentRef.current) {
      setSizes({
        documentHeight: documentRef.current.scrollHeight,
        wrapperHeight: wrapperRef.current.clientHeight,
      });
    }
  }, []);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", () => {
      scrollBoxRef.current.style.top =
        (documentRef.current.scrollTop / sizes.documentHeight) * 100 + "%";
    });
  }, [sizes.documentHeight]);

  return (
    <div className={"marked-html-wrapper"} ref={wrapperRef}>
      <div
        className={"marked-html-content"}
        ref={documentRef}
        dangerouslySetInnerHTML={{__html: html.current}}
      />
      <div className={"marked-html-scroll"}>
        {sizes.documentHeight && sizes.wrapperHeight ? (
          <div
            ref={scrollBoxRef}
            className={"marked-html-scrollbox"}
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
