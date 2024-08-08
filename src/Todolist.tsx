import './App.css'
import { FilterBlock } from './filterBlock/FilterBlock.tsx'
import { TasksList } from './tasksList/TasksList.tsx'
import { AddTask } from './addTask/AddTask.tsx'
import { Dispatch, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from "./App.tsx";
import { ChangeTitle } from './changeTitle/ChangeTitle.tsx'

interface PropsType {
  title: string
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<TaskType>>
  todolistId: string
  setTodoLists:  Dispatch<SetStateAction<TodolistType[]>>
}

export interface Task {
  id: string
  task: string
  isDone: boolean
  todolistId: string
}

export type FilterType = 'All' | 'On' | 'Off'

function TodoList({ title, tasks, setTasks, todolistId , setTodoLists}: PropsType) {
  const [filterState, setFilterState] = useState<FilterType>('All')

  let filterTask: Task[] = []

  if (filterState === 'All') {
    filterTask = tasks
  } else if (filterState === 'On') {
    filterTask = tasks.filter((el) => !el.isDone)
  } else if (filterState === 'Off') {
    filterTask = tasks.filter((el) => el.isDone)
  }

  const onSaveTitleTdl=(value:string, onSuccesCallback:()=>void)=>{
    setTodoLists(prevState => {
      const newArr = prevState.map((el)=>el.id === todolistId?{...el,title:value}:el)
      return newArr
    })
    onSuccesCallback()
  }
  return (
    <>
      <ChangeTitle title={title} saveTitle={onSaveTitleTdl}/>
      <AddTask setTasks={setTasks} todolistId={todolistId} />
      <TasksList setTasks={setTasks} filteredTask={filterTask} todolistId={todolistId} />
      <FilterBlock setFilterState={setFilterState} />
    </>
  )
}

export default TodoList
