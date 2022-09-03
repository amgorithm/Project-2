import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

function RandomPoem() {
  const [poem, setPoem] = useState([]);
  let { poetID } = useParams();
  let { poemID } = useParams();

  useEffect(() => {
    fetch(`https://poetrydb.org/author,title/${poetID};${[poemID]}`)
      .then((response) => response.json())
      .then((poem) => {
        console.log("Poem data ->", poem);
        setPoem(poem);
      })
      .catch(console.error);
  }, [poemID]);

  return (
    <div>
      <Header />
      {poem.map((poem) => (
        <div>
          <p>
            {poem.title} by {poem.author}
          </p>

          {poem.lines.map((p) => (
            <p>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RandomPoem;
