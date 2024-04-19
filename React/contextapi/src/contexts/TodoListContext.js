import React, {createContext, useState, useReducer} from "react";
import { todosReducer } from "../reducers/todosReducer";


export const TodoListContext = createContext();



const TodoListContextProvider = ({children})=>{

    
   const[todos, dispatch]= useReducer(todosReducer,[
    {text: 'Plan the family trip', id:1},
    { text :'Go shoppping for dinner',id:2},
    { text: 'Plan the family trip',id:3},

    ]);


    // //adding a new todo
    // const addTodo = (todo)=>{
    //     setTodos([
    //         ...todos,
    //         {text:todo,id: Math.random()}
    //     ])
    // }

    // //removing todo from todolist
    // const removeTodo =(id)=>{
    // setTodos(todos.filter((todo)=>{
    //  return todo.id !== Number(id);
    // }));
    // }
        return(
       <TodoListContext.Provider value={{todos, dispatch}}>
           {children}
       </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;