import AddPart from "../AddPart";
import TaskItem from "../TaskItem";
import s from "../TasksList/index.module.css";

export default function TasksList({
  tasks,
  handleDelete,
  handleDone,
  handleAdd,
}) {
  return (
    <div className={s.tasksListsOuterContainer}>
      <div className={s.tasksListsInnerContainer}>
        <AddPart handleAdd={handleAdd} />

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        ))}
      </div>
    </div>
  );
}
