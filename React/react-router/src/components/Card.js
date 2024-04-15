import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
/* useParams Hook is used instead or this.props.match.params and with the use of the hook useParams, it only works with functional components as opposed to the higher order function that works with the class-based components allows you to access route parameters defined in your routing configuration
but it is also used within the react router*/
const Card = ({cards}) => {
   //useParams---extracts a specific parameter from the URL and assigns it to a variable named 'user' 
  
  // identifying root parameter inside this component
  // componentDidMount() 
   // const user = this.props.match.params.user; 
   // this.setState({user:user}) // }
   const {title, body } = useParams();
   
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title}</h3>
      <p>{body}</p>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  console.log(state , ownProps)
  const {title} = ownProps;
   const card = state.cards.find((card)=> card.title === title);
   console.log(state.cards)
  return {card};
  
};
/**
 * -Dispatching
 */
const mapDispatchToProps = (dispatch)=> {
  return{
    deleteCard: (id)=> {
      dispatch({type: 'DELETE_CARD', id})}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
