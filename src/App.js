import "./App.css";
import { Component } from "react";
import RouterComp from "./router";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <RouterComp />
      </>
    );
  }
}

export default App;
