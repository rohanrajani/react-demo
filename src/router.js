import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoList from "./pages/ToDoList";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";
class RouterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ToDoList />}></Route>
            <Route path="/add" element={<AddTask />}></Route>
            <Route path="/:id" element={<UpdateTask />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default RouterComp;
