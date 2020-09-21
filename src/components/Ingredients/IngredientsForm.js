import React, { useState } from "react";

import classes from "./ingredientsForm.module.css";

const ingredientsForm = React.memo((props) => {
  const [inputState, setState] = useState({ title: "", amount: "" });
  console.log(inputState);
  return (
    <div>
      <form>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          value={inputState.title}
          onChange={(event) =>
            setState({
              title: event.target.value,
              amount: inputState.amount,
            })
          }
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          value={inputState.amount}
          onChange={(event) =>
            setState({
              amount: event.target.value,
              title: inputState.title,
            })
          }
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
});

export default ingredientsForm;
