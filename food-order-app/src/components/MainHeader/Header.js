import React, { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import image from "../data/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img alt="food" src={image} />
      </div>
    </Fragment>
  );
};

export default Header;
