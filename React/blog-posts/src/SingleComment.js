import React from "react";


//component names are written in caps and camel case
//component nesting
const SingleComment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.picture} alt="profile pic" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export  default SingleComment;
