import React from "react";
import ReactDOM from "react-dom";
import MarkedHtml from "MarkedHtml";
import {text} from "text";

ReactDOM.render(
  <React.StrictMode>
    <MarkedHtml
      html={text}
      columnCount={5}
      onlyUniqColor={true}
      colorBoxHeight={4}
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
