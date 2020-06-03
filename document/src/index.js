import React from "react";
import ReactDOM from "react-dom";

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}


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

function SplitPane(props) {
  return (
    <div className="SplitePane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}
function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
ReactDOM.render(<WelcomDialog />, document.getElementById("root"));
