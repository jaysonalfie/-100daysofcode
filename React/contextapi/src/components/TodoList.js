import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/Theme";
import { TodoListContext } from "../contexts/TodoListContext";


const TodoList = ()=> {
   const [todo,setTodo]= useState(''); 
   const {theme, toggleTheme} = useContext(ThemeContext)
   const {todos, dispatch} = useContext(TodoListContext);
 
   //function to handle change in the input element
   const handleChange=(e)=>{
    //update todo state with the input value
      setTodo(e.target.value);
   }
   //function to handle form submission
   const handleFormSubmit= (e)=>{
    e.preventDefault();
    //add the nes todo using the addTodo function from the context
    //passes current todo state value as the new todo to be added

    dispatch({type:'ADD_TODO', text: todo});
    // setTodo('');
   }
   
   //function to remove a todo when it is passed to the onClick event
   const handleRemoveTodo = (e)=>{
    const id = e.target.id;
    dispatch({type: 'REMOVE_TODO', id})

   }

        return(
            <div style={{background:theme.background, color: theme.text, textAlign: 'center'}}>
            {/* conditionally rendering content based on the todo list length */}
            {/* looping through todos and render each one */}
            {todos.length ?(
                todos.map((todo)=>{
                    
                    return <p id={todo.id} onClick={handleRemoveTodo}key={todo.id}className="item">{todo.text}</p>
                })
            ): (
                
                <div>You have no todos</div>
            )}

            <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo">Add Todo:</label>
                <input type="text" id='todo'  onChange={handleChange}/>
                <input type="submit" value="Add todo" className="ui button primary" />
            </form>
             {/* <p className="item">Plan for family trip</p>
             <p className="item">Go for shopping for dinner</p>
             <p className="item">Go for a walk</p> */}
             <button className="ui button primary" onClick={toggleTheme}>Change the Theme</button>
            </div>
        )
    
}
export default TodoList;