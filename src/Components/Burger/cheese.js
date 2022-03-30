import React from "react";

import style from "./burger.module.css";

const Cheese = (props) => {
  let cheeseClass;

  switch (props.type) {
    case "top":
      cheeseClass = style.cheese_top;
      break;
    case "insert":
      cheeseClass = style.cheese_insert;
      break;
    default:
      cheeseClass = "";
  }
  return <div className={`${style.cheese} ${cheeseClass} `}></div>;
};

export default Cheese;
