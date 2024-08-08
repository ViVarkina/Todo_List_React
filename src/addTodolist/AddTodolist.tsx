import { v4 as uuidv4 } from 'uuid'
import { Dispatch, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from '../App.tsx'

interface PropsType {
  setTodolist: Dispatch<SetStateAction<TodolistType[]>>
  setTasks: Dispatch<SetStateAction<TaskType>>
}

export const AddTodolist = ({ setTodolist, setTasks }: PropsType) => {
  const [value, setValue] = useState<string>('')
  const onClickAddTodolist = () => {
    const todolistId = uuidv4()
    const newTodolist: TodolistType = {
      id: todolistId,
      title: value,
    }
    const newTask = {
      [todolistId]: [],
    }
    setTodolist((prevState) => [newTodolist, ...prevState])
    setTasks((prevState) => {
      return { ...prevState, ...newTask }
    })
    setValue('')
  }
  return (
    <div>
      <input
        placeholder={'Добавить'}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button onClick={onClickAddTodolist}>+</button>
    </div>
  )
}
