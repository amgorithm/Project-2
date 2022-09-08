import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./RandomPoem.css";

function RandomPoem() {
  const [poem, setPoem] = useState([]);
  let { poetID } = useParams();
  let { poemID } = useParams();

  useEffect(() => {
    fetch(`https://poetrydb.org/author,title/${poetID};${[poemID]}`)
      .then((response) => response.json())
      .then((poem) => {
        setPoem(poem);
      })
      .catch(console.error);
  }, [poemID, poetID]);

  return (
    <>
      <Header />
      <div className="random-poem">
        {poem.length !== 0 ? (
          poem.map((poem) => (
            <div key={poem.title}>
              <h4 className="random-poem-title">{poem.title}</h4>
              <h4 className="random-poet">
                {" "}
                by <span> {poem.author}</span>{" "}
              </h4>

              {poem.lines.map((p, idx) => (
                <p className="poem-lines" key={idx}>
                  {p}
                </p>
              ))}
            </div>
          ))
        ) : (
          <p className="loading">Loading, please wait.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default RandomPoem;
