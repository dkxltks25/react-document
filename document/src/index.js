import React from "react";
import ReactDOM from "react-dom";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const message = ["React", "Re:React", "Re:Re: React"];

ReactDOM.render(
  <Mailbox unreadMessages={message} />,
  document.getElementById("root")
);
