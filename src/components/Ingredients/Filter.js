import React, { useEffect, useState, useRef } from "react";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const [filtervalue, setfilterValue] = useState("");
  const { onLoadIngredients } = props;
  const inputref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filtervalue === inputref.current.value) {
        const query =
          filtervalue.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filtervalue}"`;
        fetch(
          "https://functional-component-project.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const fetchedIngredients = [];
            for (let key in responseData) {
              fetchedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }

            onLoadIngredients(fetchedIngredients);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [filtervalue, onLoadIngredients]);

  return (
    <div className={classes.filter}>
      <label htmlFor="search">Filter by Title</label>
      <input
        ref={inputref}
        type="text"
        value={filtervalue}
        onChange={(event) => setfilterValue(event.target.value)}
      />
    </div>
  );
};

export default Filter;
