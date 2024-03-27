import React from "react";
import northernPic from "./images/northernhemisphere.jpg";
import southernPic from "./images/southernhemisphere.jpg";
import "./style.css";

/*
Destructuring assignment is a powerful feature in JavaScript that allows you to unpack values from objects or arrays into distinct variables in a concise and readable way. 
It's a shorthand syntax that simplifies how you extract data from these structures
NB: spaces should not be put in the variables as they could bring errors
*/
//creating a configuration object
const hemisphereConfig = {
  Northern: {
    text: "It is northern hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "It is southern hemisphere ",
    picture: southernPic,
  },
};

//using deconstruction syntax instead of using props
const HemisphereDisplay = ({ latitude }) => {
  //ternary expression - shorthand way of writing an if-esle statement
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  //  const picture = latitude > 0 ? northernPic: southernPic;

  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
