import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Homepage({ poets, random }) {
  // const [search, setSearch] = useState("");
  // const [results, setResults] = useState(poets);
  // const addHearted = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");
  //   setHearted([hearted]);
  // };
  // useEffect(() => {
  //   setResults(poets);
  // }, [poets]);
  // const handleHeart = (e) => {
  //   setHearted({ [e.target.name]: e.target.value });
  // };
  // useEffect(() => {
  //   if (search.author === "") {
  //     return;
  //   }
  //   fetch(`https://poetrydb.org/author/${search}`)
  //     .then((response) => response.json())
  //     .then((authorData) => {
  //       console.log("Author data->", authorData);
  //       setSearch(authorData.authors);
  //     })
  //     .catch(console.error);
  // }, [search]);

  // function handleSearch(e) {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   console.log(poets);
  //   setResults(
  //     poets.filter((item) =>
  //       item.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // }

  return (
    <div>
      <Header />

      {/* <input name="search" value={search} onChange={handleSearch} />

      {results
        .filter((item, idx) => idx < 10)
        .map((poet) => (
          <div key={poet}>
            <Link to={`/author/${poet}`}>
              <p>{poet}</p>
            </Link>
          </div>
        ))} */}

      <h3>Random poem</h3>
      {random.map((poem) => (
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
          <Link to={`/author/${poem.author}/${poem.title}`}>
            <button>Continue reading</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
