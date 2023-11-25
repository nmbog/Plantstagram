import React from "react";
import plantImage from "./img/plant-2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          <img src={plantImage} alt="menu" class="plant_icon"></img>
          <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <a href="profiles.html">Connect</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
