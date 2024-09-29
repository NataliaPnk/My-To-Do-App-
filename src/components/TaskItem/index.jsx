import React from "react";
import s from "../TaskItem/index.module.css";

export default function TaskItem({ task, handleDelete, handleDone }) {
  return (
    <div className={s.taskItemContainer}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => handleDone(task.id)}
      />
      <p style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.description}
      </p>

      <button onClick={() => handleDelete(task.id)}>DELETE</button>
    </div>
  );
}
