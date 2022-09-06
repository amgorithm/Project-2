import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ poets }) {
  return (
    <>
      <div className="header">
        <Link style={{ textDecoration: "none", color: "#0000a0" }} to={"/"}>
          <h1>Poesy</h1>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "#0000a0" }}
          to={"/poets"}
        >
          <h2 poets={poets}>Poets</h2>
        </Link>
      </div>
      <hr />
    </>
  );
}

export default Header;
