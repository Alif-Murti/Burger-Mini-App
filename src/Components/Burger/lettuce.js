import React from "react";

import style from "./burger.module.css";

const Lettuce = (props) => {
  let lettuceClass;

  switch (props.type) {
    case "top":
      lettuceClass = style.lettuce_top;
      break;
    case "insert":
      lettuceClass = style.lettuce_insert;
      break;
    default:
      lettuceClass = "";
  }
  return <div className={`${style.lettuce} ${lettuceClass} `}></div>;
};

export default Lettuce;
