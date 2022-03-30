import React from "react";

import style from "./burger.module.css";

const Patty = (props) => {
  let pattyClass;

  switch (props.type) {
    case "top":
      pattyClass = style.patty_top;
      break;
    case "insert":
      pattyClass = style.patty_insert;
      break;
    default:
      pattyClass = "";
  }

  return <div className={`${style.patty} ${pattyClass} `}></div>;
};

export default Patty;
