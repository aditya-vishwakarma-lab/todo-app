import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4"; 
import api from "../api/tasks";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";
import EditTask from "./EditTask";

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState([]);

  //RetrieveTasks
  const retrieveTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
  };

  const addTaskHandler = async (task) => {
    const response = await api.post("/tasks", task);
    setTasks([response.data,...tasks]);
  };

  const updateTaskHandler = async (task) => {
    const response = await api.put(`/tasks/${task.id}`, task);
    const { id, title,  description, completed} = response.data;
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...response.data } : task;
      })
    );
  };

  const removeTaskHandler = async (id) => {
    await api.delete(`/tasks/${id}`);
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTaskList);
  };

  useEffect(() => {
    const getAllTasks = async () => {
      const allTasks = await retrieveTasks();
      if (allTasks) setTasks(allTasks);
    };

    getAllTasks();
  }, []);

  useEffect(() => {
  }, [tasks]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TaskList
                {...props}
                tasks={tasks}
                getTaskId={removeTaskHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTask {...props} addTaskHandler={addTaskHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditTask
                {...props}
                updateTaskHandler={updateTaskHandler}
              />
            )}
          />

          <Route path="/task/:id" component={TaskDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
