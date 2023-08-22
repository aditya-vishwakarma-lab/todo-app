import React from "react";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  // console.log(props);

  const deleteTaskHandler = (id) => {
    props.getTaskId(id);
  };

  const renderTaskList = props.tasks.map((task) => {
    return (
      <TaskCard
        task={task}
        clickHander={deleteTaskHandler}
        key={task.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Task List
        <Link to="/add">
          <button className="ui button blue right">Add Task</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderTaskList}</div>
    </div>
  );
};

export default TaskList;
