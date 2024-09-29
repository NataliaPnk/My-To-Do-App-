import React from "react";
import s from "../AddPart/index.module.css";
import { useState } from "react";

export default function AddPart({ task, handleAdd }) {
  let [description, setDescription] = useState("");

  function handleSubmit() {
    handleAdd(description);
    setDescription("");
  }

  return (
    <div className={s.titleAddContainer}>
      <h2>
        My To-Do App{" "}
        <span role="img" aria-label="sheep">
          🫡
        </span>
      </h2>

      <div className={s.addPartContainer}>
        <input
          type="text"
          placeholder="What are your tasks for today?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit(description);
          }}
        />
        <button onClick={() => handleSubmit(description)}>ADD</button>
      </div>
    </div>
  );
}
