import React from "react";
import { Link } from "react-router-dom";
import "./WellcomeDesign.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Wecome To CIT</h1>
      <Link className="btn2" to="/form">
        Register
      </Link>
      <Link className="btn" to="/event">
        Event
      </Link>
    </nav>
  );
};

export default Navbar;
