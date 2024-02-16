
import React, { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"This is random Todo",
            isCompleted:false,
        }
    ],
    AddTodo:(todo)=>{},
    UpdateTodo:(id,todo)=>{},
    DeleteTodo:(id)=>{},
    ToggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}