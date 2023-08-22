import React from "react";

class AddTask extends React.Component {
  state = {
    title: "",
    description: "",
    completed: false
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      alert("Title field is mandatory!");
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({ title: "", description: "", completed: false});
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Task</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
 
          <div className="field">
            <div className="ui checkbox">
              <input 
              type="checkbox" 
              name="completed"
              checked={this.state.completed}
              onChange={(e) => this.setState({ completed: e.target.checked })}
              />
              <label>Completed</label>
            </div>
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
