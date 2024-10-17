import { useState } from "react"

function Add() {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const addTask = ()=>{
    if(!title || !desc){
        console.log("No value");
        return ;

    }
       const task = {
            title,
            desc,
       }
        let presentTask =  localStorage.getItem('task');
        const defaultTask = {
            task : [],
        }
        if(!presentTask){
           
            localStorage.setItem('task',JSON.stringify(defaultTask));
        }
        presentTask = JSON.parse(presentTask!).task
        presentTask.push(task);
        defaultTask.task = presentTask; 
        localStorage.setItem('task',JSON.stringify(defaultTask));
        console.log(localStorage.getItem('task'));
       

      
  }
  return (
    <div className="add_todo">
        <div className="form">
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Add task"/>
            <input value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" placeholder="Add task"/>

            <button onClick={addTask}>Add</button>
        </div>
    </div>
  )
}

export default Add