import React from "react";
import "./AboutCompanyBanner.css";
const AboutCompanyBanner = () => {
  return (
    <div className="about-company-banner">
      <div className="about-company-banner-sub-div">
        <div className="about-company-img">
          <img src={require("./Images/about_page_img1.png")} alt="NA" />
        </div>
        <div className="about-company-decription">
          <h2> About Company</h2>
          <h6>
            Start working with an company that can provide everything you need
            to generate awareness, drive traffic, connect with customers, and
            increase sales nascetur ridiculus mus. massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu
          </h6>
          <h6>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyBanner;
