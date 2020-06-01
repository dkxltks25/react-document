import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    console.log(1);
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log(2);
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillMount() {
    console.log(3);

    clearInterval(this.timerId);
  }
  tick() {
    console.log(4);
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1> hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
