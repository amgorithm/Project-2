import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

function PoetDetails() {
  const [poet, setPoet] = useState([]);
  let { poetID } = useParams();

  useEffect(() => {
    fetch(`https://poetrydb.org/author/${poetID}`)
      .then((response) => response.json())
      .then((poet) => {
        console.log("Poet data ->", poet);
        setPoet(poet);
      })
      .catch(console.error);
  }, [poetID]);

  return (
    <div>
      <Header />

      {poet ? (
        poet.map((poem) => (
          <>
            <h2 key={poem.title}>
              {poem.title} by {poem.author}
            </h2>

            {/* Check key for this: */}
            {poem.lines.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </>
        ))
      ) : (
        <p>Loading, please wait.</p>
      )}
    </div>
  );
}

export default PoetDetails;
