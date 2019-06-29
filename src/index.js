import React from "react";
import ReactDOM from "react-dom";

import { match } from "./utils";

import { StyledUtilDescription } from "./components/UI";

import WebFont from "webfontloader";

import "./styles.css";

WebFont.load({
  google: {
    families: ["Nunito:400,700", "Literata:400,600", "Monoton", "sans-serif"]
  }
});

function App() {
  return (
    <div className="App">
      <StyledUtilDescription>
        <p>
          <strong>match: </strong>
          This number is output using a "match" function - a functional
          alternative to the "if / else" nightmare and the switch statement.
        </p>
        <p>
          <a href="https://codeburst.io/alternative-to-javascripts-switch-statement-with-a-functional-twist-3f572787ba1c">
            codeburst
          </a>
        </p>
        <strong>
          {match(10)
            .on(x => x < 40, x => x * 20)
            .otherwise(x => x * 10)}
        </strong>
      </StyledUtilDescription>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
