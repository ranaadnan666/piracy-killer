// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./card.css";
import Contact from "./contactdata";
export default function ContactCard() {
  return (
    <>
      <div>
        <div className="contact-header">
          <h2> CONTACT US</h2>
          <h1>
            Our Contact <span className="span">Details</span>{" "}
          </h1>
        </div>
        <div className="contact-wrap">
          {Contact.map((item) => {
            return (
              <div className="contact-card">
                <div className="cart-img">
                  <img src={item.ImageURL} alt="img" />
                  <h3>{item.h3}</h3>
                </div>

                <div className="cart">
                  {/* <FontAwesomeIcon /> */}
                  <p className="para">{item.p}</p>
                </div>

                <div className="cart">
                  {/* <FontAwesomeIcon /> */}
                  <p className="para"> {item.p1}</p>
                </div>
                <div className="cart">
                  {/* <FontAwesomeIcon /> */}
                  <p>
                    <a href="/">{item.p2}</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
