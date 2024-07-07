import './App.css'
import { FilterBlock } from './filterBlock/FilterBlock.tsx'
import { TasksList } from './tasksList/TasksList.tsx'
import { AddTask } from './addTask/AddTask.tsx'
import { useState } from 'react'

interface Props {
  title: string
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export interface Task {
  id: string
  task: string
  isDone: boolean
}

function TodoList({ title, tasks, setTasks }: Props) {
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
      <TasksList tasks={tasks} setTasks={setTasks} filteredTask={filterTask} />
      <FilterBlock setFilterState={setFilterState} />
    </>
  )
}

export default TodoList
