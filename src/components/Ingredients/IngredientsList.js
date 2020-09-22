import React from "react";
import classes from "./IngredientsList.module.css";

const ingredientsList = (props) => {
  return (
    <div className={classes.ingredientsList}>
      <h2>Loaded Ingerdients</h2>
      {props.ingredients.map((ig) => (
        <li key={ig.id} onClick={props.onRemoveIng.bind(this, ig.id)}>
          <span>{ig.title}</span>
          <span>{ig.amount}</span>
        </li>
      ))}
    </div>
  );
};

export default ingredientsList;
