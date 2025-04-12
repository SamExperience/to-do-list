import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ listItems, setDoneItem, deleteItem }) {
  const [filterList, setFilterList] = useState("");

  const handleFilterList = (e) => {
    setFilterList(e.target.value);
  };

  const filteredList = () => {
    switch (filterList) {
      case "attive":
        return listItems.filter((item) => !item.done);
      case "completate":
        return listItems.filter((item) => item.done);
      default:
        return listItems;
    }
  };
  return (
    <>
      {listItems.length === 0 ? (
        <p className="text-2xl mb-10 font-bold">
          Ancora nessuna attività da fare 😿
        </p>
      ) : (
        <div>
          <div className="flex flex-row mb-10 p-3  justify-between items-end">
            <h2 className="text-4xl  text-indigo-500 text-left font-bold">
              📑 Elenco attività
            </h2>
            <div className="mr-3">
              <select
                className="p-2 font-bold rounded-md"
                value={filterList}
                onChange={handleFilterList}
              >
                <option className="bg-zinc-900" value="">
                  Ordina per
                </option>
                <option className="bg-zinc-900" value="all" autoFocus>
                  Tutte{" "}
                </option>
                <option className="bg-zinc-900" value="attive">
                  Attive
                </option>
                <option className="bg-zinc-900" value="completate">
                  Completate
                </option>
              </select>
            </div>
          </div>

          <div className=" mb-10 ">
            <ul className="grid grid-cols-3 gap-5">
              {filteredList().map((item) => (
                <li key={item.id}>
                  <ToDoItem
                    item={item}
                    setDoneItem={setDoneItem}
                    deleteItem={deleteItem}
                  ></ToDoItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
