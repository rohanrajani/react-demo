import { Component } from "react";
import { addTask } from "../services/todoService";
import { Link } from "react-router-dom";

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: null,
      task: {
        title: "",
        completed: false,
        userId: 3,
      },
    };
  }

  componentDidMount() {
    let taskId = window.location.pathname.split("/")[1];
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    if (taskList) {
      let curTask = taskList.filter((task) => {
        return task.id == taskId;
      })[0];
      this.setState({ task: curTask, taskId: taskId });
    }
  }

  updateTask(prm, val) {
    let task = this.state.task;
    task[prm] = val;
    this.setState({ task: task });
  }

  updateCurTask() {
    let task = this.state.task;
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    if (taskList) {
      let curTask = taskList.filter((task, i) => {
        task.index = i;
        return task.id == this.state.taskId;
      })[0];
      taskList[curTask.index] = task;
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    alert("Task Updated Successfully!");
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
            className={"button accept-button"}
            onClick={() => {
              this.updateCurTask();
            }}
          >
            Update Task
          </button>
        </div>
      </>
    );
  }
}

export default UpdateTask;
