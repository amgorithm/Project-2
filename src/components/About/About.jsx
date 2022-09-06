import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";

function About() {
  return (
    <>
      <Header />

      <div className="about">
        <h2 className="about-title"> About</h2>
        <div className="poem-header">
          <h5 className="about-poem">
            "Poetry is nearer to vital truth than history"
          </h5>
          <h6 className="about-poet">
            {" "}
            - <span> Plato</span>{" "}
          </h6>
        </div>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            euismod purus at tellus eleifend, quis sagittis risus scelerisque.
            Sed quam eros, gravida id ipsum et, egestas dignissim dui. Nulla et
            nisi sed erat vestibulum euismod ut in arcu. Quisque viverra
            sagittis nisl ut lacinia. Etiam a justo leo. Vestibulum faucibus
            placerat dictum. Nulla aliquam commodo leo sit amet bibendum. Donec
            quis sapien venenatis, sollicitudin enim placerat, vestibulum erat.
            Sed lacus odio, euismod non erat quis, rhoncus vulputate ipsum.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
