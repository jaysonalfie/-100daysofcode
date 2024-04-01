import React from "react";
import { useParams } from "react-router-dom";


/*
useParams Hook is used instead or this.props.match.params
and with the use of the hook useParams, it only works with functional components as opposed to the higher order function that works with the class-based components 
allows you to access route parameters defined in your routing configuration*/

const Card = ()=> {

  //extracts a specific parameter from the URL and assigns it to a variable named 'user'
    const {user} = useParams();
// identifying root parameter inside this component
// componentDidMount() {
//     const user = this.props.match.params.user;
//    this.setState({user:user})
// }

 
    
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">{user}</h3>
      </div>
    );
  }


export default Card;
