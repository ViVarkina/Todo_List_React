import './App.css'

interface Props{
    title: string
    tasks: Task[]
}
export interface Task{
    id: number
    task: string
    isDone: boolean
}


function App({title,tasks}: Props) {

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
            <button>Все</button>
            <button>Завершенные</button>
            <button>Незавшенные</button>
        </>
    )
}

export default App
