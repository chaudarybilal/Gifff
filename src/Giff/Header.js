import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="header">
        <div class="logo">
          <h1>GIPHY</h1>
        </div>
        <div class="header-right">
          <Link to="/" className="active">
            <div className="a">Home</div>
          </Link>
          <Link to="/About">
            <div className="a">Favourite</div>
          </Link>
          <Link to="/contact">
            <div className="a">FeedBack</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
