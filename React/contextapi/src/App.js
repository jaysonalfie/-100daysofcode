import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { ThemeContext } from "./contexts/Theme"; // Import the context

const App =() =>{
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

  const lightTheme = {
    text: '#222',
    background: '#d8ddf1'
  };

  const darkTheme = {
    text: '#fff',
    background: '#5c5c5c'
  };

  const theme = isDarkTheme ? darkTheme : lightTheme; // Define theme object

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>  {/* Provide theme and toggle function */}
          <Navbar />
          <TodoList />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
