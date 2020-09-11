import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ListOfTasks from "./components/ListOfTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("tasks"));
    setTasks(local);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const showItems = tasks.filter((task) =>
    status === "all" ? task : task.status === status
  );
  const count = tasks.filter((task) => task.status === "pending");
  return (
    <div className="App">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <ListOfTasks
        count={count.length}
        tasks={showItems}
        status={status}
        setStatus={setStatus}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;
