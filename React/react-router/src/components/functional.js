// import React from "react";
// import {connect} from 'react-redux';

// class Card extends React.Component{
     

//     onButtonClick = () =>{
//         let id = this.props.card.id;
//         this.props.deleteCard(id);
//     }

//     render(){
//         console.log((this.props))
//         const {title, body} = this.props.Card;
//         return(
//             <div
//             className="ui raised very padded text container segement"
//             style = {{marginTop: '80px'}}
//             >
//                 <h3 className="ui header">{title}</h3>
//                 <p>{body}</p>
//                 <button className="ui primary right floated button" onClick={this.onButtonClick}>Delete</button>
//             </div>
//         )
//     }

//     const mapStateToProps = (state,  ownProps)=>{
//         let title = ownProps.match.params.user;
//         return{
//             card:state.cards.find(card => card.title === title)
//            }
//     }

//     const mapDispatchToProps = (dispatch)=>{
//         return{
//             deleteCard: (id)=>{dispatch({type: 'DELETE_CARD', id})}
//         }
//     }
   
// }
// export default connect(mapStateToProps)(Card);