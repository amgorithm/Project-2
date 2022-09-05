import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to={"/about"}>
        <p>About</p>
      </Link>
    </div>
  );
}

export default Footer;
