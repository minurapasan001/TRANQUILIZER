import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from "./components/navigation";
import { Header } from "./components/header"; 
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

// New route components
import BottleFlip from "./services/bottleflip";
import BreathingExercise from "./services/breathing";
import Meditation from "./services/meditation";
import FiveFourThreeTwoOne from "./services/methods"; 
import ChromeExtension from "./services/chromeextension";
import LogIn from "./login/login"
import Register from "./login/singin"
// etc

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import SingIn from "./components/singin";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <Services data={landingPageData.Services} />
            <About data={landingPageData.About} /> 
            <Contact data={landingPageData.Contact} />
            {/* <SingIn /> */}
            
          </>
        } />

        <Route path="/BottleFlip" element={<BottleFlip />} />
        <Route path="/BreathingExercise" element={<BreathingExercise />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/FiveFourThreeTwoOne" element={<FiveFourThreeTwoOne />} />
        <Route path="/ChromeExtension" element={<ChromeExtension />}  />
        <Route path="/Login" element={<LogIn />} />
        <Route path= "/Register" element={<Register />} />
       

      </Routes>
    </Router>
  );
};

export default App;