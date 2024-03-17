import React, { useLayoutEffect } from "react";

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

function ListItems(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  

export default ListItems