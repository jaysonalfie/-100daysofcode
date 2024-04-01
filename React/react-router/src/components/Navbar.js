import React, {useEffect} from "react";
import {Link, NavLink ,useNavigate} from 'react-router-dom';

const Navbar = ()=>{
     
    //  const navigate = useNavigate();


    //  //redirecting to /about after 2 seconds
    //  useEffect(()=>{
    //     const timer =setTimeout(()=>{
    //         navigate('/about');
    //     }, 2000)

    //     return() => clearTimeout(timer);
    //  },[navigate])

     
     
     return(
        <nav className="ui raised very padded segment">
          <a className='ui teal inverted segment '>Gloria</a>
          <div className="ui right floated header">
             <button className="ui button">
                <NavLink to="/">Home</NavLink>
             </button>
             <button className="ui button">
                <Link to="/about">About</Link>
             </button>
             <button className="ui button">
                <NavLink to="/contact">Contact</NavLink>
             </button>
          </div>
        </nav>
    )
}

export default Navbar;