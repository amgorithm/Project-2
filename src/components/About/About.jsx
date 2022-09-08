import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <section className="about">
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
            <span className="about-poesy">Poesy</span> is an online collection
            of contemporary European and North American poetry. Readers can
            enjoy a randomly selected poem and browse a varying selection of
            highlighted poets on the homepage, and explore an anthology of works
            from over 120 poets in the poets section.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
