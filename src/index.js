import React from "react";
import ReactDOM from "react-dom";
import MarkedHtml from "MarkedHtml";
import {text} from "text";

let str = "";
new Array(10).fill(0).forEach((_) => (str += text));

ReactDOM.render(
  <React.StrictMode>
    <MarkedHtml
      // html={text}
      html={str}
      columnCount={5}
      onlyUniqColor={true}
      colorBoxHeight={4}
      magnifier={true}
      magnifierHeight={100}
      // magnifierHeight={500}
      rules={[
        {color: "red", words: ["from", "for"]},
        {color: "blue", words: ["learning"]},
        {color: "green", words: ["lib*", "crea*"]},
        {color: "yellow", words: ["*chain", "*bility"]},
        {color: "gray", words: ["*ebpa*", "*commen*"]},
        {color: "black", words: ["re?ct", "mo?re"]},
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
