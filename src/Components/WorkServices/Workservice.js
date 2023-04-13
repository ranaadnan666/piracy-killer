import React from "react";
import Workdata from "./Workdata";
import "./style.css";
export default function Workservice() {
  return (
    <div>
      <span id="step-head">
        <p>EASE STEPS</p>
        <h1>Our Working Process</h1>
      </span>
      <div className="work-space-main-card">
        {Workdata.map((item) => {
          var data = item.bgcol;
          return (
            <div className="work-space-inner-card">
              <div
                id="work-data-bg"
                style={{ backgroundColor: data }}
                data-aos="zoom-in"
              >
                <img src={item.img} />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <button id="get-started-1">Get Started</button>
    </div>
  );
}
