import React from "react";
import BookTrailSection from "./BookTrailSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Testimonial from "./Testimonial";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <Section1 />
      <Section2 />
      <Testimonial />
      <Section4 />
      <Section5 />
      <BookTrailSection />
    </React.Fragment>
  );
}

export default Home;
