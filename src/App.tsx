import './App.css'
import Todolist, {Task} from "./Todolist.tsx";
import {useState} from "react";
import {v4 as uuisv4} from "uuid";

const initialTasks : Task[] = [
    {id:uuisv4(), task:"Покушать", isDone:true},
    {id:uuisv4(), task:"Поспать", isDone:false},
    {id:uuisv4(), task:"Покушать", isDone:false},
    {id:uuisv4(), task:"Попить", isDone:true},
    {id:uuisv4(), task:"Прогулка", isDone:false},
    {id:uuisv4(), task:"Покушать", isDone:false},
]

export type FilterType = "All" | "On" | "Off"
function App() {
    const [tasks, setTasks] =useState<Task[]>(initialTasks)
    const [filterState,setFilterState] = useState<FilterType>("All")

    let filterTask :Task[] = []

    if (filterState === "All"){
        filterTask = tasks
    }
    else if (filterState === "On"){
        filterTask = tasks.filter(el => !el.isDone)
    }
    else if (filterState === "Off"){
        filterTask = tasks.filter(el => el.isDone)
    }


    return (
    <>
        <Todolist title={"Опа че могу"} tasks={filterTask} setFilterState={setFilterState} setTasks={setTasks}/>
    </>
  )
}

export default App
