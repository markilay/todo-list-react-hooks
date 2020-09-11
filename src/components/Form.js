import React from "react";

const Form = ({ tasks, setTasks }) => {
  const taskRef = React.createRef();
  const deadlineRef = React.createRef();
  const addNewTask = (e) => {
    e.preventDefault();
    const task = {
      name: taskRef.current.value,
      id: Date.now(),
      deadline: deadlineRef.current.defaultValue,
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
        <input
          name="deadline"
          ref={deadlineRef}
          type="datetime-local"
          defaultValue="today"
        />
        <button type="submit" className="main-form_btn">
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
