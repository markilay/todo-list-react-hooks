import React from "react";
import { showDate } from "../utils";

const Header = () => {
  return (
    <h1>
      Task List
      <p className="date">{showDate()}</p>
    </h1>
  );
};

export default Header;
