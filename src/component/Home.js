import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbarmain from "./Navbarmain";
import Project from "./Project";
import "../Style/Home.css";

const Home = () => {
  return (
    <div >
      <div id="home">
        <Navbarmain />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        {" "}
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
