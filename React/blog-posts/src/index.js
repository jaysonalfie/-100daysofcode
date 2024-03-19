import React from "react";
import { createRoot } from "react-dom/client";
import SingleComment from "./SingleComment";
import animegirl from "./images/animegirl.jpg";
import bandboy from "./images/boy1.jpg";
import dustboy from "./images/dustboy.jpg";
import UserCard from "./UserCard";

//creating a component and being able to nest other components in it
/* steps to create a resusable component
-identify the jsx that appears to be dublicated
think of a descriptive name for reusable component
create a new fill for reusable component
create a new component in the new file
make the new component configurable by using 'props' systems */

/*
prop-system is a system from a parent component to a child or a nested component 
its purpose is to customize or configure a child component
the single commnet is now taken as props and passed into the  user card comp*/

const App = () => {
  return (
    <div className="ui comments">
    <UserCard>
      <div>
        Hello there my name is Sarah and I live in Minnesota
      </div>
    </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today at 5:00PM"
          text="it is amazing"
          picture={animegirl}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Jack"
          date="Today at 6:00PM"
          text="great job"
          picture={dustboy}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 7:00PM"
          text="Thank you"
          picture={bandboy}
        />
      </UserCard>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
