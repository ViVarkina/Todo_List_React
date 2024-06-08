import './App.css'
import {FilterType} from "./App.tsx";
// import {useState} from "react";
import {v4 as uuisv4} from "uuid";

interface Props{
    title: string
    tasks: Task[]
    setFilterState: (filterState: FilterType)=>void
    setTasks: (tasks: Task[])=>void
}
export interface Task{
    id: string
    task: string
    isDone: boolean
}

function App({title,tasks, setFilterState, setTasks}: Props) {

    const addTask=()=>{
        const newArr = [...tasks]
        newArr.push({id:uuisv4(), task:"пупипу", isDone: false})
        setTasks(newArr)
        console.log(tasks)
    }
    return (
        <>
            <div>{title}</div>
            <button onClick={addTask}>Добавить</button>
            <ul>
                {tasks.map((el)=>(
                    <li>
                        <input type={"checkbox"} checked={el.isDone}/>{el.task}
                    </li>
                ))}

            </ul>
            <button onClick={()=>setFilterState("All")}>Все</button>
            <button onClick={()=>setFilterState("Off")}>Завершенные</button>
            <button onClick={()=>setFilterState("On")}>Незавершенные</button>
        </>
    )
}

export default App
