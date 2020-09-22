import React, { useState, useEffect, useCallback } from "react";
import IngredientsForm from "./IngredientsForm";
import Filter from "./Filter";
import IngredientsList from "./IngredientsList";
import ErrorModal from "../../UI/ErrorModal";

const Ingredients = () => {
  const [userIngredients, setuserIngredients] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  // useEffect(() => {
  //   fetch(
  //     "https://functional-component-project.firebaseio.com/ingredients.json"
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {s
  //       const fetchedIngredients = [];
  //       for (let key in responseData) {
  //         fetchedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }

  //       setuserIngredients(fetchedIngredients);
  //     });
  // }, []);

  useEffect(() => {
    console.log("rendering");
  });

  const onLoadIngredientsHandler = useCallback((fetchedIngredients) => {
    setuserIngredients(fetchedIngredients);
  }, []);

  const AddIngredientsHandler = (ingredients) => {
    setisLoading(true);
    fetch(
      "https://functional-component-project.firebaseio.com/ingredients.json",
      {
        method: "post",
        body: JSON.stringify(ingredients),
        headers: { "content-type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setisLoading(false);
        setuserIngredients((prevIng) => [
          ...prevIng,
          { id: responseData.name, ...ingredients },
        ]);
      })
      .catch((error) => {
        setisLoading(false);
        setError("Something went wrong");
      });
  };

  const onRemoveHandler = (id) => {
    setisLoading(true);
    fetch(
      `https://functional-component-project.firebaseio.com/ingredients/${id}.json`,
      {
        method: "Delete",
      }
    )
      .then((response) => {
        setisLoading(false);
        setuserIngredients((prevIng) =>
          prevIng.filter((ings) => ings.id !== id)
        );
      })
      .catch((error) => {
        setisLoading(false);
        setError("something went wrong");
      });
  };

  const clearError = () => {
    setError(false);
  };

  return (
    <div>
      {error ? <ErrorModal onClose={clearError}>{error}</ErrorModal> : null}
      <IngredientsForm
        onAddIngredients={AddIngredientsHandler}
        isLoading={isLoading}
      />
      <Filter onLoadIngredients={onLoadIngredientsHandler} />
      <IngredientsList
        ingredients={userIngredients}
        onRemoveIng={onRemoveHandler}
      />
    </div>
  );
};

export default Ingredients;
