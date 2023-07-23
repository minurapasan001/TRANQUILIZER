import React from "react";
import { Link } from 'react-router-dom';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          When you're well-rested, you're better able to cope with stress
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  
                  <div className="service-desc">

                  <i className={d.icon1 } ></i>
                  <Link to="/service1" className="page-scroll">
                  <h3>{d.name1}</h3></Link>
                  <p>{d.text1}</p>

                  <i className={d.icon2 } ></i>
                  <Link to="/Meditation" className="page-scroll">
                  <h3>{d.name2}</h3></Link>
                  <p>{d.text2}</p>

                  <i className={d.icon3 } ></i>
                  <Link to="/BreathingExercise" className="page-scroll">
                  <h3>{d.name3}</h3></Link>
                  <p>{d.text3}</p>

                  <i className={d.icon4 } ></i>
                  <Link to="/BottleFlip" className="page-scroll">
                  <h3>{d.name4}</h3></Link>
                  <p>{d.text4}</p>

                  <i className={d.icon5 } ></i>
                  <Link to="/FiveFourThreeTwoOne" className="page-scroll">
                  <h3>{d.name5}</h3></Link>
                  <p>{d.text5}</p>

                  <i className={d.icon6 } ></i>
                  <Link to="/ChromeExtension" className="page-scroll">
                  <h3>{d.name6}</h3></Link>
                    <p>{d.text6}</p>
                  </div>
                </div>

                
              ))
            : "loading"}
        </div>
        
      </div>
    </div>
  );
};
