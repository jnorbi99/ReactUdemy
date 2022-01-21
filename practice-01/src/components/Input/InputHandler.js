import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./InputHandler.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const InputHandler = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const submitClick = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)!",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)!",
      });
      return;
    }
    props.dataHandler(username, age);
    usernameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitClick}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default InputHandler;
