import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">
          GIPHY
        </a>
        <div class="header-right">
          <Link to="/">Home</Link>

          <Link to="/About">Favourite</Link>

          <Link to="/contact">FeedBack</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
