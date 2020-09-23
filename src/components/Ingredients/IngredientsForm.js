import React, { useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";

import "./ingredientsForm.module.css";

const IngredientsForm = (props) => {
  const [input, setInputState] = useState("");
  const [amount, setAmountState] = useState("");
  //console.log(input, amount);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredients({ title: input, amount: amount });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          value={input}
          onChange={(event) => setInputState(event.target.value)}
        />
        {props.isLoading ? <LoadingIndicator /> : null}
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(event) => setAmountState(event.target.value)}
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
};

export default IngredientsForm;
