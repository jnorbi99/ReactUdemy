import React, { useState, Fragment } from "react";

import "./index.css";
import InputHandler from "./components/Input/InputHandler";
import ListedItems from "./components/List/ListedItems";

const App = () => {
  const [datas, setDatas] = useState([]);

  const dataHandlerFunc = (uname, uage) => {
    setDatas((prevState) => {
      return [{ id: Math.random().toString(), username: uname, age: uage }, ...prevState];
    });
  };

  return (
    <Fragment>
      <InputHandler dataHandler={dataHandlerFunc} />
      <ListedItems data={datas} />
    </Fragment>
  );
};

export default App;
