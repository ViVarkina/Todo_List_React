import { ChangeEvent } from 'react'
import { Task } from '../Todolist.tsx'
import css from './TasksList.module.css'

interface Props {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  filteredTask: Task[]
}

export const TasksList = ({ tasks, setTasks, filteredTask }: Props) => {
  const onDeleteTask = (id: string) => {
    const copyArr = [...tasks]
    const filterTasks = copyArr.filter((el) => el.id !== id)
    setTasks(filterTasks)
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
