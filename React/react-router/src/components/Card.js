import React from "react";
import { useParams } from "react-router-dom";
import {connect} from 'react-redux';

/*
useParams Hook is used instead or this.props.match.params
and with the use of the hook useParams, it only works with functional components as opposed to the higher order function that works with the class-based components 
allows you to access route parameters defined in your routing configuration*/

const Card = ()=> {

  //extracts a specific parameter from the URL and assigns it to a variable named 'user'
    const {title, body} = useParams();
    // const {title, body} = this.props.card;
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
        <h3 className="ui header">{title}</h3>
        <p>{body}</p>
      </div>
    );
  }

 const mapStateToProps = (state, ownProps) => {
    let title = ownProps.match.params.user;
    return{
      card: state.cards.find(card =>{
         return card.title === title
      })

    }
 }
export default connect(mapStateToProps)(Card);
