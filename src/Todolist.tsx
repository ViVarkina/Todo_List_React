import './App.css'
import { FilterBlock } from './filterBlock/FilterBlock.tsx'
import { TasksList } from './tasksList/TasksList.tsx'
import { AddTask } from './addTask/AddTask.tsx'
import { Dispatch, SetStateAction, useState } from "react";
import { TaskType } from "./App.tsx";

interface PropsType {
  title: string
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<TaskType>>
  todolistId:string
}

export interface Task {
  id: string
  task: string
  isDone: boolean
  todolistId:string
}

function TodoList({ title, tasks, setTasks, todolistId }: PropsType) {
  type FilterType = 'All' | 'On' | 'Off'
  const [filterState, setFilterState] = useState<FilterType>('All')

  let filterTask: Task[] = []

  if (filterState === 'All') {
    filterTask = tasks
  } else if (filterState === 'On') {
    filterTask = tasks.filter((el) => !el.isDone)
  } else if (filterState === 'Off') {
    filterTask = tasks.filter((el) => el.isDone)
  }

  return (
    <>
      <div>{title}</div>
      <AddTask tasks={filterTask} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} filteredTask={filterTask} todolistId={todolistId
      }/>
      <FilterBlock setFilterState={setFilterState} />
    </>
  )
}

export default TodoList
