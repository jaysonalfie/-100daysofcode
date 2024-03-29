import React ,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Contact = () =>{


     //creating the navigation function for programmatic redirection
    const navigate = useNavigate();
     //creating a callack function that creates a 2 second delay before it is called and perform the redirection
     useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/about')
        }, 2000);
        
        //clears the timer
        return()=> clearTimeout(timer);
     }, [navigate]);
    return(
        <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
        <h3 className="ui header">Contact</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )


}

export default Contact;