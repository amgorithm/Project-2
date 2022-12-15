import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PoetDetails from "./components/PoetDetails/PoetDetails.jsx";
import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Poets from "./components/Poets/Poets";
import RandomPoem from "./components/RandomPoem/RandomPoem";

function App() {
  const [poets, setPoets] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("https://poetrydb.org/authors")
      .then((response) => response.json())
      .then((poetData) => {
        setPoets(poetData.authors);
      })
      .catch(console.error);

    fetch("https://poetrydb.org/random")
      .then((response) => response.json())
      .then((randomPoem) => {
        setRandom(randomPoem);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage random={random} poets={poets} />} />
        <Route path="/poet/:poetID" element={<PoetDetails />} />
        <Route path="/poet/:poetID/:poemID" element={<RandomPoem />} />
        <Route path="/about" element={<About />} />
        <Route path="/poets" element={<Poets poets={poets} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
