import React, { useState, useRef } from "react";
import "./meditation.css";

const Meditation = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startMeditation = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopMeditation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetMeditation = () => {
    setCount(0);
  };

  return (
    <div className="meditation-container">
      <h1 className="title">MEDITATON EXERCISE</h1>
      <div className="meditation-area" onClick={startMeditation}>
        <div className={`timer ${count % 2 === 0 ? "timer-animation" : ""}`}>
          {count}s
        </div>
      </div>
      <div className="buttons">
        <button className="start-button" onClick={startMeditation}>
          Start
        </button>
        <button className="stop-button" onClick={stopMeditation}>
          Stop
        </button>
        <button className="reset-button" onClick={resetMeditation}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Meditation;
