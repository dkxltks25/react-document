import React from "react";
import ReactDOM from "react-dom";

// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>;
// }
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="UserInfo-text">{props.text} </div>
      <div className="Comment-date"> {formatDate(props.date)} </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
function UserInfo(props) {
    console.log(props);
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">{props.user.name}</div>
    </div>
  );
}

const element = (
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);

ReactDOM.render(element, document.getElementById("root"));
