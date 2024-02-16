import React from "react";
import { useState } from "react";
import { useTodo } from "../Context";

function TodoItem({ todo }) {
    const [todoitem, settodo] = useState(todo.todo)
    const [isedit,Setedit]=useState(false)

    
    const {ToggleComplete,UpdateTodo,DeleteTodo}=useTodo()
    
    const toggleCompleted=()=>{
        ToggleComplete(todo.id)
    }
    
    const editTodo=()=>{
        UpdateTodo(todo.id,{...todo,todo:todoitem})
        Setedit((prev) => !prev);
    }
   

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isedit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isCompleted ? "line-through" : ""}`}
                value={todoitem}
                onChange={(e) => settodo(e.target.value)}
                readOnly={!isedit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    
                    if (todo.isCompleted) return;
                    
                    
                    if (isedit) {
                        editTodo();
                    } else Setedit((prev) => !prev);
                    
                    { console.log(isedit)}
                }}
                disabled={todo.isCompleted}
            >
                { isedit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => DeleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
