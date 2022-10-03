import React from "react";
import "./WellcomeDesign.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Mainpage = () => {
  return (
    <div className="wellcome-div ">
      {/* <h1>Wellcome To CIT</h1> */}
      <section>
        <Navbar />
      </section>

      {/* <button className="btn2">EventName And EventId</button>
      <button className="btn">Registartion</button> */}
      {/* <Link to="/event" className="btn2">
        EventName And EventId
        </Link>
      <Link to="/form" className="btn">
        Registartion
      </Link> */}
      <Outlet />
    </div>
  );
};

export default Mainpage;
