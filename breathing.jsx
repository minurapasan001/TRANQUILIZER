import React, { useState, useRef } from "react";
import "./breathing.css";

const BreathingExercise = () => {
  const [breathState, setBreathState] = useState("Breathe In");
  const [seconds, setSeconds] = useState(4);
  const [count, setCount] = useState(1);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    setSeconds(4);
    setCount(1);
    setBreathState("Breathe In");
  };

  const handleBreathChange = () => {
    if (count < 4) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount(1);
      setBreathState((prevState) =>
        prevState === "Breathe In" ? "Hold" : "Breathe In"
      );
    }

    setSeconds(4);
  };

  return (
    <div className="breathing-container">
      <h1 className="title">Breathing Exercise</h1>
      <div className="breathing-area">
        <div className="timer">{seconds}s</div>
        <div className="breath-state">{breathState}</div>
      </div>
      <div className="buttons">
        <button className="start-button" onClick={startTimer}>
          Start
        </button>
        <button className="stop-button" onClick={stopTimer}>
          Stop
        </button>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <br></br>
      <button className="breath-change-button" onClick={handleBreathChange}>
        {count < 4 ? "Breathe In/Out" : "Hold"}
      </button>
    </div>
  );
};

export default BreathingExercise;
