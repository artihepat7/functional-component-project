import React from "react";
import classes from "./Filter.module.css";

const filter = (props) => {
  return (
    <div className={classes.filter}>
      <label htmlFor="search">Filter by Title</label>
      <input type="text" />
    </div>
  );
};

export default filter;
