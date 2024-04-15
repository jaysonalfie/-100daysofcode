import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <h2 className="ui centered header">
                    Oak Academy
                </h2>
                <div className="ui three buttons">
                  <button className="ui button">Overview</button>
                  <button className="ui button">Contact</button>
                  <button className="ui button">Support</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;