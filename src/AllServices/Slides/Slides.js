import React from "react";
import Abc from "./Slide";
import './style.css'
export default function Slides() {
  return (
    <div id="AllServices">
    <h2>All Services</h2>
    <div className="parent-1-slide">
      {Abc.map((item) => {
        return (
          <div className="jnner-slide-11">
            <img src={item.img}/>
            <h3>{item.des}</h3>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}
