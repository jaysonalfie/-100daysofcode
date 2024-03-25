import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";

/*
app components-determines location
hemisphereDisplay component= show picture and text */
/* 
determining location using geolocation API*/

/*
timeline of application inside the browser
-JS file loaded up by the broser 
-App components gets created
- we call geolocation service
-App gets rendered to page as HTML
-We get result of geolocation*/

/*
rules of class-based components
-must be a JS class
-must extend React.component
-must define a 'render' method */

// const App=()=>{

//     window.navigator.geolocation.getCurrentPosition(
//         //success callback
//         (position)=> console.log(position),
//         (error)=> console.log(error)

//     );
//     return(
//         <div>
//             latitude:
//         </div>
//     )
// }

/*
react.component provides additional functionality to the class that extends it
(borrowing functionality to put in our app class)
 */

/*
state rules
-Only usable with class components
-State is a JS object that contains data relevant to a component
-Updating state on a component causes the component to rerender
-State must be initialized when a component is created
-State can only be updated using the function 'setState'
 */

class App extends React.Component {
    //function that is called first
    // constructor(props){
    //  //
    //   super(props)
    // }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      //success callback
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return (
        <div>You are in the northern hemisphere</div>
    )
    
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
