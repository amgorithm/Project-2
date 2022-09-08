import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Poets.css";

function Poets({ poets }) {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState(poets);

  useEffect(() => {
    setResults(poets);
  }, [poets]);

  function handleSearch(e) {
    setSearch(e.target.value);

    setResults(
      poets.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  return (
    <>
      <Header />
      <div className="poets">
        <h3 className="poets-title">All poets</h3>
        <div className="search-bar">
          <input
            name="search"
            value={search}
            placeholder={"Search by poet"}
            onChange={handleSearch}
          />
        </div>
        <div className="poets-list">
          {results.length !== 0 ? (
            results.map((poet) => (
              <div key={poet}>
                <Link
                  to={`/poet/${poet}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 className="poet-title">{poet}</h5>
                </Link>
              </div>
            ))
          ) : (
            <p className="loading">Loading, please wait. </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Poets;
