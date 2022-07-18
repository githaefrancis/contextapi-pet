import React from "react";
import { useContext,useState } from "react";
import { ListContext } from "../contexts/ListContext";
export const TaskForm=()=>{
    const {tasks,setTasks}=useContext(ListContext)
    const [input,setInput]=useState("")
    const handleAdd=(e)=>{
        e.preventDefault()
        setTasks([...tasks,input])
        setInput(" ")
    }
    return (

        
    
        <div>

            <form onSubmit={handleAdd}>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}