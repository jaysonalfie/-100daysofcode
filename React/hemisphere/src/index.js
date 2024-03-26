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
-constructor function gets called
-'this.state' property assigned the state object
- we call geolocation service
-React calls the component render method
-App gets rendered to page as HTML
-We get result of geolocation
-we update our state object with a 'this.setState'
-React calls 'render'method a second time
-Render method returns some JSX
-React takes that JSX and updates content on the screen
*/

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
-State can only be updated using the function 'setState' as opposed to doing a direct assignment
 */

/*

lifecycle methods
-constructor - state initialization - initial data loading
-render-just return JSX
-componentDidMount - good place to data loading
-componentDidUpdate- good place to load more data loading when state/props change
-componentWillUnmount- good place to clean up
*/

class App extends React.Component {
    //function that is called first any time an instance is created
    // eslint-disable-next-line no-useless-constructor
    // constructor(props){
    //   //super is a reference to the parents constructor function
    //    super(props)

    //    this.state = { latitude:null , errorMessage: ''}
       
       
    // }

    state = {latitude:null, errorMessage:''}

    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        //success callback
        (position) => {
          this.setState({latitude:position.coords.latitude})
        },
        (error) => {
          this.setState({errorMessage: error.message})
        }
      );
    }

    //render method is required for every react component we create

  render() {
    //conditional rendering 
    if(this.state.errorMessage && !this.state.latitude){
      return <div>{this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.latitude ){
      return <div>{this.state.latitude}</div>
    }
    else{
      return <div>Loading...</div>
    }
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
