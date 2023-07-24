import React, { useState, useRef } from "react";
import "./methods.css";

const FiveFourThreeTwoOne = () => {
  const [count, setCount] = useState(5);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const stopCountdown = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(5);
  };

  return (
    <div className="countdown-container">
      <h1 className="title">5-4-3-2-1 Method</h1>
      <div
        className={`countdown-area ${
          count === 0 ? "countdown-animation" : ""
        }`}
      >
        <div className="timer">{count === 0 ? "Focus on Your Senses" : count}</div>
      </div>
      <div className="buttons">
        {count === 0 ? (
          <button className="restart-button" onClick={startCountdown}>
            Restart
          </button>
        ) : (
          <>
            <button className="start-button" onClick={startCountdown}>
              Start
            </button>
            <button className="stop-button" onClick={stopCountdown}>
              Stop
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FiveFourThreeTwoOne;
