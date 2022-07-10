import React from "react";
import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
// import logo from "../Group 25.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <a href="/" className="navbar_woodies">
          WOODIES
        </a>
        <ul className="navbar_ul">
          {/* <img src={logo} alt="balcony_table" className="navbar_logo" /> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/howitworks">How It Works</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/testimony">Testimony</Link>
          </li>
          <li>
            <Link to="/signup" className="navbar_signUp_link">
              SIGN UP
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
