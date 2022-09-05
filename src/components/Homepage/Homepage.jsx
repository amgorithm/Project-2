import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Homepage({ poets, random }) {
  return (
    <div>
      <Header />

      <h3>Random poem</h3>
      {random ? (
        random.map((poem) => (
          <div key={poem.title}>
            <h4>{poem.title}</h4>
            <h5>by {poem?.author}</h5>

            {poem.lines
              .filter((item, idx) => idx < 5)
              .map((p, idx) => (
                <>
                  <p key={idx}>{p}</p>
                </>
              ))}
            <p>. . .</p>
            <Link to={`/poet/${poem.author}/${poem.title}`}>
              <button>Read more → </button>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading, please wait.</p>
      )}

      <h3>Featured poets</h3>
      <div className="featured">
        <Link to={"/poet/Oscar Wilde"}>
          <h5>Oscar Wilde</h5>
        </Link>
        <Link to={"/poet/Emily Dickinson"}>
          <h5>Emily Dickinson</h5>
        </Link>

        <Link to={"/poet/Edgar Allan Poe"}>
          <h5>Edgar Allan Poe</h5>
        </Link>

        <Link to={"/poet/Jane Austen"}>
          <h5>Jane Austen</h5>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
