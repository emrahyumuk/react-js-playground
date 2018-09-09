import React from "react";

export class TodoForm extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    const input = document.getElementById("todoInput");
    const val = input.value;
    if (val == null || val == "") return;
    input.value = "";
    this.props.addTask(val);
  }

  render() {
    return (
      <div>
        <div className="todo type1">
          <form className="input-wrapper" onSubmit={this.addTask}>
            <input
              id="todoInput"
              type="text"
              className="add-todo"
              name="add-todo"
              placeholder="What needs to be done?"
            />
          </form>
        </div>
        <button type="button" onClick={this.addTask} className="add-btn" />
      </div>
    );
  }
}
