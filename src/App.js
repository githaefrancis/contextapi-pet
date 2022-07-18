import logo from "./logo.svg";
import "./App.css";
import { TaskForm } from "./components/form";
import TaskList from "./components/TaskList";
import { ListContext } from "./contexts/ListContext";

import {useState} from 'react'
function App() {

  const [tasks,setTasks]=useState([])
  return (
    <div className="App-header">

    <ListContext.Provider value={{tasks , setTasks}}>
  <TaskForm />

  <TaskList />
  </ListContext.Provider>
  </div>
  
  )
}

export default App;
