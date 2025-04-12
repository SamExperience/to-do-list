import React from "react";
import { useState } from "react";

export default function ToDoForm({ listItems, setListItems }) {
  const [form, setForm] = useState({ id: null, text: "", done: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...form, id: Date.now() };
    if (form.text.trim() === "") {
      alert("Inserisci un testo!");
      return;
    }
    setListItems((prev) => [...prev, item]);
    setForm({ id: null, text: "", done: false });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border rounded-md p-5 max-w-[250px] w-72"
      >
        <div className="flex flex-col gap-3">
          <input
            className="bg-zinc-500 rounded-md p-1 "
            placeholder="Text..."
            name="text"
            value={form.text}
            onChange={handleChange}
            type="text"
          />
          <div>
            <label>Fatta</label>
            <input
              className="ml-3"
              name="done"
              type="checkbox"
              checked={form.done}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Salva</button>
        </div>
      </form>
    </>
  );
}
