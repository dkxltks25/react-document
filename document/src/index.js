import React from "react";
import ReactDOM from "react-dom";

function getGreeting(user) {
  if (user) {
    return <h1>Hello,{formatName(user)}</h1>;
  }
  return <h1>Hello,Stranger.</h1>;
}
function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}
const user = {
  firstName: "Harper",
  lastName: "Perez",
};
const element = { 
    type: 'h1',
    props:{
        className:'greting',
        children:'Hello, world!'
    }
}
ReactDOM.render(element, document.getElementById("root"));
