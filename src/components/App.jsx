import React, { useState } from "react";

function App() {
  const [item, setInputItem] = useState("");
  const [items, setTodoItems] = useState([]);

  function addItem() {
    // console.log("Add was clicked");
    setTodoItems((prevItems) => {
      return [...prevItems, item];
    });
    setInputItem("");
  }
  function handleChange(event) {
    const newValue = event.target.value;
    // console.log(newValue);
    setInputItem(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
