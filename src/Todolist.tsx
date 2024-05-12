import './App.css'
import {FilterType} from "./App.tsx";

interface Props{
    title: string
    tasks: Task[]
    setFilterState: (filterState: FilterType)=>void
    filterState: FilterType
}
export interface Task{
    id: number
    task: string
    isDone: boolean
}

function App({title,tasks, setFilterState, filterState}: Props) {

    return (
        <>
            <div>{title}</div>
            <ul>
                {tasks.map((el)=>(
                    <li>
                        <input type={"checkbox"} checked={el.isDone}/>{el.task}
                    </li>
                ))}

            </ul>
            <button onClick={()=>setFilterState={"All"}}>Все</button>
            <button onClick={()=>setFilterState={"On"}}>Завершенные</button>
            <button onClick={()=>setFilterState={"Off"}}>Незавшенные</button>
        </>
    )
}

export default App
