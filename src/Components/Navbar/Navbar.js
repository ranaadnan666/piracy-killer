import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/nav-logo.png";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="piracy-outer-nav">
      <div className="piracy-inner-nav">
        <div className="img-logo-piracy">
          <img src={img} />
        </div>
        <div className="nav-piracy-second">
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Team">Team</Link>
          <Link to="Contact">Contact</Link>
        </div>
        <div>
          <div className="nav-piracy-third">
            <i>
              <BsSearch color="white" />
            </i>
            <hr id="white-line" />
            <i>
              <CgMenuRight color="white" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
