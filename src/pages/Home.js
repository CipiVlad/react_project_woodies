import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";
import "../scss/Navbar.scss";
import table from "../Simple-modern-balcony-small-coffee-table-living-room-small-apartment-sofa-side-table-simple-home-bedroom 1.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="home_bg_yellow">
        <div className="home_bg_white">
          <Navbar />
          <div className="home_bg_white_flex">
            <div>
              <h2>
                Are you looking for <strong>woodden</strong>
              </h2>
              <h2>
                <strong>furniture</strong> for your place?
              </h2>
              <h1>This is the</h1>
              <h1>Right Place</h1>
              <Link to="/categories">Explore Furniture</Link>
            </div>
            <div>
              <img src={table} alt="balcony table" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
