import './App.css'
import Todolist, {Task} from "./Todolist.tsx";

const tasks : Task[] = [
    {id:1, task:"Покушать", isDone:true},
    {id:2, task:"Поспать", isDone:false},
    {id:3, task:"Покушать", isDone:false},
    {id:4, task:"Попить", isDone:true},
    {id:5, task:"Прогулка", isDone:false},
]

type FilterType = "All" | "On" | "Off"
function App() {
    const filterState = "All"

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
        <Todolist title={"Опа че могу"} tasks={filterTask}/>
    </>
  )
}

export default App
