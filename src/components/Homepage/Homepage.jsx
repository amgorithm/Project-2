import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Homepage({ poets, random }) {
  return (
    <>
      <Header />

      <section className="homepage">
        <section className="random-poem">
          <h3>Random poem</h3>

          {random ? (
            random.map((poem) => (
              <div key={poem.title}>
                <h4>{poem.title}</h4>

                <Link
                  to={`/poet/${poem.author}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h4 className="poet">
                    by <span>{poem?.author} </span>{" "}
                  </h4>
                </Link>

                {poem.lines
                  .filter((item, idx) => idx < 5)
                  .map((p, idx) => (
                    <>
                      <p key={idx}>{p}</p>
                    </>
                  ))}
                <p className="ellipsis">. . . .</p>
                <Link to={`/poet/${poem.author}/${poem.title}`}>
                  <button>Read more → </button>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading, please wait.</p>
          )}
        </section>

        <section className="featured">
          <h3 className="titles">Featured poets</h3>

          <div className="poet-cards">
            <div className="f1">
              <div className="poet-card">
                <div className="poet-info">
                  <Link
                    to={"/poet/Oscar Wilde"}
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Oscar Wilde</h5>
                  </Link>
                  <p>1854 - 1900</p>
                </div>

                <div className="poet-img">
                  <img
                    src={require("../images/Oscar_Wilde.jpeg")}
                    alt={"Oscar Wilde"}
                  />
                </div>
              </div>
            </div>

            <div className="f2">
              <div className="poet-card">
                <div className="poet-info">
                  <Link
                    to={"/poet/Emily Dickinson"}
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Emily Dickinson</h5>
                  </Link>
                  <p>1830 - 1886</p>
                </div>

                <div className="poet-img">
                  <img
                    src={require("../images/Emily_Dickinson.jpeg")}
                    alt={"Emily Dickinson"}
                  />
                </div>
              </div>
            </div>

            <div className="f3">
              <div className="poet-card">
                <div className="poet-info">
                  <Link
                    to={"/poet/Edgar Allan Poe"}
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Edgar Allan Poe</h5>
                  </Link>
                  <p>1809 - 1849</p>
                </div>

                <div className="poet-img">
                  <img
                    src={require("../images/Edgar_Allan_Poe.jpeg")}
                    alt={"Edgar Allan Poe"}
                  />
                </div>
              </div>
            </div>

            <div className="f4">
              <div className="poet-card">
                <div className="poet-info">
                  <Link
                    to={"/poet/Jane Austen"}
                    style={{ textDecoration: "none" }}
                  >
                    <h5>Jane Austen</h5>
                  </Link>
                  <p>1775 - 1817</p>
                </div>

                <div className="poet-img">
                  <img
                    src={require("../images/Jane_Austen.png")}
                    alt={"Jane Austen"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
