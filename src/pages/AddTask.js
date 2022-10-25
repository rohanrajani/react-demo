import { Component } from "react";
import { addTask } from "../services/todoService";
import { Link } from "react-router-dom";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: "",
        completed: false,
        userId: 3,
      },
    };
  }

  updateTask(prm, val) {
    let task = this.state.task;
    task[prm] = val;
    this.setState({ task: task });
  }

  addTask() {
    let task = this.state.task;
    task.id = new Date().getTime();
    addTask(task).then((res) => {
      if (res) {
        let taskList = localStorage.getItem("taskList");
        let newTaskList = [task];
        if (taskList) {
          newTaskList = newTaskList.concat(JSON.parse(taskList));
        }
        localStorage.setItem("taskList", JSON.stringify(newTaskList));
        alert("Task Added Successfully!");
      }
    });
  }

  render() {
    return (
      <>
        <div style={{ display: "flex", margin: "10px 10px 20px" }}>
          <Link to="/">
            <button className={"button accept-button"}>Back To List</button>
          </Link>
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <span>Title : </span>
          <input
            type="text"
            value={this.state.task.title}
            onChange={(e) => {
              this.updateTask("title", e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <span>Completed : </span>
          <input
            type="checkbox"
            checked={this.state.task.completed}
            onChange={(e) => {
              this.updateTask("completed", !this.state.task.completed);
            }}
          />
        </div>
        <div style={{ display: "flex", margin: "10px" }}>
          <button
            onClick={() => {
              this.addTask();
            }}
            className={"button accept-button"}
          >
            Add Task
          </button>
        </div>
      </>
    );
  }
}

export default AddTask;
