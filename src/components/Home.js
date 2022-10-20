import React from "react";
import "../App.css";
// import Imageslide from "./Imageslide";
// import { SliderData } from "./SliderData";

const Home = () => {
  return (
    <>
      {/* <Imageslide slides={SliderData} /> */}
      <div>
        <picture>
        <source media="(min-width: 860px)" srcSet="image8.jpg" className="image" />
        <source media="(min-width: 1000px)" srcSet="image6.jpg" className="image" />
        <img className="image" src="image3.jpg" alt="" />
        <span id="hero">Welcome To The World Of Furniture</span>
        </picture>
      </div>
    </>
  );
};

export default Home;
