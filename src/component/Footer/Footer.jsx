import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="content-1">
          <img src={require("./footer_logo.png")} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dolorum eius minima, voluptas quisquam vero similique earum, quia
            mollitia commodi illo.
          </p>
          <h2>Follow Us</h2>
          <div className="social-links">
            <img src={require("./Icons/facebook.png")} alt="" />
            <img src={require("./Icons/google plus.png")} alt="" />

            <img src={require("./Icons/linkedin.png")} alt="" />
            <img src={require("./Icons/twitter.png")} alt="" />
          </div>
        </div>
        <div className="com-award">
          <img className="badge" src={require("./Icons/badge.png")} alt="" />
          <h3>Best SEO company 2022</h3>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-1">
          <div className="fcontact">
            <div>
              <GrMapLocation id="icon-grmap" size={28} />
            </div>
            <div>
              <h3>New York, USA</h3>
              <p>1010 Grand Avenue</p>
            </div>
          </div>
          <div className="fcontact">
            <div>
              <BsTelephone color="tomato" size={28} />
            </div>
            <div>
              <h3>+231 2321 42</h3>
              <p>Give us a call</p>
            </div>
          </div>
        </div>
        <div className="footer-right-2">
          <div className="useful-links">
            <h2>Useful Links</h2>
            <div className="footerlinks">
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscribe">
            <h2>Subscribe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cum explicabo soluta dolore aut architecto quam, ex iusto
              obcaecati, quis consequuntur. Odio, ducimus maiores voluptas
              dolorem error animi officia ipsum.
            </p>
            <div>
              <input type="text" />
              <button>
                <RiSendPlaneFill color="#FA6742" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
