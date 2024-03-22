import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Home.scss";
import Steps from "../Steps/Steps";

import Banner from "../Banner/Banner";
import Section from "../Section/Section";
import Gallery from "../Gallery/Gallery";
import IT from "../IT/IT";
import Solution from "../Solution/Solution";
import Area from "../Area/Area";
import Tech from "../Tech/Tech";
const Test = () => {
  return (
    <div className="landing-page">
      <Banner />
      <Section />
      <Gallery />
      <IT />
      <Solution />
      <Area />
      <Steps />
      <Tech />
    </div>
  );
};

export default Test;
