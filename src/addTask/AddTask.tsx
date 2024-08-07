import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Task } from '../Todolist.tsx'
import { TaskType } from '../App.tsx'

interface Props {
  setTasks: Dispatch<SetStateAction<TaskType>>
  todolistId: string
}

export const AddTask = ({ setTasks, todolistId }: Props) => {
  const [value, setValue] = useState<string>('')

  const addTask = () => {
    if (value) {
      setTasks((prevState) => {
        const newTask: Task = { id: uuidv4(), task: value, isDone: false, todolistId }
        const tasks = prevState[todolistId]
        const newTasks = [newTask, ...tasks]

        return { ...prevState, ...{ [todolistId]: newTasks } }
      })
      setValue('')
    }
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value.trim())
  }

  return (
    <>
      <div>
        <input type={'text'} value={value} onChange={onChange} />
        <button onClick={addTask}>Добавить</button>
      </div>
    </>
  )
}
