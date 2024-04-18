//TodoList.js
import React, { useState , useEffect} from "react";
import AddNewTodo from "./AddNewTodo";


const TodoList = () =>{
    //initilaizing state variable,todos
    // It initializes the todos state with an array of three objects, 
   // each object representing a todo item with text and id properties.
    const [todos, setTodos] =useState([
        {text:'Pay Bills', id:1},
        {text:'Do your homework', id:2},
        {text:'Feed the dog', id:3}
    ]);

    const [count, setCount] = useState(0);

    // This function updates the todos state by adding a new todo object with the provided text and a randomly generated id.
     const addTodo = (text)=>{
        setTodos([
            ...todos,
            {text,id: Math.random()}
        ]);
     }

    //to runth useEffect hook only when data in the todos array changes
    //running some code whenever data changes or when the component renders
    
     useEffect(()=>{
        console.log('use effect',todos)
     }, [todos]);

     useEffect(()=>{
        console.log('use effect',count)
     }, [count]);
    return(
        <div>
            <ul>
            {/* This section iterates through the todos state using the map function */}
               {todos.map((todo)=>{
                    return(
                        <li key={todo.id}>{todo.text}</li>
                    )
               })}
            </ul>
            <AddNewTodo addTodo={addTodo}/>
            <button onClick={()=> setCount(count + 1)}>Score: {count}</button>
        </div>
    )
}

export default TodoList;