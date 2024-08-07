import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Task } from '../Todolist.tsx'
import css from './TasksList.module.css'
import { TaskType } from '../App.tsx'

interface PropsType {
  filteredTask: Task[]
  setTasks: Dispatch<SetStateAction<TaskType>>
  todolistId: string
}

export const TasksList = ({ setTasks, filteredTask, todolistId }: PropsType) => {
  const onDeleteTask = (id: string) => {
    setTasks((prevState) => {
      const targetTodolist = prevState[todolistId]
      const filteredTask = targetTodolist.filter((el) => el.id !== id)
      return { ...prevState, ...{ [todolistId]: filteredTask } }
    })
  }
  const onCheckedCheckbox = (el: ChangeEvent<HTMLInputElement>, id: string) => {
    setTasks((prevState) => {
      const tasks = prevState[todolistId]
      const resultTasks = tasks.map((task) =>
        task.id === id ? { ...task, isDone: el.target.checked } : task
      )
      const restObj = {
        [todolistId]: resultTasks,
      }

      return { ...prevState, ...restObj }
    })
  }

  return (
    <>
      <ul>
        {filteredTask.map((el) => (
          <li className={el.isDone ? undefined : css.isDone}>
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
