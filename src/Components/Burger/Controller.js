import React from "react";
import AddButton from "./AddButton";
import MapItem from "./MapItem.js";
import style from "./controller.module.css";

const Controller = (props) => {
  return (
    <>
      <div className={style.ingridients_selector}>
        <h5>Add Ingridients</h5>
        <div>
          <AddButton
            label="Patty"
            clickHandler={() => props.addIngridientsHandler("patty")}
          />
          <AddButton
            label="Lettuce"
            clickHandler={() => props.addIngridientsHandler("lettuce")}
          />
          <AddButton
            label="Tomato"
            clickHandler={() => props.addIngridientsHandler("tomato")}
          />
          <AddButton
            label="Cheese"
            clickHandler={() => props.addIngridientsHandler("cheese")}
          />
          <AddButton
            label="Bun"
            clickHandler={() => props.addIngridientsHandler("bun")}
          />
        </div>
      </div>
      <div className={style.ingridients_map}>
        {props.ingridients.map((item, index) => {
          return (
            <>
              <MapItem
                label={item}
                key={index}
                removeHandler={() => props.removeIngridientsHandler(index)}
                upHandler={() => props.moveUpIngridientsHandler(index)}
                downHandler={() => props.moveDownIngridientsHandler(index)}
                firstItem={index === 0}
                lastItem={index === props.ingridients.length - 1}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Controller;
