import "./App.css";
import Todolist, { Task } from "./Todolist.tsx";
// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface TodolistType{
  id: string,
  title:string,

}

const todolistId1 = uuidv4()
const todolistId2 = uuidv4()

const initialTodolist:TodolistType[] = [
  { id: todolistId1, title: "Todo list 1" },
  { id: todolistId2, title: "Todo list 2" }
];

export interface TaskType{
  [key:string]:Task[]

}

const initialTasks:TaskType = {
  [todolistId1]: [
    { id: uuidv4(), task: "Покушать", isDone: true , todolistId:todolistId1},
    { id: uuidv4(), task: "Поспать", isDone: false, todolistId:todolistId1 },
    { id: uuidv4(), task: "Покушать", isDone: false, todolistId:todolistId1 }
  ],
  [todolistId2]: [
    { id: uuidv4(), task: "Попить", isDone: true, todolistId:todolistId2 },
    { id: uuidv4(), task: "Прогулка", isDone: false, todolistId:todolistId2 },
    { id: uuidv4(), task: "Покушать", isDone: false, todolistId:todolistId2 }
  ]
};


function App() {
  const[todoList, setTodolist]=useState<TodolistType[]>(initialTodolist)
  const[tasks, setTasks]=useState<TaskType>(initialTasks)
  return <>
    {todoList.map((todolist) => {
      return (
        <Todolist
          key={todolist.id}
          title={todolist.title}
          tasks={tasks[todolist.id]}
          setTasks={setTasks}
          todolistId={todolist.id}
        />);
    })}
  </>;
}

export default App;
