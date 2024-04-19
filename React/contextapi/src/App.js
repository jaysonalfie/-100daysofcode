import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { ThemeContext } from "./contexts/Theme"; // Import the context
import AuthcontextProvider from "./contexts/AuthContext";
import TodoListContextProvider from "./contexts/TodoListContext";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Theme state

  const lightTheme = {
    text: "#222",
    background: "#d8ddf1",
  };

  const darkTheme = {
    text: "#fff",
    background: "#5c5c5c",
  };
  //appling darkTheme is isDarkTheme is true and lightTheme if it is false
  const theme = isDarkTheme ? darkTheme : lightTheme; // Define theme object

  //flips the current value of  isDarkTheme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthcontextProvider>
          <TodoListContextProvider>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              {" "}
              {/* Provide theme and toggle function */}
              <Navbar />
              <TodoList />
            </ThemeContext.Provider>
          </TodoListContextProvider>
        </AuthcontextProvider>
      </div>
    </div>
  );
};

export default App;
