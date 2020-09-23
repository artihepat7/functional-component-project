import React, { useContext } from "react";
import Auth from "../src/components/Auth";
import { AuthContext } from "./context/auth-context";

import "./App.css";
import Ingredients from "./components/Ingredients/Ingredients";

const App = (props) => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }
  return content;
};

export default App;
