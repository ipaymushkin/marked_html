import React from "react";
import ReactDOM from "react-dom";
import MarkedHtml from "MarkedHtml";
import {text} from "text";

let str = "";
new Array(3).fill(0).forEach((_) => (str += text));

ReactDOM.render(
  <MarkedHtml
    html={str}
    columnCount={5}
    onlyUniqColor={true}
    colorBoxHeight={4}
    magnifier={true}
    magnifierHeight={100}
    minBoxHeight={100}
    scrollWidth={100}
    rules={[
      {
        backgroundColor: "red",
        color: "rgb(0,216,40)",
        words: ["from", "for"],
      },
      {backgroundColor: "blue", words: ["learning"]},
      {backgroundColor: "rgb(1,255,198)", words: ["lib*", "crea*"]},
      {backgroundColor: "yellow", words: ["*chain", "*bility"]},
      {backgroundColor: "gray", words: ["*ebpa*", "*commen*"]},
      {backgroundColor: "black", words: ["re?ct", "mo?re"]},
    ]}
  />,
  document.getElementById("root")
);
