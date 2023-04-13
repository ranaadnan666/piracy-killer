import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";
export default function Contactus() {
  return (
    <div className="contact-main-contact">
      <div className="contact-left-side" data-aos="zoom-in-right">
        <h1>Feel free to contact us</h1>
        <p data-aos="zoom-in">
          Start working with an company that can provide every thing you need to
          generate awareness, drive traffic connect with customers, and increase
          sales nascetur
        </p>
         <div className="icon-text-11">

    
          <div className="abc-left" >
          <BsTelephoneInbound id="abv-ico"/>
          <span>009-215-5596 Give us a call</span>
          </div>
       
          <div className="abc-left">
          <AiOutlineMail id="abv-icon11"/>
        <span>[email protected] 24/7 online support </span></div>
        </div>
      </div>
      <div className="contact-right-side" data-aos="zoom-in-left">
        <div className="text-box-50">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
        </div>
        <span>
          <div className="text-box-100">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="text-box-100">
            <input type="text" placeholder="Message" />
          </div>
        </span>
        <div className="text-box-btn">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
