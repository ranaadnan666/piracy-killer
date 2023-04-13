import React from "react";
import Mdata from "../../Components/Marketing-services/Mdata";
import './style.css'
export default function Bestfeature() {
  return (
    <div className="Best-feature-1">
    <p>OUR FEATURES</p>
    <h1>Our Best Features</h1>
      <div className="best-feature-card-parent">
        {Mdata.map((item) => {
          return (
            <div className="best-inner-feature" data-aos="zoom-out">
              <img src={item.pic} data-aos="zoom-in"/>
              <h2>{item.name}</h2>
              <p data-aos="zoom-out">{item.desc}</p>
              <button>Read more</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
