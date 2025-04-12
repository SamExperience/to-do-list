import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ listItems }) {
  return (
    <>
      {listItems.length === 0 ? (
        <p className="text-2xl mb-10 font-bold">
          Ancora nessuna attività da fare 😿
        </p>
      ) : (
        <div>
          <h2 className="text-4xl mb-10 text-indigo-500 text-left font-bold">
            📑 Elenco attività
          </h2>
          <div className=" mb-10 ">
            <ul className="grid grid-cols-3 gap-5">
              {listItems.map((item) => (
                <li key={item.id}>
                  <ToDoItem item={item}></ToDoItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
