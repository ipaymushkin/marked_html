import React, {useEffect, useRef} from "react";
import {text} from "./text";
import Mark from "mark.js/src/vanilla";
const App = () => {
  const ref = useRef();
  useEffect(() => {
    const options = {
      element: "span",
      className: "markBlue",
      separateWordSearch: true,
      wildcards: "enabled",
      // accuracy: "exactly",
    };
    const ctx = new Mark(ref.current);
    ctx.unmark({
      done: function () {
        ctx.mark("js need", options);
      },
    });
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{__html: text}} />;
};

App.propTypes = {};

export {App};
