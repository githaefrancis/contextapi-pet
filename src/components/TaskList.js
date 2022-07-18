import React from "react";
import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
const TaskList=()=>{
    const {tasks}=useContext(ListContext)
    console.log(tasks)
    return (
        <div>
            
        <ul>
            {tasks.map(task=><li key={tasks.indexOf(task)}>{task}</li>)}
        </ul>

        </div>
    )
}

export default TaskList

