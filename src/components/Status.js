import React from "react";

const Status = ({ setStatus }) => {
  const changeStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
  };
  return (
    <select name="status" onChange={changeStatus}>
      <option value="all">All</option>
      <option value="pending">Pending Projects</option>
      <option value="finished">Done Projects</option>
    </select>
  );
};

export default Status;
