import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [listItems, setListItems] = useState([]);

  const setDoneItem = (id) => {
    const newList = listItems.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setListItems(newList);
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <ToDoList listItems={listItems} setDoneItem={setDoneItem}></ToDoList>
        <ToDoForm listItems={listItems} setListItems={setListItems}></ToDoForm>
      </div>
    </>
  );
}

export default App;
