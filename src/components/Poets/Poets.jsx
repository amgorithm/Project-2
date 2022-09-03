import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Poets({ poets }) {
  const [search, setSearch] = useState("");

  // ? Results = poets
  const [results, setResults] = useState(poets);

  // ? Accounts for not having the data from poets yet when it mounts

  useEffect(() => {
    setResults(poets);
  }, [poets]);

  function handleSearch(e) {
    // ? updating search to appear whats typed into the search
    setSearch(e.target.value);
    // console.log(poets);

    // ? updating the results, filtering them, change each author to lc + change input to lc and check if the input appears anywhere in the poet
    //lc accounts for both whats typed in being lc and makes the poets data c to check it against
    setResults(
      poets.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }
  return (
    <div>
      <Header />

      <input name="search" value={search} onChange={handleSearch} />

      {results.map((poet) => (
        <div key={poet}>
          <Link to={`/author/${poet}`}>
            <p>{poet}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Poets;
