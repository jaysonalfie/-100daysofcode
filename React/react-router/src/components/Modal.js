import React from "react";
import ReactDOM from 'react-dom';
import './modal.css'



const Modal = (props) =>{
    console.log('I am a modell')
    
    //method that allows rendering components children into a different part of the DOM tree
    
    return ReactDOM.createPortal(
        <div className = "modal2">
            <div className="modal-content2">
               <h1>I am a Modal</h1>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}
export default Modal;