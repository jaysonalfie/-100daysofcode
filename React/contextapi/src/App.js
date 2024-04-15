import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./contexts/Theme";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
