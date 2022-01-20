import React from "react";

import Card from "../UI/Card";
import styles from "./ListedItems.module.css";

const ListedItems = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.data.map((item) => (
          <li key={item.id}>
            {item.username} ({item.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListedItems;
