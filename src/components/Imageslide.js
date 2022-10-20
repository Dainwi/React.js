import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";

const Imageslide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    setInterval(() => {
      setCurrent((current) => (current > length ? 0 : current + 1));
    }, 3000);
  }, []);

  return (
    <>
      <div className="slide">
        {SliderData.map((slides, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slides.image}
                  alt="fuurniture image"
                  className="image"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Imageslide;
