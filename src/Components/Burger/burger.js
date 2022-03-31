import React from "react";

import Bun from "./Bun";
import Patty from "./Patty";
import Lettuce from "./Lettuce";
import Cheese from "./Cheese";
import Tomato from "./Tomato";

const Burger = () => {
  const ingredients = [
    "patty",
    "lettuce",
    "bun",
    "cheese",
    "tomato",
    "bun",
    "cheese",
    "tomato",
  ];

  return (
    <>
      <Bun type="top" />
      {ingredients.map((item, index) => {
        switch (item) {
          case "patty":
            return <Patty key={index} />;
          case "lettuce":
            return <Lettuce key={index} />;
          case "bun":
            return <Bun key={index} />;
          case "cheese":
            return <Cheese key={index} />;
          case "tomato":
            return <Tomato key={index} />;
          default:
            return null;
        }
      })}
      <Bun />
    </>
  );
};

export default Burger;
