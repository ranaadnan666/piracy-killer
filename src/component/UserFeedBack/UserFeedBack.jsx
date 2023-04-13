import React from "react";
import "./UserFeedBack.css";
const UserFeedBack = () => {
  return (
    <div className="feedback-div">
      <h1>Love From Clients</h1>
      <div className="feedback-div-decription">
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          iusto ducimus! Recusandae Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate repudiandae provident nulla!
        </h6>
        <div className="feedback-user">
          <div className="fuser-image">
            <img src={require("./Image/tc2fpe.jpg")} alt="" />
          </div>
          <div className="fuser-detail">
            <h3>Jason Statham</h3>
            <p>CEO Microhost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBack;
