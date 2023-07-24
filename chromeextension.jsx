import React, { useState } from 'react';
import './chromeextension.css';

const emotionsList = [
  "Happy",
  "Sad",
  "Excited",
  "Angry",
  "Calm",
  "Surprised",
  "Confused",
  "Loved",
  "Anxious",
  // Add more emotions as needed
];

const MyFeelingComponent = () => {
  const [feeling, setFeeling] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimate(true);

    // Simulate a delay for the animation to take effect
    setTimeout(() => {
      setAnimate(false);
      setFeeling(""); // Clear the input field after the animation
    }, 1500); // 1500 milliseconds (adjust this as needed)
  };

  const handleEmotionSelect = (emotion) => {
    setFeeling(emotion);
  };

  return (
    <div className="main-containe">
      <br /><br /><br /><br /><br /><br /><br />
      <h2>How are you feeling today?</h2>
      <div className="emotion-button">
        {emotionsList.map((emotion) => (
          <button key={emotion} onClick={() => handleEmotionSelect(emotion)}>
            {emotion}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
          placeholder="Enter your feeling"
          className="feeling-input"
        />
        <button type="submit" className="submit-yij">Submit</button>
      </form>
      <div className={`emoji-containe ${animate ? "animate" : ""}`}>
        {feeling && (
          <div className="emoj-wrappe">
            <span role="img" aria-label={feeling} className="selected-emji">
              {feeling === "Happy" && "😄"}
              {feeling === "Sad" && "😢"}
              {feeling === "Excited" && "🎉"}
              {feeling === "Angry" && "😠"}
              {feeling === "Calm" && "😌"}
              {feeling === "Surprised" && "😯"}
              {feeling === "Confused" && "😕"}
              {feeling === "Loved" && "❤️"}
              {feeling === "Anxious" && "😬"}
            </span>
            <p className="feeling-tex">You're feeling {feeling}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFeelingComponent;
