import React from "react";
import ReactDOM from "react-dom";
import MarkedHtml from "MarkedHtml";
import {text} from "text";

let str = "";
new Array(1).fill(0).forEach((_) => (str += text));

ReactDOM.render(
  <React.StrictMode>
    <div style={{display: "flex", flexDirection: "column", overflow: "auto"}}>
      <div style={{height: "800px", width: "100%"}} />
      <div style={{display: "flex", flex: "1 1 auto", height: "500px"}}>
        <div style={{height: "100%", width: "500px"}} />
        <div style={{width: "calc(100% - 500px)"}}>
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
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
