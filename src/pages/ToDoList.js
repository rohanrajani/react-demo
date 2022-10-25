import { Component } from "react";
import { getToDoList, deleteTask } from "../services/todoService";
import { Link } from "react-router-dom";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    let taskList = localStorage.getItem("taskList");
    if (taskList) {
      this.filterDeletedItems(JSON.parse(taskList));
    } else {
      getToDoList().then((res) => {
        if (res && res.length > 0) {
          this.filterDeletedItems(res);
          localStorage.setItem("taskList", JSON.stringify(res));
        }
      });
    }
  }

  filterDeletedItems(data) {
    let deletedList = JSON.parse(localStorage.getItem("deletedList"));
    if (!deletedList || deletedList.length == 0) {
      this.setState({ list: data });
    } else {
      let listItems = data.filter((task) => {
        return !deletedList.includes(task.id);
      });
      this.setState({ list: listItems });
    }
  }

  deleteItem(id) {
    deleteTask(id).then((res) => {
      let deletedList = JSON.parse(localStorage.getItem("deletedList"));
      if (!deletedList) {
        deletedList = [];
      }
      deletedList.push(id);
      let indexOfTask = this.state.list
        .map(function (x) {
          return x.id;
        })
        .indexOf(id);
      let list = this.state.list;
      list.splice(indexOfTask, 1);
      this.setState({ list: list });
      localStorage.setItem("deletedList", JSON.stringify(deletedList));
      alert("Deleted successfully!");
    });
  }

  render() {
    return (
      <>
        <Link to="/add">
          <button
            style={{ marginBottom: "10px" }}
            className={"button accept-button"}
          >
            Add Task
          </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((task, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.completed ? "Completed" : "Incomplete"}</td>
                  <td>
                    <button
                      className={"button cancle-button"}
                      onClick={() => {
                        this.deleteItem(task.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link to={"/" + task.id}>
                      <button className={"button accept-button"}>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ToDoList;
