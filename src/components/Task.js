import React from "react";

const Task = ({ task, tasks, setTasks }) => {
  const { name, deadline, id } = task;
  const deleteHandler = () => {
    setTasks(tasks.filter((item) => (item.id !== id ? item : "")));
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: "finished",
          };
        }
        return item;
      })
    );
  };

  return (
    <li
      className={task.status === "pending" ? "task-item" : "task-item finished"}
    >
      <div>
        <p className="task-name">{name}</p>
        <p className="task-deadline">{deadline}</p>
      </div>
      <button
        className="complete-btn"
        type="checkbox"
        onClick={completeHandler}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="delete-btn" onClick={deleteHandler}></button>
    </li>
  );
};

export default Task;
