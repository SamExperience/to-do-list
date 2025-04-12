import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToDoForm from "./components/ToDoForm";
function App() {
  const [listItems, setListItems] = useState([]);
  const isLogged = false;
  return (
    <>
      <ToDoForm listItems={listItems} setListItems={setListItems}></ToDoForm>
    </>
  );
}

export default App;
