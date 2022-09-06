import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <Link
          style={{ textDecoration: "none", color: "#0000a0" }}
          to={"/about"}
        >
          <h2>About</h2>
        </Link>
      </div>
    </>
  );
}

export default Footer;
