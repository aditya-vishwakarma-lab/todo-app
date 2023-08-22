import React from "react";
import { Link } from "react-router-dom";

const TaskDetail = (props) => {
  const { title, description, completed } = props.location.state.task;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{description}</div>
          <div className="ui checkbox">
            <input 
            type="checkbox" 
            name="completed"
            defaultChecked={completed}
            className="hidden"
            />
            <label>Completed</label>
          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Task List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TaskDetail;
