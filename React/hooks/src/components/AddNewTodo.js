import React,{useState} from "react";


const AddNewTodo = ({addTodo})=>{
    const [todos, setTodos ]=useState('');

    const handleSubmit = (e)=>{

      e.preventDefault();
      // Calls the prop function addTodo and passes the current value of the local state todos (which should be the user-entered text).

      addTodo(todos);
      // Resets the local state todos to an empty string after submission.
      setTodos('');
    }
   return(
<form onSubmit={handleSubmit}>
     <label htmlFor='todo'>To do</label>
     {/* updates local state with user input */}
    <input type='text' value={todos} id='todo' onChange={(e)=>setTodos(e.target.value)}/>
    <input type ='submit'/>
</form>

   )
}

export default AddNewTodo;