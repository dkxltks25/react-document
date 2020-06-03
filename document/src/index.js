import React from "react";
import ReactDOM from "react-dom";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomDialog() {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Tank you form visiting our spaceraft!</p>
    </FancyBorder>
  );
}

ReactDOM.render(<WelcomDialog />, document.getElementById("root"));
