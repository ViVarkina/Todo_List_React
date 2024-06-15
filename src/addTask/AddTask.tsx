import {v4 as uuisv4} from "uuid";
import {ChangeEvent, useState} from "react";
import {Task} from "../Todolist.tsx";

interface Props{
    tasks: Task[]
    setTasks: (tasks: Task[])=>void
}

export  const AddTask=({tasks, setTasks}:Props)=>{
    const [value, setValue]=useState<string>("")

    const addTask=()=>{
        if (value){
            const newArr = [...tasks]
            newArr.unshift({id:uuisv4(), task:value, isDone: false})
            setTasks(newArr)
            setValue("")
            //для обновления строки
        }
    }
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value.trim())
        // console.log(e.currentTarget.value)
        //принимает данные нажатия
    }

    return <>
        <div>
            <input type={"text"} value={value} onChange={onChange}/>
            <button onClick={addTask}>Добавить</button>
        </div>
    </>
}


