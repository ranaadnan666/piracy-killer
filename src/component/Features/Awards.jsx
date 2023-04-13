import React from "react";
import "./Awards.css";
const Awards = () => {
  return (
    <div className="features">
      <div className="features-sub-div">
        <img src={require("./Images/award1.png")} alt="NA" />
        <h6>Good Design Award 2022</h6>
      </div>
      <div className="features-sub-div">
        <img src={require("./Images/award2.png")} alt="NA" />
        <h6>CSS award for best site design</h6>
      </div>
      <div className="features-sub-div">
        <img src={require("./Images/award3.png")} alt="NA" />
        <h6>Reddit best SEO USA 2022</h6>
      </div>
      <div className="features-sub-div">
        <img src={require("./Images/award4.png")} alt="NA" />
        <h6>Awards site of the year 2022</h6>
      </div>
    </div>
  );
};

export default Awards;
