import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./PoetDetails.css";
import Footer from "../Footer/Footer";
import "./PoetDetails.css";

function PoetDetails() {
  const [poet, setPoet] = useState([]);
  let { poetID } = useParams();

  useEffect(() => {
    fetch(`https://poetrydb.org/author/${poetID}`)
      .then((response) => response.json())
      .then((poet) => {
        setPoet(poet);
      })
      .catch(console.error);
  }, [poetID]);

  return (
    <>
      <Header />
      <div className="poet-details">
        {poet.length !== 0 ? (
          poet.map((poem) => (
            <>
              <h4 className="poets-poem-titles" key={poem.title}>
                {poem.title}
              </h4>
              <h4 className="poem-author">
                by <span> {poem.author}</span>{" "}
              </h4>

              {poem.lines.map((p, idx) => (
                <p className="poem-lines" key={idx}>
                  {p}
                </p>
              ))}
            </>
          ))
        ) : (
          <p className="loading">Loading, please wait.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PoetDetails;
