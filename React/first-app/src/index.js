import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


//bundlers system in use known as webpack
//naming variable as the name of the library
//a component is a class or function that is to produce html and also handle feedback from the user
//JSX- enables writing function calls in something much easy to read.
//adding custom styling methods is different :values is single quotes, use of curly braces and camelCase writing in compound names
//className is used to avoid collison with class in JS

//referencing variable using curly brackets
//objects are not valid as a React child(object acnnot be shown as a text)
// function getButtonText(){
//     return 'Hi there';
// }
const App = () => {
 const buttonText = {text:'submit'};
    
    return(
        <div>
           <label htmlFor="name" className ="label">enter email</label> 
           <input id="name" type="text"></input>
           <button style={{backgroundColor:'red', color:'white'}}>{buttonText.text}</button>
        </div>
    )
}


//rendering the div element which is in the App component
// ReactDOM.render(
//     <App/>,
//     //passing a div with the id root
//     document.querySelector('#root')
const root = createRoot(document.getElementById('root')); // Assuming your root element has this ID
 root.render(
    <App/>
 )

