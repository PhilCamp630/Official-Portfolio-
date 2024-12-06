import React from "react";
import './AnimatedCamouflage.css';

const AnimatedCamouflage = () => {
  const shapes = [1, 2, 3, 4, 5]; // Array to generate shapes dynamically

  return (
    <div className="slider-thumb">
      {shapes.map((shape, index) => (
        <div key={index} className={`shape shape-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default AnimatedCamouflage;