import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="form">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <Link className="btn" to="/">
        Back To Home
      </Link>
    </section>
  );
};

export default Error;
