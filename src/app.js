import React from 'react';
import ListItems from './listItems';

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

function App() {
  return (
    <div>
      <h1>Fruit List</h1>
      <ListItems items={fruits} />
    </div>
  );
}

export default App;
