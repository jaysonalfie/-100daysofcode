import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import { Authcontext } from "../contexts/AuthContext";

const Navbar = () => {

    //consuming two different contexts in one component
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(Authcontext);

  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: "120px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Oak Academy</h2>
      <p onClick={changeAuthStatus} style={{ textAlign: "center" }}>
        {isLoggedIn ? "logged in" : "logged out"}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
