import React, { useRef } from "react";

const Form = ({ tasks, setTasks }) => {
  const taskRef = useRef();
  const deadlineRef = useRef();

  const addNewTask = (e) => {
    e.preventDefault();
    const deadline =
      deadlineRef.current.value === "" ? "today" : deadlineRef.current.value;

    const task = {
      name: taskRef.current.value,
      id: Date.now(),
      deadline,
      status: "pending",
    };
    setTasks([...tasks, task]);
    e.currentTarget.reset();
  };

  return (
    <div className="form-section">
      <h2>What is the new task ahead of you ?</h2>

      <form className="main-form" autoComplete="off" onSubmit={addNewTask}>
        <input
          name="name"
          ref={taskRef}
          required
          type="text"
          placeholder="new task ... "
        />
        <input name="deadline" ref={deadlineRef} type="datetime-local" />
        <button type="submit" className="main-form_btn">
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
