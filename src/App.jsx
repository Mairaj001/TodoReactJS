
import React, { useEffect, useState } from "react"
import { TodoProvider } from "./Context"

import Input from "./Components/Form.jsx";
import TodoItem from "./Components/TodoItem.jsx";


function App() {
  
    const [todos,setTodo]=useState([]);
    
    const AddTodo=(todo)=>{
       setTodo((prevItem)=>[{id:Date.now(),...todo},...prevItem])
    }

    const UpdateTodo=(id,todo)=>{
      setTodo((prevItem)=>prevItem.map((item)=>(item.id===id?todo:item)))
    }

    const DeleteTodo=(id)=>{
      setTodo((prevItem)=>prevItem.filter((item)=>item.id!==id))
    }

    const ToggleComplete=(id)=>{
      setTodo((prevItem)=>prevItem.map((item)=>item.id===id? {...item,isCompleted:!item.isCompleted}: item))
    }
    
    useEffect(()=>{
      const Todos=JSON.parse(localStorage.getItem("key"));
      if(Todos && Todos.length>0) setTodo(Todos)
    },[])
    
    useEffect(()=>{
      localStorage.setItem("key",JSON.stringify(todos))
    },[todos])



  return (
   <>
      <TodoProvider value={{todos,AddTodo,UpdateTodo,DeleteTodo,ToggleComplete}}>
             <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <Input/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                             todos.map((todo)=>(
                              <div key={todo.id} className="w-full">
                                 <TodoItem todo={todo}/>
                              </div>
                             ))
                        }
                    </div>
                </div>
            </div>
       </TodoProvider>
   </>
  )
}

export default App
