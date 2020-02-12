import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom"
import {AuthContext} from "../context/AuthContext";

export const Navbar = ({isAuthenticated, isAdmin}) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    auth.logout();
    history.push("/")
  };

  const userNotAuthenticated = (
    <>
      <li><NavLink to="/">Main</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </>
  );
  const userAuthenticated = (
    <>
      <li><NavLink to="/user">User</NavLink></li>
      {isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
      <li><span onClick={logoutHandler}>Logout</span></li>
    </>
  );

  return (
    <nav>
      <div className="nav-wrapper blue lighten-2">
        <span className="brand-logo">Auth app</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated ? userAuthenticated : userNotAuthenticated}
        </ul>
      </div>
    </nav>
  )
};