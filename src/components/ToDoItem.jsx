import React from "react";
export default function ToDoItem({ item }) {
  return (
    <>
      <div className="flex flex-col overflow-hidden gap-2 bg-zinc-950 justify-between items-start p-2 border border-zinc-700 shadow rounded-lg min-h-[50px] min-w-[100px] h-20 w-50  ">
        <p className="text-left text-xl font-bold overflow-hidden hover:overflow-auto  ">
          {item.text}
        </p>
        <div className="flex">
          {<label className="font-semibold ">Fatta</label>}
          <input
            className="ml-3"
            name="done"
            checked={item.done}
            type="checkbox"
          />
        </div>
      </div>
    </>
  );
}
