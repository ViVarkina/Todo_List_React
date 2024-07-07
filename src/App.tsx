import './App.css'
import Todolist, { Task } from './Todolist.tsx'
import { useState } from 'react'
import { v4 as uuisv4 } from 'uuid'

const initialTasks: Task[] = [
  { id: uuisv4(), task: 'Покушать', isDone: true },
  { id: uuisv4(), task: 'Поспать', isDone: false },
  { id: uuisv4(), task: 'Покушать', isDone: false },
  { id: uuisv4(), task: 'Попить', isDone: true },
  { id: uuisv4(), task: 'Прогулка', isDone: false },
  { id: uuisv4(), task: 'Покушать', isDone: false },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  return (
    <>
      <Todolist title={'Опа че могу'} tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
