import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Task } from '../Todolist.tsx'
import css from './TasksList.module.css'
import { TaskType } from "../App.tsx";

interface PropsType {
  tasks: Task[]
  filteredTask:Task[]
  setTasks: Dispatch<SetStateAction<TaskType>>
  todolistId:string
}

export const TasksList = ({ tasks, setTasks, filteredTask , todolistId}: PropsType) => {
  const onDeleteTask = (id: string) => {
      setTasks((prevState) => {
        const targetTodolist = prevState[todolistId]
        const filteredTask = targetTodolist.filter((el) => el.id !== id)
        return { ...prevState, ...{[todolistId]: filteredTask }}
      })
  }
  const onCheckedCheckbox = (el: ChangeEvent<HTMLInputElement>, id: string) => {
    const newArr = [...tasks]
    const changeTask = newArr.find((task) => task.id === id)
    if (changeTask) {
      changeTask.isDone = el.target.checked
      const newTasks = newArr.map((task) => (task.id == id ? changeTask : task))
      setTasks(newTasks)
    }
  }

  return (
    <>
      <ul>
        {filteredTask.map((el) => (
          <li className={el.isDone ? true : css.isDone}>
            <input
              type={'checkbox'}
              checked={el.isDone}
              onChange={(event) => onCheckedCheckbox(event, el.id)}
            />
            {el.task}
            <button>изменить</button>
            <button onClick={() => onDeleteTask(el.id)}>х</button>
          </li>
        ))}
      </ul>
    </>
  )
}
