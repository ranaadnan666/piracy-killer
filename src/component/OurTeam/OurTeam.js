import React from "react";
import Data from "./Data";
import "./OurTeam.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const OurTeam = () => {
  return (
    <div className="ourTeam">
      <p>Our Team</p>
      <h1>Our Best Experts</h1>
      <div className="teamProfile">
        {Data.map((item) => {
          return (
            <div key={item.id} className="profiles">
              <img src={item.photo} alt="" />
              <h3>{item.name}</h3>
              <h5>{item.designation}</h5>
              <div className="social-icons">
                <AiFillFacebook size={24} color="#3b5998" />
                <BsTwitter size={24} color="#00acee" />
                <BsInstagram size={24} color="#E1306C" />
                <GrLinkedinOption size={24} color="#0072b1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
