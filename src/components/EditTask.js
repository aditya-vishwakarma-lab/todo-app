import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, completed } = props.location.state.task;
    this.state = {
      id,
      title,
      description,
      completed
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      alert("Title field is mandatory!");
      return;
    }
    this.props.updateTaskHandler(this.state);
    this.setState({ title: "", description: "", completed: false });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Task</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditTask;
