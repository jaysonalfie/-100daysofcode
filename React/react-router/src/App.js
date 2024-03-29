import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


/*
React router
-First set up the browser router and wrap the entire application in it
-application can now use routes
-Routes in the parent which wraps around the Route- this makes it possible to nest routes
-Element prop is used to render the component
(but still the page refreshes each and every time-sends request to the server)
 -the Link tag helps solve this hence enhancing client server rendering. Only the component is loaded(Link is highly recommende for navigation)
 -NavLink is able to add the active class that is provides importance when it comes to styling(show the active link)

 -Programmatically redirect a user to another URL 
 props cannot be passed down automatically hence the need to use the useNavigate hook
 -withRouter that was a higher order component that wrapped the component and provide it with history, location
 currently what is in use is hook such as useNavigate is use to achieve what higher order components were meant to. React router v6
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
