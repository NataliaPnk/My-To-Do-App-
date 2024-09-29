import './App.css';
import AddPart from './components/AddPart';
import TasksList from './components/TasksList';


import React, { useState } from 'react'
import { data } from './data/data';

function App() {

  let [ tasks, setTasks ] = useState(data)
  let [ description, setDescription ] = useState('')

 
  function handleAdd(description) {
    const newTask = {
      id: Date.now(),
      description,
      done: false,
    };
    setTasks([...tasks, newTask]);
  }


  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }


  function handleDone(id) {
      setTasks(
        tasks.map((task) => {
          if(task.id === id) {
            return {...task, done: !task.done}
          } else {
            return task
          }
        })
      )
  }

  return (
    <div>
      <TasksList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
