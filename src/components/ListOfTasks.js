import React from "react";
import Task from "./Task";
import Status from "./Status";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListOfItems = ({ tasks, setTasks, setStatus, status, count }) => {
  const number = count > 0;

  return (
    <div className={"list-section"}>
      <Status status={status} setStatus={setStatus} />
      <TransitionGroup component="ul" className="list-of-tasks">
        {tasks.map((task, i) => (
          <CSSTransition
            classNames="task"
            key={i}
            timeout={{ enter: 2500, exit: 2500 }}
          >
            <Task key={i} task={task} tasks={tasks} setTasks={setTasks} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <p className={number ? "remaining-tasks" : "remaining-tasks completed"}>
        {number ? `tasks left: ${count}` : "all tasks are completed"}
      </p>
    </div>
  );
};

export default ListOfItems;
