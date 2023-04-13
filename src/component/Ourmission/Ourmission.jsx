import React from "react";
import "./Ourmission.css";
const Ourmission = () => {
  return (
    <div className="about-company-banner">
      <div className="about-company-banner-sub-div">
        <div className="about-company-img">
          <img src={require("./Images/our_mission.png")} alt="NA" />
        </div>
        <div className="about-company-decription">
          <h2> Our Mission</h2>
          <h6>
            Start working with an company that can provide everything you need
            to generate awareness, drive traffic, connect with customers, and
            increase sales nascetur ridiculus mus. massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Ourmission;
