import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";


const TodoList = ()=> {
    
   const {theme, toggleTheme} = useContext(ThemeContext)

        return(
            <div style={{background:theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
             <p className="item">Plan for family trip</p>
             <p className="item">Go for shopping for dinner</p>
             <p className="item">Go for a walk</p>
             <button className="ui button primary" onClick={toggleTheme}>Change the Theme</button>
            </div>
        )
    
}
export default TodoList;