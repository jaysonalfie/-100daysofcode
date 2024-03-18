import React from "react";
import {createRoot} from 'react-dom/client'

import animegirl from "./images/animegirl.jpg";

//creating a component and being able to nest other components in it
const App = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar" >
        <img src ={animegirl} alt="profile picture" />
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          Sarah
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00PM</span>
        </div>
        <div className="text">It's amazing</div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
