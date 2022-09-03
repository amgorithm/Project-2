import React from "react";
import { Link } from "react-router-dom";

function Header({ poets }) {
  return (
    <div>
      <Link to={"/"}>
        <h1>Header</h1>
      </Link>
      <Link to={"/about"}>
        <p>About</p>
      </Link>
      <Link to={"/poets"}>
        <p poets={poets}>Poets</p>
      </Link>
    </div>
  );
}

export default Header;
