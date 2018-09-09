import React from "react";
import { render } from "react-dom";

import { Header } from "./inc/header";
import { Footer } from "./inc/footer";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
import { Login } from "./login";

class TodoApp extends React.Component {
  constructor() {
    super();
    let myTasks = [
      { text: "Play drum", status: "todo" },
      { text: "Read book", status: "done" },
      { text: "Watch movie", status: "todo" }
    ];

    let localTasks = localStorage.getItem("tasks");
    if (localTasks !== null) {
      localTasks = JSON.parse(localTasks);
      myTasks = localTasks;
    }

    this.state = {
      userSession: TodoApp.getUserSessionData(),
      tasks: myTasks
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  static getUserSessionData() {
    let loginData = localStorage.getItem("login");
    loginData = JSON.parse(loginData);
    if (loginData !== null && loginData.login === true) {
      return { userName: loginData.userName };
    } else {
      return false;
    }
  }

  static isLogged() {
    let loginData = localStorage.getItem("login");
    loginData = JSON.parse(loginData);
    if (loginData !== null && loginData.login === true) {
      return true;
    }
    return false;
  }

  doLogin(userName) {
    let loginData = {
      login: true,
      userName: userName
    };
    this.setState({
      userSession: {
        userName: loginData.userName
      }
    });
    loginData = JSON.stringify(loginData);
    localStorage.setItem("login", loginData);
  }

  addTask(task) {
    let updatedList = this.state.tasks;
    updatedList.push({ text: task, status: "todo" });
    this.setState({ tasks: updatedList });
    this.updateLocalStorage(updatedList);
  }

  doneTask(task_id) {
    let updatedList = this.state.tasks;
    let currentStatus = updatedList[task_id.replace("task_", "")].status;
    let newStatus = "todo";
    if (currentStatus === "todo") {
      newStatus = "done";
    }
    updatedList[task_id.replace("task_", "")].status = newStatus;
    this.setState({ tasks: updatedList });
    this.updateLocalStorage(updatedList);
  }

  removeTask(task_id) {
    let updatedList = this.state.tasks;
    updatedList.splice(task_id.replace("task_", ""), 1);
    this.setState({ tasks: updatedList });
    this.updateLocalStorage(updatedList);
  }

  updateLocalStorage(updatedList) {
    updatedList = JSON.stringify(updatedList);
    localStorage.setItem("tasks", updatedList);
    return true;
  }

  render() {
    let layout = <Login doLogin={this.doLogin} />;
    if (TodoApp.isLogged() === true) {
      layout = (
        <div>
          <Header loginData={TodoApp.getUserSessionData} />
          <TodoForm addTask={this.addTask} />
          <TodoList
            myList={this.state.tasks}
            addTask={this.addTask}
            removeTask={this.removeTask}
            doneTask={this.doneTask}
          />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <div className="content">{layout}</div>
      </div>
    );
  }
}


render(<TodoApp/>, document.getElementById('appRoot'));
