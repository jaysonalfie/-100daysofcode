import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Modal from './Modal';
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  //creating the navigation function for programmatic redirection
  // const navigate = useNavigate();
  // //creating a callack function that creates a 2 second delay before it is called and perform the redirection
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/about");
  //   }, 2000);

  //   //clears the timer
  //   return () => clearTimeout(timer);
  // }, [navigate]);
  return (
    <div>
      {/* <Modal /> */}
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>
              {card.body}
            </p>
          </div>
        );
      })}
      {/* <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/alex'className="ui header">Alex</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to='/card/willma' className="ui header">Willma</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}
    </div>
  );
};

//connecting to the store
/*
-grabbing state from the state  and apply it to the cards object
-the connect function has the mapStateToProps function passed on to it so that it returns a high order component
whic wraps the contact component and ability to connect to the redux store
-In mapsToState, we apply a cards property to our props and sayiny it is equal to our state.cards in the Redux store
*/
const mapStateToProps = (state) => {
  return {
    //represents properties we want to add to the props
    cards: state.cards,
  };
};
export default connect(mapStateToProps)(Contact);
