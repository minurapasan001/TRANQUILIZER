import React, { useState } from "react";
import "./bottleflip.css";

const BottleFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipBottle = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setIsFlipped(false);
    }, 2000); // Flip animation duration in milliseconds (adjust as needed)
  };

  return (
    <div className="bottle-flip-container">
      <div className={`bottle ${isFlipped ? "flipped" : ""}`}>
        <div className="bottle-body"></div>
        <div className="bottle-neck"></div>
        <div className="bottle-cap"></div>
      </div>
      <button className="flip-button" onClick={flipBottle}>
        Flip Bottle
      </button>
      {isFlipped && (
        <div className="flipped-content">
          <h2>The bottle has been flipped!</h2>
          <p>Did it land upright?</p>
        </div>
      )}
    </div>
  );
};

export default BottleFlip;
