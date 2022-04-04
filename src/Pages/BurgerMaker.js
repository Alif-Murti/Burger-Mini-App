import React, { useState } from "react";
import Burger from "../Components/Burger/Burger";
import Controller from "../Components/Burger/Controller";

import style from "./burgerMaker.module.css";

const BurgerMaker = () => {
  const [ingridients, setIngridients] = useState([]);

  const addIngridientsHandler = (ingridients) => {
    setIngridients((prevState) => {
      const newState = [ingridients, ...prevState];
      return newState;
    });
  };

  const removeIngridientsHandeler = (index) => {
    setIngridients((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const moveUpIngridientsHandler = (index) => {
    setIngridients((prevState) => {
      const newState = [...prevState];
      const temp = newState[index - 1];
      newState[index - 1] = newState[index];
      newState[index] = temp;
      return newState;
    });
  };

  const moveDownIngridientsHandler = (index) => {
    setIngridients((prevState) => {
      const newState = [...prevState];
      const temp = newState[index + 1];
      newState[index + 1] = newState[index];
      newState[index] = temp;
      return newState;
    });
  };

  return (
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
        <Controller
          ingridients={ingridients}
          addIngridientsHandler={addIngridientsHandler}
          removeIngridientsHandeler={removeIngridientsHandeler}
          moveDownIngridientsHandler={moveDownIngridientsHandler}
          moveUpIngridientsHandler={moveUpIngridientsHandler}
        />
      </div>
      <div className={style.burger_display}>
        <Burger ingridients={ingridients} />
      </div>
    </div>
  );
};

export default BurgerMaker;
