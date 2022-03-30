import React from "react";

import style from "./burger.module.css";

const Tomato = (props) => {
  let tomatoClass;

  switch (props.type) {
    case "top":
      tomatoClass = style.tomato_top;
      break;
    case "insert":
      tomatoClass = style.tomato_insert;
      break;
    default:
      tomatoClass = "";
  }
  return <div className={`${style.tomato} ${tomatoClass} `}></div>;
};

export default Tomato;
